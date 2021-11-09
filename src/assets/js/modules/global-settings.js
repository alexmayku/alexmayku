export const GLOBAL_SETTINGS = {
  locationApiKey: '58d5cf873ac247e3bbbf543d009204c5',
  productHandle: 'multiplier-early-buy',
  domainUK: 'mayku-uk.myshopify.com',
  domainUS: 'mayku.myshopify.com',
  domainEU: 'mayku-eu.myshopify.com',
  storefrontTokenUK: '215d200423ee52f2e022314568f89555',
  storefrontTokenEU: 'a3902b7604d572c74dc98d0fded4ef00',
  storefrontTokenUS: '324be01462eb5c2e2c27f27eb2945640',
  variantsStartingQuantities: [100, 300, 400],
  variantsBatchLabels: ['First Batch - Open From 5th October 2021', 'Second Batch', 'Third Batch'],
  variantsDescriptions: [
    'Our first pre-order batch launches with a whopping [percentage] off the retail price. Be one of the first 100 makers to own a Multiplier.',
    'Once the first 100 machines are reserved, pre-orders move to [percentage] off for the next 300 units ordered.',
    'Join the queue with our final batch of pre-orders available for 400 units at [percentage] off retail price.',
  ],
  calloutTitles: ['First Batch Now Live!', 'Second Batch Now Live!', 'Third Batch Now Live!'],
  calloutDescriptions: [
    'Hurry, pre-orders are selling out fast. When they’re gone, they’re gone, and this level of discount will never be available again.',
    'Hurry, pre-orders are selling out fast. When they’re gone, they’re gone, and this level of discount will never be available again.',
    'Hurry, pre-orders are selling out fast. When they’re gone, they’re gone, and this level of discount will never be available again.',
  ],
  // Batch 1
  batch_1: {
    final_date: '2021/10/05 00:00:00 pm GMT',
    homepage: {
      hero: {
        title: 'Get 50% off the Mayku Multiplier',
        subtitle_text: 'Bringing pressure forming to the desktop for the first time. Get ready to create ultra precise, long lasting molds and production parts in minutes.',
        notice: '50% discount ends Tuesday November 16th, 8am PT / 11am ET / 4pm UK / 5pm CET'
      }
    },
    preorder: {
      title: '50% off early bird price ends November 16th'
    },
    callout: {
      subtitle: 'Second Batch Closing Soon!',
      title: '50% off Early bird pre-orders',
      body_text: 'Get one of the first 400 units at a massive 50% discount. Hurry, discount ends Tuesday November 16th, 8am PT / 11am ET / 4pm UK / 5pm CET'
    },
    callout_preorder: {
      subtitle: 'First Batch - Open From 5th October 2021',
      title: 'Super early bird pre-orders',
      body_text: '',
      discount_label_show_inventory: false
    }
  },
  // Batch 2
  batch_2: {
    final_date: '2021/11/16 4:00:00 pm GMT',
    homepage: {
      hero: {
        title: 'Get 50% off the Mayku Multiplier',
        subtitle_text: 'Bringing pressure forming to the desktop for the first time. Get ready to create ultra precise, long lasting molds and production parts in minutes.',
        notice: '50% discount ends Tuesday November 16th, 8am PT / 11am ET / 4pm UK / 5pm CET'
      }
    },
    preorder: {
      title: '50% off early bird price ends November 16th'
    },
    callout: {
      subtitle: 'Second Batch Closing Soon!',
      title: '50% off Early bird pre-orders',
      body_text: 'Get one of the first 400 units at a massive 50% discount. Hurry, discount ends Tuesday November 16th, 8am PT / 11am ET / 4pm UK / 5pm CET'
    },
    callout_preorder: {
      subtitle: 'Second Batch Closing November 16th!',
      title: '50% off Early bird pre-orders',
      body_text: 'Get one of the first 400 units at a massive 50% discount. Hurry, discount ends Tuesday November 16th, 8am PT / 11am ET / 4pm UK / 5pm CET',
      discount_label_show_inventory: false
    }
  },
  // Batch 3
  batch_3: {
    final_date: '2022/02/28 00:00:00 GMT',
    homepage: {
      hero: {
        title: 'Advance pre-orders',
        subtitle_text: 'Get one of only 400 remaining units from our first manufacturing run, available at 44% off retail price.',
        notice: 'Third Batch'
      }
    },
    preorder: {
      title: 'Advance pre-orders'
    },
    callout: {
      subtitle: 'Third Batch',
      title: 'Advance pre-orders',
      body_text: 'Get one of only 400 remaining units from our first manufacturing run, available at 44% off retail price.'
    },
    callout_preorder: {
      subtitle: 'Third Batch',
      title: 'Advance pre-orders',
      body_text: 'Get one of only 400 remaining units from our first manufacturing run, available at 44% off retail price.',
      discount_label_show_inventory: true
    }
  },
  // Batch 4
  batch_4: {
    final_date: '2022/06/01 00:00:00 GMT',
    homepage: {
      hero: {
        title: 'Standard pre-orders',
        subtitle_text: 'Join the queue with our final batch of pre-orders available for 30% off retail price.',
        notice: 'Fourth Batch'
      }
    },
    preorder: {
      title: 'Standard pre-orders'
    },
    callout: {
      subtitle: 'Fourth Batch',
      title: 'Standard pre-orders',
      body_text: 'Join the queue with our final batch of pre-orders available for 30% off retail price.'
    },
    callout_preorder: {
      subtitle: 'Fourth Batch',
      title: 'Standard pre-orders',
      body_text: 'Join the queue with our final batch of pre-orders available for 30% off retail price.',
      discount_label_show_inventory: false
    }
  }
};
