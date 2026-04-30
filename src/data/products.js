const products = [
  {
    id: 1,
    name: "Adjustable Dumbells 25kg x 1",
    price: 39.99,
    image:
      "https://m.media-amazon.com/images/I/51pTPkRMgpL._AC_UF894,1000_QL80_.jpg",
    description:
      "Premium adjustable Dumbells, chose your own kg's and adjust it to suit your own workout preference.",
  },
  {
    id: 2,
    name: "Barbell and Weight Plates 20kg x 4",
    price: 149.99,
    image:
      "https://wolverson-fitness.co.uk/cdn/shop/files/bundle-builder-20-min.jpg?v=1748858342",
    description:
      "Barbell bar made out of premium materials, included with the barbell are 4 20kg plates.",
  },
  {
    id: 3,
    name: "Workout Bench",
    price: 49.99,
    image:
      "https://physical.sirv.com/production/catalog/product/p/e/performance_flat-incline-decline_bench_-commercial_gym_equipment.jpg?q=80",
    description:
      "Ergonomic, Adjustable and comfortable workout bench, perfect for bench pressing, dumbell overhead presses, etc.",
  },
  {
    id: 4,
    name: "Pec Deck Machine",
    price: 799.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHbmlBkAZj6m4hA1kbrbkjT7IcMTV9u5fGw&s",
    description:
      "Selectorised Pec Deck machine, get the most out of your chest and back muscles with this only machine.",
  },
  {
    id: 5,
    name: "Hack Squat",
    price: 399.99,
    image:
      "https://staffsfitness.co.uk/wp-content/uploads/2024/03/Hammer-Strength-Plate-Loaded-Hack-Squat.webp",
    description:
      "Get your leg muscles to a next level with this adjustable Hack Squat Machine.",
  },
  {
    id: 6,
    name: "TreadMill",
    price: 499.99,
    image:
      "https://cdn.fitshop.co.uk/pictures/lifefitness/treadmills/CVTM4066/Life_Fitness_Club_Series_Plus_Treadmill_With_SL_LED_Console_Angled_View_1600_1600_1600.jpg",
    description:
      "TreadMill with multiple intensity levels, speeds, workouts. It also tracks calories lost, time taken and distance run",
  },
  {
    id: 7,
    name: "Pull Up/Dip Station",
    price: 79.99,
    image:
      "https://imagely.mirafit.co.uk/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/M/i/Mirafit-VKR-Dip-Pull-Up-Station_1.jpg",
    description:
      "A great station for those who want to improve their Calisthenics, Frees up space with a all-in-one machine.",
  },
  {
    id: 8,
    name: "Row Air Rowing Machine",
    price: 179.99,
    image:
      "https://m.media-amazon.com/images/I/51hWEGkT0xL.jpg",
    description:
      "Back muscles row machine, perfect to strenghten your traps, lats and lower back muscles.",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}