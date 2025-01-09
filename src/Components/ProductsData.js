import card1 from '../Assets/LandingPage/Shopby/card1.jpg'
import card2 from '../Assets/LandingPage/Shopby/card2.jpg'
import card3 from '../Assets/LandingPage/Shopby/card3.jpg'
import card4 from '../Assets/LandingPage/Shopby/card4.jpg'
import card5 from '../Assets/LandingPage/Shopby/card5.jpg'
import card6 from '../Assets/LandingPage/Shopby/card6.jpg'

const items = [
  {
    id: 1,
    name: "Gold & Blue Ruby Necklace",
    price: 9000,
    onSale: true,
    discount: 10,
    image: card1,
    type: 'necklace',
    title: "Luxury Necklace",
    extraImages: [card1, card1, card1, card1, card1, card1, card1] // Random array size between 3-7
  },
  {
    id: 2,
    name: "Gold & Diamond Chain",
    price: 20000,
    onSale: false,
    discount: 0,
    image: card2,
    type: 'chain',
    title: "Exquisite Chain",
    extraImages: [card2, card2, card2, card2, card2] // Random array size between 3-7
  },
  {
    id: 3,
    name: "Gold & Diamond Ring",
    price: 5000,
    onSale: true,
    discount: 10,
    image: card3,
    type: 'ring',
    title: "Diamond Ring",
    extraImages: [card3, card3, card3, card3, card3, card3] // Random array size between 3-7
  },
  {
    id: 4,
    name: "White Ruby Gold Earring",
    price: 1000,
    onSale: false,
    discount: 0,
    image: card4,
    type: 'earrings',
    title: "Elegant Earrings",
    extraImages: [card4, card4, card4, card4] // Random array size between 3-7
  },
  {
    id: 5,
    name: "Gold Ring With Custom Name",
    price: 2000,
    onSale: false,
    discount: 0,
    image: card5,
    type: 'ring',
    title: "Personalized Ring",
    extraImages: [card5, card5, card5, card5, card5, card5] // Random array size between 3-7
  },
  {
    id: 6,
    name: "Lord Ganesh Gold Statue",
    price: 5000,
    onSale: false,
    discount: 0,
    image: card6,
    type: 'statue',
    title: "Divine Statue",
    extraImages: [card6, card6, card6, card6, card6] // Random array size between 3-7
  },
  {
    id: 7,
    name: "Lord Ganesh Gold Statue",
    price: 5000,
    onSale: false,
    discount: 0,
    image: card6,
    type: 'statue',
    title: "Divine Statue",
    extraImages: [card6, card6, card6, card6, card6, card6, card6] // Random array size between 3-7
  },
];

export { items };
