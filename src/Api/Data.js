export class Data {
  static getService() {
    return [
      {
        id: 1,
        image: "/assets/service/service1.png",
        name: "Fast & Secure Delivery",
      },
      {
        id: 2,
        image: "/assets/service/service2.png",
        name: "100% Guarantee On Product",
      },
      {
        id: 3,
        image: "/assets/service/service3.png",
        name: "24 Hour Return Policy",
      },
      {
        id: 5,
        image: "/assets/service/service5.png",
        name: "Next Level Pro Quality",
      },
    ];
  }
  static getSort() {
    return [
      {
        id: 1,
        title: "all",
      },
      // {
      //     id: 2,
      //     title: 'newest'
      // },
      // {
      //     id: 3,
      //     title: 'the most popular'
      // },
      {
        id: 4,
        title: "brand",
        brands: [
          { id: 1, brand: "all brands" },
          { id: 2, brand: "samsung" },
          { id: 3, brand: "apple" },
          { id: 4, brand: "dokom" },
          { id: 5, brand: "corsair" },
          // {id :4,brand: 'samsung'},
        ],
      },
      {
        id: 5,
        title: "category",
        categories: [
          { id: 1, category: "all categories" },
          { id: 2, category: "phone" },
          { id: 3, category: "headset" },
          // { id: 4, category: 'laptop' },
          { id: 5, category: "mouse" },
        ],
      },
    ];
  }
  static getProducts() {
    return [
      {
        id: 1,
        image: "/assets/products/mouse.webp",
        title: "Corsair Ironclaw RGB 18000 DPI Optical Gaming Mouse",
        rate: 4,
        description: [
          {
            size: "130x80x45 mm",
            weight: "130 g",
            click_numbers: "10",
            bluetooth: "yes",
            connection_type: "wirless",
          },
        ],
        category: "mouse",
        brand: "corsair",
        discount: true,
        new_price: 40,
        old_price: 57,
      },
      {
        id: 2,
        image: "/assets/products/headset-dokom.jpg",
        title: "Dokom GH05 Gaming Headset",
        rate: 3,
        description: [
          {
            frequency_response: "20-20000 hz",
            ability: "LED",
            body_material: "leather",
            connection_type: "wired",
            suitable: "Gaming",
          },
        ],
        category: "headset",
        brand: "dokom",
        discount: true,
        new_price: 32,
        old_price: 41,
      },
      {
        id: 3,
        image: "/assets/products/iphone13pro-blue.jpg",
        title: "iPhone 13 Pro Max A2644",
        rate: 4.6,
        description: [
          {
            size: "160.8x78.1x7.7 mm",
            weight: "240 g",
            screen_tech: "Super Retina XDR OLED",
            resolution: "278x1284 px",
            ability:
              "Scratch-resistant glass oleophobic coating Dolby Vision Wide color gamut True-tone Siri natural language commands and dictation",
            chipset: "Apple A15 Bionic (5 nm) Chipset",
            central_processor: "Hexa-core CPU",
            photo_resolution: "12px",
          },
        ],
        category: "phone",
        brand: "apple",
        discount: false,
        new_price: 7940,
      },
      {
        id: 4,
        image: "/assets/products/iphone-se.jpg",
        title: "iPhone SE 2022 JA",
        rate: 4.7,
        description: [
          {
            size: "139x67.3x7.3 mm",
            weight: "144 g",
            screen_tech: "Retina IPS LCD",
            resolution: "1334x750 px",
            ability: " oleophobic coating Wide color gamut True-tone",
            chipset: "Apple A15 Bionic Chipset",
            central_processor: "Hexa-core",
            photo_resolution: "12 mpx",
          },
        ],
        category: "phone",
        brand: "apple",
        discount: false,
        new_price: 7940,
      },
      {
        id: 5,
        image: "/assets/products/iPhone-11-CH.jpg",
        title: "iPhone 11 CH",
        rate: 4.3,
        description: [
          {
            size: "8.3x75.7x150.9 mm",
            weight: "194 g",
            screen_tech: "Liquid Retina",
            resolution: "1792x828 px",
            ability: " oleophobic coating Wide color gamut True-tone",
            chipset: "Apple A13 Bionic (7 nm+) Chipset",
            central_processor: "Dual-core Lightning + Quad-core Thunder CPU",
            photo_resolution: "12 mpx",
          },
        ],
        category: "phone",
        brand: "apple",
        discount: true,
        new_price: 7940,
        old_price: 8750,
      },
      {
        id: 6,
        image: "/assets/products/iphone-xs-max.jpg",
        title: "iPhone XS Max",
        rate: 3.6,
        description: [
          {
            size: "157.5x77.4x7.7 mm",
            weight: "208 g",
            screen_tech: "Super Retina",
            resolution: "1792x828 px",
            ability: " oleophobic coating Wide color gamut True-tone",
            chipset: "Apple A13 Bionic (7 nm+) Chipset",
            central_processor: "Dual-core Lightning + Quad-core Thunder CPU",
            photo_resolution: "12 mpx",
          },
        ],
        category: "phone",
        brand: "apple",
        discount: true,
        new_price: 4200,
        old_price: 8940,
      },
      {
        id: 7,
        image: "/assets/products/galaxy-z-fold4.webp",
        title: "Galaxy Z Fold4 ",
        rate: 4.7,
        description: [
          {
            size: "155.1x130.1x6.3 mm",
            weight: "263 g",
            screen_tech: "Foldable Dynamic AMOLED ۲X",
            resolution: "2176x1812 px",
            chipset: "Qualcomm Snapdragon 8+ Gen 1",
            photo_resolution: "50 mpx",
          },
        ],
        category: "phone",
        brand: "samsung",
        discount: true,
        new_price: 10500,
        old_price: 11440,
      },

      {
        id: 8,
        image: "/assets/products/headset-dokom.jpg",
        title: "Dokom GH05 Gaming Headset",
        rate: 3,
        description: [
          {
            frequency_response: "20-20000 hz",
            ability: "LED",
            body_material: "leather",
            connection_type: "wired",
            suitable: "Gaming",
          },
        ],
        category: "headset",
        brand: "dokom",
        discount: true,
        new_price: 32,
        old_price: 41,
      },
      {
        id: 9,
        image: "/assets/products/iphone-xs-max.jpg",
        title: "iPhone XS Max",
        rate: 3.6,
        description: [
          {
            size: "157.5x77.4x7.7 mm",
            weight: "208 g",
            screen_tech: "Super Retina",
            resolution: "1792x828 px",
            ability: " oleophobic coating Wide color gamut True-tone",
            chipset: "Apple A13 Bionic (7 nm+) Chipset",
            central_processor: "Dual-core Lightning + Quad-core Thunder CPU",
            photo_resolution: "12 mpx",
          },
        ],
        category: "phone",
        brand: "apple",
        discount: true,
        new_price: 4200,
        old_price: 8940,
      },
    ];
  }
  static getHomeSliders() {
    return [
      // { id: 1, image: "/assets/banner/GalaxyZFold4.webp" },
      // { id: 2, image: "/assets/banner/s23u.png" },
      { id: 3, image: "/assets/banner/iphone15.jpg" },
      { id: 4, image: "/assets/banner/s23u1.png" },
      // { id: 4, image: "/assets/banner/samsungs23Ultra.jpg" },
    ];
  }
}
