/*
 * Modules
 */
import { GLOBAL_SETTINGS } from './global-settings';
import Client from 'shopify-buy/index.unoptimized.umd';
import Cookies from 'js-cookie';
import { initCountdown } from './countdown';

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

let globalDiscount = 0;

const selectors = {
  homepage: {
    title: '[data-homepage-hero-title]',
    subtitle_text: '[data-homepage-hero-subtitle-text]',
    notice: '[data-homepage-hero-notice]'
  },
  callout: {
    title: '[data-batch-title]',
    subtitle: '[data-batch-subtitle]',
    body_text: '[data-batch-body-text]'
  },
  preorder: {
    title: '[data-preorder-title]'
  }
}

const checkUserLocation = () => {
  fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${GLOBAL_SETTINGS.locationApiKey}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const cookieData = JSON.stringify(data);

      Cookies.set('userLocationData', cookieData, { expires: 7 });

      priceCurrency = data.currency.symbol;

      generateProduct(data);
    })
    .catch(function (err) {
      console.warn('Something went wrong.', err);
      generateProduct();
    });
};

const generateProduct = (userLocationData = false) => {
  let client;

  if (userLocationData && userLocationData.currency.code === 'GBP') {
    client = Client.buildClient({
      domain: GLOBAL_SETTINGS.domainUK,
      storefrontAccessToken: GLOBAL_SETTINGS.storefrontTokenUK,
    });
  } else if (
    userLocationData &&
    (userLocationData.currency.code === 'EUR' || userLocationData.continent_code === 'EU')
  ) {
    priceCurrency = '€';

    client = Client.buildClient({
      domain: GLOBAL_SETTINGS.domainEU,
      storefrontAccessToken: GLOBAL_SETTINGS.storefrontTokenEU,
    });
  } else {
    priceCurrency = '$';

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
  const checkLocationCookie = Cookies.get('userLocationData');

  if (checkLocationCookie) {
    const parsedData = JSON.parse(checkLocationCookie);

    priceCurrency = parsedData.currency.symbol;

    generateProduct(parsedData);
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

  globalDiscount = discountPercentage;

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
    const discountLabelShowInventory =
      GLOBAL_SETTINGS[`batch_${index + 1}`]
        ? GLOBAL_SETTINGS[`batch_${index + 1}`].callout_preorder.discount_label_show_inventory
        : false;
    const batchLabel = GLOBAL_SETTINGS[`batch_${index + 1}`].callout_preorder.subtitle;
    const title = GLOBAL_SETTINGS[`batch_${index + 1}`].callout_preorder.title;
    const { price, compareAtPrice, quantityAvailable } = variant;
    const maxQuantity = GLOBAL_SETTINGS.variantsStartingQuantities[index];
    const discountPercentage = Math.round(((compareAtPrice - price) / compareAtPrice) * 100) + '%';
    let stockInfoHtml = discountLabelShowInventory
      ? `${quantityAvailable} available - ${discountPercentage} off`
      : `${discountPercentage} off`;
    let variantDescription = GLOBAL_SETTINGS[`batch_${index + 1}`].callout_preorder.body_text.replace('[percentage]', globalDiscount);
    const cartFoot = isAvailable
      ? `<div class="card__foot">
          <a href="${checkoutLink}" class="btn btn--yellow btn--large">Buy now</a>
        </div>`
      : '';

    const countdownHTML = `
      <div class="card__countdown">
        <ul class="countdown countdown--background-red">
          <li>
            <span class="countdown__days countdown__digit"></span>

            <span class="countdown__text">days</span>
          </li>

          <li>
            <span class="countdown__hours countdown__digit"></span>

            <span class="countdown__text">hours</span>
          </li>

          <li>
            <span class="countdown__minutes countdown__digit"></span>

            <span class="countdown__text">mins</span>
          </li>

          <li>
            <span class="countdown__seconds countdown__digit"></span>

            <span class="countdown__text">secs</span>
          </li>
        </ul>
      </div>
    `;

    const soldOutHTML = `
      <div class="price-stamp">
        Sold out
      </div>
    `;

    variantsHTML += `
      <div class="card-offer ${isAvailable ? '' : 'disabled'}">
        <div class="card__head">
          <h4>${batchLabel}</h4>
        </div>

        <div class="card__body">
          <div class="card__content">
            <h2>${title}</h2>

            <p class="${index < activeVariantIndex ? 'hidden' : ''}">${variantDescription}</p>
          </div>

          <div class="card__price">
            <span class="price-old hidden">${priceCurrency + parseFloat(compareAtPrice)}</span>

            <h2 class="price ${index < activeVariantIndex ? 'hidden' : ''}">${priceCurrency + parseFloat(price)}</h2>


            ${
              index < activeVariantIndex
                ? soldOutHTML
                : isAvailable
                  ? ''
                  : '<div class="price-stamp">' + stockInfoHtml + '</div>'
            }
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

const initCountdownTimers = variantIndex => {
  const finalDate = GLOBAL_SETTINGS[`batch_${variantIndex}`].final_date;

  initCountdown(finalDate);
}

const updateHomepageHeroTexts = variantIndex => {
  let { title, subtitle_text, notice } = GLOBAL_SETTINGS[`batch_${variantIndex}`].homepage.hero;

  // title = title.replace('[percentage]', globalDiscount);
  // notice = notice.replace('[percentage]', globalDiscount);

  if (document.querySelector(selectors.homepage.title)) {
    document.querySelector(selectors.homepage.title).textContent = title;
  }

  if (document.querySelector(selectors.homepage.subtitle_text)) {
    document.querySelector(selectors.homepage.subtitle_text).textContent = subtitle_text;
  }

  if (document.querySelector(selectors.homepage.notice)) {
    document.querySelector(selectors.homepage.notice).textContent = notice;
  }
}

const updateCallout = variantIndex => {
  let { title, subtitle, body_text: bodyText } = GLOBAL_SETTINGS[`batch_${variantIndex}`].callout;

  // title = title.replace('[percentage]', globalDiscount);
  // subtitle = subtitle.replace('[percentage]', globalDiscount);
  // bodyText = bodyText.replace('[percentage]', globalDiscount);

  if (document.querySelectorAll(selectors.callout.title)) {
    document.querySelectorAll(selectors.callout.title).forEach(el => {
      el.textContent = title;
    })
  }

  if (document.querySelectorAll(selectors.callout.subtitle)) {
    document.querySelectorAll(selectors.callout.subtitle).forEach(el => {
      el.textContent = subtitle;
    })
  }

  if (document.querySelectorAll(selectors.callout.body_text)) {
    document.querySelectorAll(selectors.callout.body_text).forEach(el => {
      el.textContent = bodyText;
    })
  }
}

const updatePreorderTexts = variantIndex => {
  const { title } = GLOBAL_SETTINGS[`batch_${variantIndex}`].preorder;

  if (document.querySelector(selectors.preorder.title)) {
    document.querySelector(selectors.preorder.title).textContent = title;
  }
}

const updateFrontEndData = (activeVariant, activeVariantIndex, allVariants) => {
  globalActiveVariantHTML(activeVariant, activeVariantIndex, allVariants);
  productVariantsHTML(allVariants, activeVariantIndex);
  updateHomepageHeroTexts(activeVariantIndex + 1);
  updateCallout(activeVariantIndex + 1);
  updatePreorderTexts(activeVariantIndex + 1);
  initCountdownTimers(activeVariantIndex + 1);

  if (loadingOverlay) {
    loadingOverlay.classList.add('loaded');
  }
};

checkIfUserVisited();
