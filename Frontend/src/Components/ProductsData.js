import card1 from '../Assets/LandingPage/Shopby/card1.jpg';
import card2 from '../Assets/LandingPage/Shopby/card2.jpg';
import card3 from '../Assets/LandingPage/Shopby/card3.jpg';
import card4 from '../Assets/LandingPage/Shopby/card4.jpg';
import card5 from '../Assets/LandingPage/Shopby/card5.jpg';
import card6 from '../Assets/LandingPage/Shopby/card6.jpg';

const items = [
  {
    id: 1,
    name: "Gold & Blue Ruby Necklace",
    price: 9000,
    onSale: true,
    discount: 10,
    image: card1,
    category: 'Women',
    subCategory: "Necklace",
    title: "Luxury Necklace",
    description: "A stunning gold necklace adorned with blue rubies, perfect for elegant occasions or as a gift.",
    extraImages: [card1, card1, card1, card1, card1, card1, card1],
    reviews: {
      averageRating: 4.8,
      totalReviews: 15,
      detailedRatings: { 5: 12, 4: 3, 3: 0, 2: 0, 1: 0 },
      comments: [
        {
          id: 1,
          user: "Anjali",
          date: "3 days ago",
          rating: 5,
          comment: "Beautiful necklace! The rubies shine so bright.",
          likes: 34,
          dislikes: 1,
          replies: [],
        },
        {
          id: 2,
          user: "Rohit",
          date: "5 days ago",
          rating: 4,
          comment: "Good quality but slightly overpriced.",
          likes: 20,
          dislikes: 2,
          replies: [],
        },
      ],
    },
  },
  {
    id: 2,
    name: "Gold & Diamond Chain",
    price: 20000,
    onSale: false,
    discount: 0,
    image: card2,
    category: 'Women',
    subCategory: "Chain",
    title: "Exquisite Chain",
    description: "An exquisite gold chain with diamond accents, a timeless addition to your jewelry collection.",
    extraImages: [card2, card2, card2, card2, card2],
    reviews: {
      averageRating: 4.5,
      totalReviews: 10,
      detailedRatings: { 5: 7, 4: 2, 3: 1, 2: 0, 1: 0 },
      comments: [
        {
          id: 1,
          user: "Nisha",
          date: "2 days ago",
          rating: 5,
          comment: "Looks so elegant. Absolutely love it!",
          likes: 40,
          dislikes: 0,
          replies: [],
        },
        {
          id: 2,
          user: "Aman",
          date: "6 days ago",
          rating: 3,
          comment: "The chain is nice, but I expected a heavier piece.",
          likes: 15,
          dislikes: 3,
          replies: [],
        },
      ],
    },
  },
  {
    id: 3,
    name: "Gold & Diamond Ring",
    price: 10000,
    onSale: true,
    discount: 60,
    image: card3,
    category: 'Women',
    subCategory: "Ring",
    title: "Diamond Ring",
    description: "A charming gold ring with dazzling diamonds, perfect for engagements or special moments.",
    extraImages: [card3, card3, card3, card3, card3, card3],
    reviews: {
      averageRating: 4.9,
      totalReviews: 25,
      detailedRatings: { 5: 22, 4: 3, 3: 0, 2: 0, 1: 0 },
      comments: [
        {
          id: 1,
          user: "Sakshi",
          date: "Yesterday",
          rating: 5,
          comment: "Such a beautiful piece! Perfect for my proposal.",
          likes: 60,
          dislikes: 0,
          replies: [],
        },
      ],
    },
  },
  {
    id: 4,
    name: "White Ruby Gold Earring",
    price: 1000,
    onSale: false,
    discount: 0,
    image: card4,
    category: 'Women',
    subCategory: "Earring",
    title: "Elegant Earrings",
    description: "Delicate gold earrings with white rubies, ideal for adding grace to any outfit.",
    extraImages: [card4, card4, card4, card4],
    reviews: {
      averageRating: 4.7,
      totalReviews: 18,
      detailedRatings: { 5: 14, 4: 3, 3: 1, 2: 0, 1: 0 },
      comments: [
        {
          id: 1,
          user: "Riya",
          date: "5 days ago",
          rating: 5,
          comment: "Simple and elegant. Loved wearing these for my party.",
          likes: 25,
          dislikes: 0,
          replies: [],
        },
      ],
    },
  },
  {
    id: 5,
    name: "Gold Ring With Custom Name",
    price: 2000,
    onSale: false,
    discount: 0,
    image: card5,
    category: 'Women',
    subCategory: "Ring",
    title: "Personalized Ring",
    description: "A customizable gold ring, engrave your name or initials to make it truly yours.",
    extraImages: [card5, card5, card5, card5, card5, card5],
    reviews: {
      averageRating: 4.6,
      totalReviews: 12,
      detailedRatings: { 5: 8, 4: 3, 3: 1, 2: 0, 1: 0 },
      comments: [
        {
          id: 1,
          user: "Arjun",
          date: "1 week ago",
          rating: 5,
          comment: "The customization is amazing, loved the finish!",
          likes: 30,
          dislikes: 0,
          replies: [],
        },
      ],
    },
  },
  {
    id: 6,
    name: "Lord Ganesh Gold Statue",
    price: 50000,
    onSale: false,
    discount: 0,
    image: card6,
    category: 'Accessories',
    subCategory: "Statue",
    title: "Divine Statue",
    description: "Lorem ipsum dolor sit amet consectetur. Pellentesque semper ipsum porta laoreet sit ornare vulputate integer. Vitae vitae sed volutpat venenatis dignissim consectetur aenean eleifend odio. Tortor lectus facilisis sapien dui. Natoque lorem orci est risus vulputate. Vulputate gravida dolor a at fusce massa quis fames urna. Cum viverra rutrum aliquam arcu eu in. Tortor lacus nibh in tellus cursus semper. sum dolor sit amet consectetur. Pellentesque semper ipsum porta laoreet sit ornare vulputate integer. Lorem ipsum dolor sit amet consectetur. Pellentesque semper ipsum porta laoreet sit ornare vulputate integer. Vitae vitae sed volutpat venenatis dignissim consectetur aenean eleifend odio. Tortor lectus facilisis sapien dui. Natoque lorem orci est risus vulputate.",
    extraImages: [card6, card6, card6, card6, card6, card6, card6],
    reviews: {
      averageRating: 5.0,
      totalReviews: 20,
      detailedRatings: { 5: 20, 4: 0, 3: 0, 2: 0, 1: 0 },
      comments: [
        {
          id: 1,
          user: "Pravesh",
          date: "Yesterday",
          rating: 5,
          comment: "Pellentesque semper ipsum porta laoreet sit ornare vulputate integer. Lorem ipsum dolor sit amet consectetur. Pellentesque semper ipsum porta laoreet sit ornare vulputate integer.",
          likes: 50,
          dislikes: 0,
          replies: [],
        },
        {
          id: 1,
          user: "Pravesh",
          date: "Yesterday",
          rating: 5,
          comment: "Pellentesque semper ipsum porta laoreet sit ornare vulputate integer. Lorem ipsum dolor sit amet consectetur.",
          likes: 50,
          dislikes: 0,
          replies: [],
        },
        {
          id: 2,
          user: "Sanjay",
          date: "2 days ago",
          rating: 4,
          comment: "Is this real gold?",
          likes: 50,
          dislikes: 0,
          replies: [
            {
              id: 1,
              user: "Pravesh",
              rating: 5,
              date: "2 days ago",
              comment: "Nahi nahi hai.",
              likes: 50,
              dislikes: 0,
            },
            {
              id: 1,
              user: "Pravesh",
              rating: 5,
              date: "2 days ago",
              comment: "Nahi nahi hai.",
              likes: 50,
              dislikes: 0,
            },
          ],
        },
      ],
    },
  },
];

export { items };
