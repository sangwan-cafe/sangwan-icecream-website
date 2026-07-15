// ===============================
// PRODUCT IMAGES
// ===============================

import scoopImg from "../../assets/products/scoop.jpg";
import shakeImg from "../../assets/products/shake.jpg";
import coffeeImg from "../../assets/products/coffee.jpg";

import coneImg from "../../assets/products/cone.jpg";
import cupImg from "../../assets/products/cup.jpg";
import tubImg from "../../assets/products/tub.jpg";
import barImg from "../../assets/products/bar.jpg";
import kulfiImg from "../../assets/products/kulfi.jpg";
import sundaeImg from "../../assets/products/sundae.jpg";

// ===============================
// PRODUCTS
// ===============================

const products = [
    // ===============================
  // SCOOPS
  // ===============================

  {
    id: 1,
    name: "Vanilla Scoop",
    category: "Scoops",
    price: 40,
    image: scoopImg,
    rating: 4.8,
    badge: "Best Seller",
    description: "Classic creamy vanilla ice cream."
  },

  {
    id: 2,
    name: "Strawberry Scoop",
    category: "Scoops",
    price: 40,
    image: scoopImg,
    rating: 4.7,
    badge: "Popular",
    description: "Fresh strawberry flavoured scoop."
  },

  {
    id: 3,
    name: "Chocolate Scoop",
    category: "Scoops",
    price: 50,
    image: scoopImg,
    rating: 4.9,
    badge: "Best Seller",
    description: "Rich premium chocolate scoop."
  },

  {
    id: 4,
    name: "Butterscotch Scoop",
    category: "Scoops",
    price: 50,
    image: scoopImg,
    rating: 4.8,
    badge: "Popular",
    description: "Crunchy butterscotch flavour."
  },

  // ===============================
  // SUNDAES
  // ===============================

  {
    id: 5,
    name: "Brownie Blast",
    category: "Sundaes",
    price: 120,
    image: sundaeImg,
    rating: 5,
    badge: "Premium",
    description: "Brownie loaded chocolate sundae."
  },

  {
    id: 6,
    name: "Butterscotch Sundae",
    category: "Sundaes",
    price: 110,
    image: sundaeImg,
    rating: 4.9,
    badge: "Popular",
    description: "Creamy butterscotch delight."
  },

  {
    id: 7,
    name: "Berry Delight",
    category: "Sundaes",
    price: 110,
    image: sundaeImg,
    rating: 4.8,
    badge: "New",
    description: "Mixed berry premium sundae."
  },

  {
    id: 8,
    name: "Choco Loco",
    category: "Sundaes",
    price: 100,
    image: sundaeImg,
    rating: 4.8,
    badge: "Best Seller",
    description: "Loaded with chocolate sauce."
  },
    // ===============================
  // SHAKES
  // ===============================

  {
    id: 9,
    name: "Vanilla Shake",
    category: "Shakes",
    price: 80,
    image: shakeImg,
    rating: 4.8,
    badge: "Best Seller",
    description: "Creamy vanilla milkshake."
  },

  {
    id: 10,
    name: "Butterscotch Shake",
    category: "Shakes",
    price: 80,
    image: shakeImg,
    rating: 4.8,
    badge: "Popular",
    description: "Rich butterscotch flavour."
  },

  {
    id: 11,
    name: "Strawberry Shake",
    category: "Shakes",
    price: 80,
    image: shakeImg,
    rating: 4.7,
    badge: "Popular",
    description: "Fresh strawberry milkshake."
  },

  {
    id: 12,
    name: "Chocolate Shake",
    category: "Shakes",
    price: 90,
    image: shakeImg,
    rating: 4.9,
    badge: "Best Seller",
    description: "Premium chocolate shake."
  },

  {
    id: 13,
    name: "Oreo Shake",
    category: "Shakes",
    price: 90,
    image: shakeImg,
    rating: 5,
    badge: "Hot",
    description: "Loaded with Oreo cookies."
  },

  {
    id: 14,
    name: "Hazelnut Shake",
    category: "Shakes",
    price: 100,
    image: shakeImg,
    rating: 5,
    badge: "Premium",
    description: "Premium hazelnut shake."
  },

  // ===============================
  // COFFEE
  // ===============================

  {
    id: 15,
    name: "Cold Coffee",
    category: "Coffee",
    price: 70,
    image: coffeeImg,
    rating: 4.8,
    badge: "Popular",
    description: "Refreshing chilled coffee."
  },

  {
    id: 16,
    name: "Cafe Frappe",
    category: "Coffee",
    price: 90,
    image: coffeeImg,
    rating: 4.9,
    badge: "Premium",
    description: "Cafe style frappe."
  },

  {
    id: 17,
    name: "Caramel Coffee",
    category: "Coffee",
    price: 110,
    image: coffeeImg,
    rating: 5,
    badge: "New",
    description: "Creamy caramel coffee."
  },

  {
    id: 18,
    name: "Hazelnut Coffee",
    category: "Coffee",
    price: 110,
    image: coffeeImg,
    rating: 5,
    badge: "Premium",
    description: "Rich hazelnut coffee."
  },
    // ===============================
  // CONES
  // ===============================

  {
    id: 19,
    name: "Mini Cone",
    category: "Cones",
    price: 20,
    image: coneImg,
    rating: 4.7,
    badge: "Popular",
    description: "Mini creamy cone."
  },

  {
    id: 20,
    name: "Medium Cone",
    category: "Cones",
    price: 30,
    image: coneImg,
    rating: 4.8,
    badge: "Best Seller",
    description: "Classic medium cone."
  },

  {
    id: 21,
    name: "Vanilla Cone",
    category: "Cones",
    price: 30,
    image: coneImg,
    rating: 4.8,
    badge: "Popular",
    description: "Creamy vanilla cone."
  },

  {
    id: 22,
    name: "Butterscotch Cone",
    category: "Cones",
    price: 40,
    image: coneImg,
    rating: 4.9,
    badge: "Best Seller",
    description: "Crunchy butterscotch cone."
  },

  {
    id: 23,
    name: "Chocolate Cone",
    category: "Cones",
    price: 45,
    image: coneImg,
    rating: 5,
    badge: "Premium",
    description: "Rich chocolate cone."
  },

  {
    id: 24,
    name: "Rajbhog Cone",
    category: "Cones",
    price: 50,
    image: coneImg,
    rating: 4.9,
    badge: "Premium",
    description: "Traditional Rajbhog flavour."
  },

  {
    id: 25,
    name: "Belgian Cone",
    category: "Cones",
    price: 60,
    image: coneImg,
    rating: 5,
    badge: "Premium",
    description: "Belgian chocolate cone."
  },

  // ===============================
  // CUPS
  // ===============================

 {
    id: 26,
    name: "Classic Cup",
    category: "Cups",
    price: 20,
    image: cupImg,
    rating: 4.7,
    badge: "Popular",
    description: "Classic ice cream cup."
  },

  {
    id: 27,
    name: "Vanilla Max Cup",
    category: "Cups",
    price: 20,
    image: cupImg,
    rating: 4.8,
    badge: "Best Seller",
    description: "Vanilla Max special."
  },

  {
    id: 28,
    name: "Traffic Jam Cup",
    category: "Cups",
    price: 25,
    image: cupImg,
    rating: 4.8,
    badge: "Popular",
    description: "Colourful fruit mix."
  },

  {
    id: 29,
    name: "Chikku Cup",
    category: "Cups",
    price: 30,
    image: cupImg,
    rating: 4.9,
    badge: "New",
    description: "Fresh chikku flavour."
  },

  {
    id: 30,
    name: "Exotic Cup",
    category: "Cups",
    price: 50,
    image: cupImg,
    rating: 5,
    badge: "Premium",
    description: "Premium exotic delight."
  },

  {
    id: 31,
    name: "Rajbhog Cup",
    category: "Cups",
    price: 60,
    image: cupImg,
    rating: 5,
    badge: "Premium",
    description: "Royal Rajbhog flavour."
  },

  // ===============================
  // BARS / TWISTO
  // ===============================

  {
    id: 32,
    name: "Mini Bar",
    category: "Bars",
    price: 10,
    image: barImg,
    rating: 4.6,
    badge: "Budget",
    description: "Mini ice cream bar."
  },

  {
    id: 33,
    name: "Max Bar",
    category: "Bars",
    price: 20,
    image: barImg,
    rating: 4.8,
    badge: "Popular",
    description: "Classic Max bar."
  },

  {
    id: 34,
    name: "Crunchy Bar",
    category: "Bars",
    price: 25,
    image: barImg,
    rating: 4.9,
    badge: "Best Seller",
    description: "Crunchy chocolate coating."
  },

  {
    id: 35,
    name: "Twisto",
    category: "Bars",
    price: 30,
    image: barImg,
    rating: 4.9,
    badge: "Hot",
    description: "Kids' favourite Twisto."
  },

  // ===============================
  // TUBS
  // ===============================

  {
    id: 36,
    name: "Vanilla Tub",
    category: "Tubs",
    price: 240,
    image: tubImg,
    rating: 4.9,
    badge: "Family Pack",
    description: "1000ml Vanilla Tub."
  },

  {
    id: 37,
    name: "Chocolate Tub",
    category: "Tubs",
    price: 300,
    image: tubImg,
    rating: 5,
    badge: "Premium",
    description: "1000ml Chocolate Tub."
  },
    // ===============================
  // KULFI
  // ===============================

  {
    id: 38,
    name: "Kulfi",
    category: "Kulfi",
    price: 40,
    image: kulfiImg,
    rating: 4.8,
    badge: "Popular",
    description: "Traditional creamy kulfi."
  },

  {
    id: 39,
    name: "Matka Kulfi",
    category: "Kulfi",
    price: 50,
    image: kulfiImg,
    rating: 5,
    badge: "Best Seller",
    description: "Authentic matka kulfi."
  },

  // ===============================
  // CANDY
  // ===============================

  {
    id: 40,
    name: "Pineapple Candy",
    category: "Candy",
    price: 5,
    image: kulfiImg,
    rating: 4.6,
    badge: "Budget",
    description: "Refreshing pineapple candy."
  },

  {
    id: 41,
    name: "Orange Candy",
    category: "Candy",
    price: 10,
    image: kulfiImg,
    rating: 4.7,
    badge: "Popular",
    description: "Orange flavoured candy."
  },

  {
    id: 42,
    name: "Mango Candy",
    category: "Candy",
    price: 10,
    image: kulfiImg,
    rating: 4.8,
    badge: "Popular",
    description: "Juicy mango candy."
  },

  // ===============================
  // FUSION
  // ===============================

  {
    id: 43,
    name: "Fusion Special",
    category: "Fusion",
    price: 120,
    image: sundaeImg,
    rating: 5,
    badge: "Premium",
    description: "Chef's special fusion dessert."
  },

  {
    id: 44,
    name: "Fusion Sundae",
    category: "Fusion",
    price: 150,
    image: sundaeImg,
    rating: 5,
    badge: "Hot",
    description: "Loaded premium fusion sundae."
  },

  // ===============================
  // NOVELTIES
  // ===============================

  {
    id: 45,
    name: "Premium Stick",
    category: "Novelties",
    price: 60,
    image: barImg,
    rating: 4.9,
    badge: "Premium",
    description: "Premium chocolate stick."
  },

  {
    id: 46,
    name: "Ice Cream Bar",
    category: "Novelties",
    price: 70,
    image: barImg,
    rating: 5,
    badge: "Best Seller",
    description: "Delicious premium bar."
  },

  // ===============================
  // NEW ARRIVAL
  // ===============================

  {
    id: 47,
    name: "Seasonal Special",
    category: "New Arrival",
    price: 120,
    image: sundaeImg,
    rating: 5,
    badge: "New",
    description: "Limited seasonal flavour."
  },

  {
    id: 48,
    name: "Cafe Signature",
    category: "New Arrival",
    price: 150,
    image: sundaeImg,
    rating: 5,
    badge: "Chef Choice",
    description: "Sangwan Cafe signature dessert."
  }

];

export default products;