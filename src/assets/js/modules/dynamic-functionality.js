/*
 * Modules
 */
import { GLOBAL_SETTINGS } from './global-settings';
import Client from 'shopify-buy/index.unoptimized.umd';
import Cookies from 'js-cookie';

let priceCurrency = '$';
let checkoutLink = '';
const loadingOverlay = document.querySelector('[data-loading-overlay]');

const selectorsContainers = {
  productVariants: '[data-containers="productVariants"]',
};

const selectorsActiveVariant = {
  availableAndMaxQuantities: '[data-active-variant="availableAndMaxQuantities"]',
  availableQuantities: '[data-active-variant="availableQuantities"]',
  discountPercentage: '[data-active-variant="discountPercentage"]',
  price: '[data-active-variant="price"]',
  compareAtPrice: '[data-active-variant="compareAtPrice"]',
  checkoutLink: '[data-active-variant="checkout"]',
  firstVariantPercentage: '[data-active-variant="firstVariantPercentage"]',
  unitsLeft: '[data-active-variant="unitsLeft"]',
  calloutTitles: '[data-active-variant="calloutTitles"]',
  calloutDescriptions: '[data-active-variant="calloutDescriptions"]',
  activeVariantTitle: '[data-active-variant="activeVariantTitle"]',
};

const checkUserLocation = () => {
  fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${GLOBAL_SETTINGS.locationApiKey}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const isUK = data.country_code2 === 'GB';

      Cookies.set('userFromUK', isUK, { expires: 7 });

      priceCurrency = isUK ? '£' : '$';

      generateProduct(isUK);
    })
    .catch(function (err) {
      console.warn('Something went wrong.', err);
      generateProduct();
    });
};

const generateProduct = (isUK = false) => {
  let client;

  if (isUK) {
    client = Client.buildClient({
      domain: GLOBAL_SETTINGS.domainUK,
      storefrontAccessToken: GLOBAL_SETTINGS.storefrontTokenUK,
    });
  } else {
    client = Client.buildClient({
      domain: GLOBAL_SETTINGS.domainUS,
      storefrontAccessToken: GLOBAL_SETTINGS.storefrontTokenUS,
    });
  }

  // Fetch a single product by Handle
  const handle = GLOBAL_SETTINGS.productHandle;

  // main request for variants
  const productsQuery = client.graphQLClient.query((root) => {
    root.add('productByHandle', { args: { handle } }, (product) => {
      product.add('title');
      product.add('handle');
      product.add('id');
      product.addConnection('variants', { args: { first: 99 } }, (variant) => {
        variant.add('id');
        variant.add('price');
        variant.add('compareAtPrice');
        variant.add('title');
        variant.add('availableForSale');
        variant.add('quantityAvailable');
      });
    });
  });

  client.graphQLClient.send(productsQuery).then(({ model, data }) => {
    const allVariants = model.productByHandle.variants;
    const activeVariant = model.productByHandle.variants.find(
      (variant) => variant.availableForSale
    );
    const activeVariantIndex = model.productByHandle.variants.findIndex(
      (variant) => variant.availableForSale
    );

    client.checkout.create().then((checkout) => {
      const lineItemsToAdd = [
        {
          variantId: activeVariant.id,
          quantity: 1,
        },
      ];

      // Add an item to the checkout
      client.checkout.addLineItems(checkout.id, lineItemsToAdd).then((checkout) => {
        // Do something with the updated checkout
        checkoutLink = checkout.webUrl;

        updateFrontEndData(activeVariant, activeVariantIndex, allVariants);
      });
    });
  });
};

const checkIfUserVisited = () => {
  const checkLocationCookie = Cookies.get('userFromUK');

  if (checkLocationCookie) {
    const isFromUK = checkLocationCookie !== 'false';

    generateProduct(isFromUK);

    priceCurrency = isFromUK ? '£' : '$';
  } else {
    checkUserLocation();
  }
};

const globalActiveVariantHTML = (activeVariant, activeVariantIndex, allVariants) => {
  const firstVariantPercentage =
    Math.round(
      ((parseFloat(allVariants[0].compareAtPrice) - parseFloat(allVariants[0].price)) /
        parseFloat(allVariants[0].compareAtPrice)) *
        100
    ) + '%';
  const compareAtPrice = parseFloat(activeVariant.compareAtPrice);
  const price = parseFloat(activeVariant.price);
  const maxQuantity = GLOBAL_SETTINGS.variantsStartingQuantities[activeVariantIndex];
  const currentQuantity = activeVariant.quantityAvailable;
  const discountPercentage = Math.round(((compareAtPrice - price) / compareAtPrice) * 100) + '%';
  const activeVariantElements = document.querySelectorAll(
    `${selectorsActiveVariant.checkoutLink}, ${selectorsActiveVariant.compareAtPrice}, ${selectorsActiveVariant.availableAndMaxQuantities}, ${selectorsActiveVariant.availableQuantities}, ${selectorsActiveVariant.discountPercentage}, ${selectorsActiveVariant.price}, ${selectorsActiveVariant.firstVariantPercentage}, ${selectorsActiveVariant.unitsLeft}, ${selectorsActiveVariant.calloutTitles}, ${selectorsActiveVariant.calloutDescriptions}, ${selectorsActiveVariant.activeVariantTitle}`
  );

  if (activeVariantElements.length) {
    activeVariantElements.forEach((x) => {
      switch (x.dataset.activeVariant) {
        case 'discountPercentage':
          x.innerHTML = discountPercentage;
          break;
        case 'compareAtPrice':
          x.innerHTML = priceCurrency + compareAtPrice;
          break;
        case 'price':
          x.innerHTML = priceCurrency + price;
          break;
        case 'availableQuantities':
          x.innerHTML = currentQuantity;
          break;
        case 'availableAndMaxQuantities':
          x.innerHTML = `${currentQuantity}/${maxQuantity}`;
          break;
        case 'firstVariantPercentage':
          x.innerHTML = firstVariantPercentage;
          break;
        case 'checkout':
          x.setAttribute('href', checkoutLink);
          break;
        case 'unitsLeft':
          x.innerHTML = currentQuantity === 1 ? 'unit' : 'units';
          break;
        case 'calloutTitles':
          x.innerHTML = GLOBAL_SETTINGS.calloutTitles[activeVariantIndex];
          break;
        case 'calloutDescriptions':
          x.innerHTML = GLOBAL_SETTINGS.calloutDescriptions[activeVariantIndex];
          break;
        case 'activeVariantTitle':
          x.innerHTML = activeVariant.title;
          break;
        default:
          break;
      }
    });
  }
};

const productVariantsHTML = (variants, activeVariantIndex) => {
  const variantContainer = document.querySelector(selectorsContainers.productVariants);
  let variantsHTML = '';

  variants.forEach((variant, index) => {
    const isAvailable = activeVariantIndex === index;
    const batchLabel = GLOBAL_SETTINGS.variantsBatchLabels[index];
    const { title, price, compareAtPrice, quantityAvailable } = variant;
    const maxQuantity = GLOBAL_SETTINGS.variantsStartingQuantities[index];
    const discountPercentage = Math.round(((compareAtPrice - price) / compareAtPrice) * 100) + '%';
    let stockInfoHtml = isAvailable
      ? `${quantityAvailable}/${maxQuantity} available - ${discountPercentage} off`
      : `${maxQuantity} available - ${discountPercentage} off`;
    const variantDescription = GLOBAL_SETTINGS.variantsDescriptions[index].replaceAll(
      '[percentage]',
      discountPercentage
    );
    const cartFoot = isAvailable
      ? `<div class="card__foot">
          <a href="${checkoutLink}" class="btn btn--yellow btn--large">Buy now</a>
        </div>`
      : '';

    if (index < activeVariantIndex) {
      stockInfoHtml = 'Sold out';
    }

    variantsHTML += `
      <div class="card-offer ${isAvailable ? '' : 'disabled'} ${index < activeVariantIndex ? 'hidden' : ''}">
        <div class="card__head">
          <h4>${batchLabel}</h4>
        </div>

        <div class="card__body">
          <div class="card__content">
            <h2>${title}</h2>

            <p>${variantDescription}</p>
          </div>

          <div class="card__price">
            <span class="price-old">${priceCurrency + parseFloat(compareAtPrice)}</span>

            <h2 class="price">${priceCurrency + parseFloat(price)}</h2>

            <div class="price-stamp">
            ${stockInfoHtml}
            </div>
          </div>
        </div>

        ${cartFoot}
      </div>
    `;
  });

  if (variantContainer) {
    variantContainer.innerHTML = variantsHTML;
  }
};

const updateFrontEndData = (activeVariant, activeVariantIndex, allVariants) => {
  globalActiveVariantHTML(activeVariant, activeVariantIndex, allVariants);

  productVariantsHTML(allVariants, activeVariantIndex);

  if (loadingOverlay) {
    loadingOverlay.classList.add('loaded');
  }
};

checkIfUserVisited();
