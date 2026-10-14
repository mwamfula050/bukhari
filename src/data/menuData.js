export const menuCategories = [
  "All",
  "Biryani",
  "Main Dishes",
  "Fast Food",
  "Drinks",
  "Desserts",
];

export const menuItems = [
  {
    id: 1,
    name: "Chicken Biryani",
    category: "Biryani",
    price: 12000,
    description:
      "Fragrant rice served with tender chicken and carefully selected spices.",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=900&q=80",
    popular: true,
  },

  {
    id: 2,
    name: "Beef Biryani",
    category: "Biryani",
    price: 14000,
    description:
      "Aromatic biryani prepared with tender beef and traditional spices.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
    popular: true,
  },

  {
    id: 3,
    name: "Grilled Chicken",
    category: "Main Dishes",
    price: 15000,
    description:
      "Tender grilled chicken prepared with a special house marinade.",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=80",
    popular: false,
  },

  {
    id: 4,
    name: "Beef Steak",
    category: "Main Dishes",
    price: 18000,
    description:
      "Juicy beef prepared and served with delicious accompaniments.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    popular: false,
  },

  {
    id: 5,
    name: "Chicken Chips",
    category: "Fast Food",
    price: 10000,
    description:
      "Crispy chips served with deliciously prepared chicken.",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=80",
    popular: true,
  },

  {
    id: 6,
    name: "Fresh Juice",
    category: "Drinks",
    price: 5000,
    description:
      "Refreshing freshly prepared fruit juice.",
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=80",
    popular: false,
  },

  {
    id: 7,
    name: "Date Juice",
    category: "Drinks",
    price: 5000,
    description:
      "Refreshing date-based drink with a naturally sweet flavour.",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80",
    popular: true,
  },

  {
    id: 8,
    name: "Samosa",
    category: "Fast Food",
    price: 2000,
    description:
      "Crispy golden samosa filled with a delicious savoury filling.",
    image:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=80",
    popular: false,
  },
];

export const featuredDishes = menuItems.filter((item) => item.popular);