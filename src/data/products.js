// src/data/ProductData.js

export const products = [
  {
    id: "1",
    brand: "Bonita Boutique",
    name: "Blue Anarkali Kurti",
    originalPrice: 2000,
    salePrice: 1499,
    rating: 4.6,
    status: "Ready to Ship",
    statusColor: "red-500",
    outOfStock: false,
    deliveryDate: "Jul 30 - Aug 03",
    freeShipping: true,
    freeShippingThreshold: 699,
    discount: 33,
    stock: 9,
     colors: [
      { name: 'blue', value: '#60A5FA', selected: true },
      { name: 'black', value: '#1F2937', selected: false },
      { name: 'pink', value: '#F9A8D4', selected: false }
    ],
    image: ["catProduct01.png", "catProduct0102.png"],
    description:
      "Elegant Anarkali kurti made from soft cotton fabric with detailed embroidery. Perfect for traditional functions.",
    specifications: {
      "Top Shape": "Anarkali",
      "Top Type": "Kurta",
      Colour: "Blue",
      Dupatta: "Without Dupatta",
      "Top Pattern": "Embroidered",
      "Sleeve Length": "Three-Quarter Sleeves",
      Neck: "Round Neck",
      "Top Length": "Ankle Length",
      "Print or Pattern": "Ethnic Motif",
      Fabric: "Cotton",
      Waistband: "Elasticated",
      "Hemline": "Flared",
      "Weave Type": "Woven",
      Occasion: "Festive Wear",
    },
    seller: {
      name: "Bonita Creations",
      address: "Shop 12, Fashion Street, Jaipur, RJ",
      country: "India",
      email: "support@bonita.com",
      phone: "+91-9876543210",
    },
    ratingBreakdown: {
      5: 68,
      4: 21,
      3: 6,
      2: 3,
      1: 2,
    },
    reviews: [
      {
        id: "r1",
        name: "Megha S.",
        rating: 5,
        comment: "Loved the flow and fit! The fabric feels rich.",
        date: "July 10, 2024",
      },
      {
        id: "r2",
        name: "Priya D.",
        rating: 4,
        comment: "Color slightly darker but still very pretty.",
        date: "July 12, 2024",
      },
    ],
  },
  {
    id: "2",
    brand: "ABC Boutique",
    name: "Flower Printed Kurta",
    originalPrice: 2000,
    salePrice: 1799,
    rating: 4.6,
    status: "Customizable",
    statusColor: "green-500",
    outOfStock: false,
    deliveryDate: "Jul 30 - Aug 03",
    freeShipping: true,
    freeShippingThreshold: 699,
    image: ["catProduct02.png", "catProduct0202.png"],
    description:
      "This kurta features vibrant floral prints on premium cotton blend fabric, combining tradition with comfort.",
    specifications: {
      "Top Shape": "Straight",
      "Top Type": "Kurta",
      Colour: "Rust Orange",
      Dupatta: "With Dupatta",
      "Top Pattern": "Floral Print",
      "Sleeve Length": "Three-Quarter Sleeves",
      Neck: "V Neck",
      "Top Length": "Calf Length",
      "Print or Pattern": "Floral",
      Fabric: "Cotton Blend",
      Waistband: "Elasticated",
      "Dupatta Pattern": "Printed",
      "Hemline": "Flared",
      "Weave Type": "Woven",
      Occasion: "Traditional Wear",
    },
    seller: {
      name: "ABC Handloom",
      address: "Plot 41, Textile Zone, Indore, MP",
      country: "India",
      email: "contact@abchandloom.com",
      phone: "+91-9765432100",
    },
    ratingBreakdown: {
      5: 70,
      4: 20,
      3: 5,
      2: 3,
      1: 2,
    },
    reviews: [
      {
        id: "review-1",
        name: "Samantha D.",
        rating: 5,
        comment:
          "Beautiful colors and very comfortable. The print really pops and makes the outfit festive.",
        date: "August 16, 2023",
      },
      {
        id: "review-2",
        name: "Alex M.",
        rating: 5,
        comment:
          "Material is amazing, and fits perfectly! I wore this for a function and got many compliments.",
        date: "August 16, 2023",
      },
    ],
  },
  {
    id: "3",
    brand: "DEF Boutique",
    name: "Yellow Kurti",
    originalPrice: 1500,
    salePrice: 1399,
    rating: 4.3,
    status: "Ready to Ship",
    statusColor: "red-500",
    outOfStock: true,
    image: ["catProduct03.png", "catProduct03.png"],
    deliveryDate: "Aug 01 - Aug 05",
    freeShipping: true,
    freeShippingThreshold: 699,
    description:
      "A bright yellow kurti crafted from rayon blend for everyday elegance. Lightweight and breezy feel.",
    specifications: {
      "Top Shape": "Straight",
      "Top Type": "Kurta",
      Colour: "Yellow",
      Dupatta: "No Dupatta",
      "Top Pattern": "Solid",
      "Sleeve Length": "Half Sleeves",
      Neck: "Boat Neck",
      "Top Length": "Knee Length",
      "Print or Pattern": "Solid",
      Fabric: "Rayon Blend",
      Waistband: "None",
      "Hemline": "Straight",
      "Weave Type": "Knitted",
      Occasion: "Casual",
    },
    seller: {
      name: "DEF Textiles",
      address: "Lane 5, Fashion Road, Mumbai, MH",
      country: "India",
      email: "sales@deftextiles.in",
      phone: "+91-9988776655",
    },
    ratingBreakdown: {
      5: 50,
      4: 25,
      3: 15,
      2: 5,
      1: 5,
    },
    reviews: [
      {
        id: "review-3",
        name: "Kritika N.",
        rating: 4,
        comment: "Looks great but slightly loose fitting. Color is vibrant!",
        date: "June 5, 2024",
      },
    ],
  },
  {
  id: "4",
  brand: "Ziva Couture",
  name: "Green Layered Kurta Set",
  originalPrice: 3200,
  salePrice: 2799,
  rating: 4.8,
  status: "Customizable",
  statusColor: "green-500",
  outOfStock: false,
  image: ["catProduct01.png", "catProduct0102.png"],
  deliveryDate: "Jul 31 - Aug 05",
  freeShipping: true,
  freeShippingThreshold: 699,
  description:
    "A stunning green kurta set featuring layered chiffon and intricate sequin embroidery. Includes matching pants and dupatta.",
  specifications: {
    "Top Shape": "Layered",
    "Top Type": "Kurta Set",
    Colour: "Emerald Green",
    Dupatta: "With Dupatta",
    "Top Pattern": "Embellished",
    "Sleeve Length": "Full Sleeves",
    Neck: "Square Neck",
    "Top Length": "Calf Length",
    Fabric: "Chiffon Blend",
    Waistband: "Elasticated",
    "Hemline": "Flared",
    Occasion: "Wedding",
  },
  seller: {
    name: "Ziva Couture India",
    address: "Tower 9, Kurti Market, Delhi",
    country: "India",
    email: "ziva@couture.in",
    phone: "+91-9812456780",
  },
  ratingBreakdown: { 5: 72, 4: 20, 3: 5, 2: 2, 1: 1 },
  reviews: [
    {
      id: "review-4",
      name: "Anjali M.",
      rating: 5,
      comment: "Looks very premium and fits like a dream!",
      date: "July 8, 2024",
    },
  ],
},
{
  id: "5",
  brand: "Urban Stitch",
  name: "Black A-Line Kurta",
  originalPrice: 1800,
  salePrice: 1499,
  rating: 4.2,
  status: "Ready to Ship",
  statusColor: "red-500",
  outOfStock: false,
  image: ["catProduct02.png", "catProduct0202.png"],
  deliveryDate: "Aug 01 - Aug 04",
  freeShipping: true,
  freeShippingThreshold: 699,
  description:
    "Minimalist black kurta in soft rayon. A-line silhouette that flatters all body types, great for office wear.",
  specifications: {
    "Top Shape": "A-Line",
    "Top Type": "Kurta",
    Colour: "Black",
    Dupatta: "No Dupatta",
    "Top Pattern": "Solid",
    "Sleeve Length": "Three-Quarter Sleeves",
    Neck: "Round Neck",
    "Top Length": "Knee Length",
    Fabric: "Rayon",
    Waistband: "None",
    "Hemline": "A-Line",
    Occasion: "Office Wear",
  },
  seller: {
    name: "Urban Stitch Ltd.",
    address: "Level 3, Mall Avenue, Bengaluru",
    country: "India",
    email: "info@urbanstitch.in",
    phone: "+91-9876023112",
  },
  ratingBreakdown: { 5: 40, 4: 35, 3: 10, 2: 3, 1: 2 },
  reviews: [
    {
      id: "review-5",
      name: "Swati B.",
      rating: 4,
      comment: "Comfortable and classy! Stitching could be tighter.",
      date: "June 30, 2024",
    },
  ],
},
{
  id: "6",
  brand: "Noor Styles",
  name: "White Embroidered Suit",
  originalPrice: 2800,
  salePrice: 2499,
  rating: 4.7,
  status: "Customizable",
  statusColor: "green-500",
  outOfStock: false,
   image: ["catProduct03.png", "catProduct03.png"],
  deliveryDate: "Jul 30 - Aug 03",
  freeShipping: true,
  freeShippingThreshold: 699,
  description:
    "Graceful white suit with resham thread work embroidery. Lightweight georgette, perfect for summer functions.",
  specifications: {
    "Top Shape": "Straight",
    "Top Type": "Kurta Set",
    Colour: "White",
    Dupatta: "With Dupatta",
    "Top Pattern": "Embroidered",
    "Sleeve Length": "Full Sleeves",
    Neck: "Boat Neck",
    "Top Length": "Calf Length",
    Fabric: "Georgette",
    Waistband: "Drawstring",
    "Hemline": "Straight",
    Occasion: "Festive / Eid",
  },
  seller: {
    name: "Noor Styles",
    address: "Unit 2, Chandni Chowk, Delhi",
    country: "India",
    email: "care@noorstyles.com",
    phone: "+91-9087654321",
  },
  ratingBreakdown: { 5: 75, 4: 18, 3: 5, 2: 1, 1: 1 },
  reviews: [
    {
      id: "review-6",
      name: "Fatima R.",
      rating: 5,
      comment: "Very elegant. Embroidery is detailed and classy.",
      date: "July 1, 2024",
    },
  ],
},
{
  id: "7",
  brand: "Style Saga",
  name: "Peach Straight Kurta",
  originalPrice: 1200,
  salePrice: 899,
  rating: 4.1,
  status: "Ready to Ship",
  statusColor: "red-500",
  outOfStock: false,
  image: ["catProduct02.png", "catProduct0202.png"],
  deliveryDate: "Aug 02 - Aug 06",
  freeShipping: true,
  freeShippingThreshold: 699,
  description:
    "Daily wear straight kurta in peach with block prints. Cotton-rich fabric, easy to style with jeans or palazzos.",
  specifications: {
    "Top Shape": "Straight",
    "Top Type": "Kurta",
    Colour: "Peach",
    Dupatta: "No Dupatta",
    "Top Pattern": "Block Print",
    "Sleeve Length": "Three-Quarter Sleeves",
    Neck: "Mandarin Collar",
    "Top Length": "Knee Length",
    Fabric: "Cotton",
    Waistband: "None",
    "Hemline": "Straight",
    Occasion: "Casual",
  },
  seller: {
    name: "Saga Enterprises",
    address: "Main Road, Surat, Gujarat",
    country: "India",
    email: "hello@stylesaga.com",
    phone: "+91-8866223344",
  },
  ratingBreakdown: { 5: 36, 4: 28, 3: 20, 2: 5, 1: 1 },
  reviews: [
    {
      id: "review-7",
      name: "Nikita K.",
      rating: 4,
      comment: "Nice for daily wear. Color is subtle and soft.",
      date: "July 11, 2024",
    },
  ],
},
{
  id: "8",
  brand: "Elegance Ethnic",
  name: "Maroon Silk Kurta",
  originalPrice: 3500,
  salePrice: 2999,
  rating: 4.9,
  status: "Customizable",
  statusColor: "green-500",
  outOfStock: false,
  image: ["catProduct03.png", "catProduct03.png"],
  deliveryDate: "Aug 03 - Aug 07",
  freeShipping: true,
  freeShippingThreshold: 699,
  description:
    "Luxurious maroon silk kurta set with zari borders. An elegant choice for festivals and receptions.",
  specifications: {
    "Top Shape": "Flared",
    "Top Type": "Kurta Set",
    Colour: "Maroon",
    Dupatta: "With Dupatta",
    "Top Pattern": "Zari Work",
    "Sleeve Length": "Full Sleeves",
    Neck: "Sweetheart Neck",
    "Top Length": "Ankle Length",
    Fabric: "Silk Blend",
    Waistband: "Elasticated",
    "Hemline": "Flared",
    Occasion: "Reception",
  },
  seller: {
    name: "Elegance Ethnic",
    address: "Fashion Street, Kolkata",
    country: "India",
    email: "orders@elegance.com",
    phone: "+91-9785601234",
  },
  ratingBreakdown: { 5: 82, 4: 12, 3: 4, 2: 1, 1: 1 },
  reviews: [
    {
      id: "review-8",
      name: "Shruti R.",
      rating: 5,
      comment: "Truly royal look. Got so many compliments!",
      date: "July 14, 2024",
    },
  ],
},
{
  id: "9",
  brand: "Aarohi Trends",
  name: "Mustard Printed Kurti Set",
  originalPrice: 2200,
  salePrice: 1799,
  rating: 4.4,
  status: "Customizable",
  statusColor: "green-500",
  outOfStock: false,
 image: ["catProduct03.png", "catProduct03.png"],
  deliveryDate: "Jul 29 - Aug 02",
  freeShipping: true,
  freeShippingThreshold: 699,
  description:
    "Bright mustard kurti with floral block prints, paired with matching palazzos. Stylish yet comfortable for daily wear.",
  specifications: {
    "Top Shape": "A-Line",
    "Top Type": "Kurta Set",
    Colour: "Mustard Yellow",
    Dupatta: "No Dupatta",
    "Top Pattern": "Block Print",
    "Sleeve Length": "Half Sleeves",
    Neck: "Round Neck",
    "Top Length": "Knee Length",
    Fabric: "Cotton Blend",
    Waistband: "Elasticated",
    "Hemline": "A-Line",
    Occasion: "Everyday Wear",
  },
  seller: {
    name: "Aarohi Trends",
    address: "Sector 12, Noida, UP",
    country: "India",
    email: "support@aarohitrends.com",
    phone: "+91-8800132455",
  },
  ratingBreakdown: { 5: 50, 4: 32, 3: 10, 2: 4, 1: 1 },
  reviews: [
    {
      id: "review-9",
      name: "Priya J.",
      rating: 4,
      comment: "Nice color and good fitting. Fabric feels soft.",
      date: "July 10, 2024",
    },
  ],
},





 
];

export const BrandProducts = products.filter(
  (p) => p.brand === "Bonita Boutique"
);
