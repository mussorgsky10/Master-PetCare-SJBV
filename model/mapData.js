const Images = [
    { image: require("../assets/banners/foto_1.jpeg") },
    { image: require("../assets/banners/foto_2.jpg") },
    { image: require("../assets/banners/foto_3.jpg") },
    { image: require("../assets/banners/foto_4.jpg") },
    { image: require("../assets/banners/foto_5.jpg") },
];

export const markers = [
    {
      coordinate: {
        latitude: -21.9563109,
        longitude: -46.7994915,
      },
      title: "Comedouro 1",
      description: "Bairro Maestro Mourão",
      image: Images[0].image,
    },
    {
      coordinate: {
        latitude: -22.0053509,
        longitude: -46.7849034,
      },
      title: "Comedouro 2",
      description: "Jardim Lucas Teixeira",
      image: Images[2].image,
    },
    {
      coordinate: {
        latitude: -22.0001363,
        longitude: -46.8139189,
      },
      title: "Comedouro 3",
      description: "Distrito Industrial",
      image: Images[3].image,
    },
    {
      coordinate: {
        latitude: -21.9931706,
        longitude: -46.7751072,
      },
      title: "Comedouro 4",
      description: "Jardim São Salvador",
      image: Images[4].image,
    },
    {
      coordinate: {
        latitude: -21.9666145,
        longitude: -46.748441,
      },
      title: "Comedouro 5",
      description: "Jardim dos Eucaliptos",
      image: Images[1].image,
    },
];

export const mapStandardStyle = [
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
  ];

