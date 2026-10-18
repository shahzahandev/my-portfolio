import novaMarketImage from "../assets/nova-market.png";
import novaAgencyImage from "../assets/nova-agency.png";
import earbudsImage from "../assets/e-earbuds.png";
import dashboardImage from "../assets/e-dashboard.png";

export const projects = [
  {
    id: "nova-market",
    name: "Nova Market",
    type: "Single Vendor E-Commerce",
    image: novaMarketImage,
    imageAlt: "Nova Market ecommerce website preview",
    live: "https://nova-market-frontend.vercel.app/",
    description:
      "A complete single-vendor shopping platform with product, order, cart, and admin workflows.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    features: [
      "JWT Authentication",
      "Product Management",
      "Shopping Cart",
      "Order Management",
      "Admin Dashboard",
      "Responsive UI"
    ]
  },
  {
    id: "e-earbuds",
    name: "E-Earbuds",
    type: "Full Stack Project",
    image: earbudsImage,
    imageAlt: "E-Earbuds online store preview",
    live: "https://e-mart-single-vendor-frontend.vercel.app/",
    description:
      "A responsive full-stack commerce application built for clean product browsing and order handling.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    features: [
      "JWT Authentication",
      "Product Management",
      "Shopping Cart",
      "Order Management",
      "Admin Dashboard",
      "Responsive UI"
    ]
  },
  {
    id: "e-commerce-dashboard",
    name: "E-Commerce Dashboard",
    type: "Full Stack Project",
    image: dashboardImage,
    imageAlt: "E-Commerce Dashboard preview",
    live: "https://e-mart-single-vendor-frontend.vercel.app/",
    description:
      "A responsive full-stack commerce application built for clean product browsing and order handling.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    features: [
      "JWT Authentication",
      "Product Management",
      "Shopping Cart",
      "Order Management",
      "Admin Dashboard",
      "Responsive UI"
    ]
  },
  {
    id: "nova-studio",
    name: "Nova Studio",
    type: "Frontend Project",
    image: novaAgencyImage,
    imageAlt: "Nova Studio agency website preview",
    live: "https://web-agency-ruddy-mu.vercel.app/",
    description: "A polished web agency interface focused on responsive layout, clean sections, and modern styling.",
    stack: ["React.js", "JavaScript", "Tailwind CSS"],
    features: ["Responsive Web Design"]
  }
];
