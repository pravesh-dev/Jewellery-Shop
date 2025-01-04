import card1 from '../../Assets/LandingPage/Shopby/card1.jpg'
import card2 from '../../Assets/LandingPage/Shopby/card2.jpg'
import card3 from '../../Assets/LandingPage/Shopby/card3.jpg'
import card4 from '../../Assets/LandingPage/Shopby/card4.jpg'
import card5 from '../../Assets/LandingPage/Shopby/card5.jpg'
import card6 from '../../Assets/LandingPage/Shopby/card6.jpg'

const projects = [
  {
    name: "Gold & Blue Ruby Necklace",
    price: 9000,
    onSale: true,
    discount: 10,
    image: card1,
    type: 'frontend'
  },
  {
    name: "Gold & Diamond Chain",
    price: 20000,
    onSale: false,
    discount: 0,
    image: card2,
    type: 'frontend'
  },
  {
    name: "Gold & Diamond Ring",
    price: 5000,
    onSale: true,
    discount: 10,
    image: card3,
    type: 'frontend'
  },
  {
    name: "White Ruby Gold Earring",
    price: 1000,
    onSale: false,
    discount: 0,
    para: `Criativo's landing page UI was based on a design found on Pinterest. I implemented it successfully.`,
    link: 'https://criativo-112.web.app/',
    image: card4,
    skills: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    type: 'frontend'
  },
  {
    name: "Gold Ring With Custom Name",
    price: 2000,
    onSale: false,
    discount: 0,
    para: `Rejouice's landing page UI was cloned, replicating its original design and functionality.`,
    link: 'https://rejouice-25.web.app/',
    image: card5,
    skills: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    type: 'frontend'
  },
  {
    name: "Lord Ganesh Gold Statue",
    price: 5000,
    onSale: false,
    discount: 0,
    para: `Fanta's landing page UI clone was developed to showcase its popular design and smooth animations.`,
    link: 'https://fanta-2024.web.app/',
    image: card6,
    skills: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    type: 'frontend'
  },
];

export { projects };
