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
    description: "Built a responsive e-commerce frontend featuring product browsing, authentication, shopping cart, wishlist, order management, promotional offers, and a smooth shopping experience across devices.",
    stack: ["React.js", "Node.js", "MongoDB", "Cloudinary", "Amar pay", "JWT"],
    features: [
      "Dynamic Product Browsing and Filtering",
      "Responsive eCommerce Storefront",
      "Shopping Cart and Order Placement",
      "Secure User Authentication",
      "Amar Payment Gateway Integration",
      "Product Details and Discount Pricing",
      "Configurable Delivery Charges",
      "Interactive Wishlist and Product Discovery"
    ],
    challenges: [
      "Maintaining Accurate Cart and Order Totals",
      "Integrating Payment Processing with Order Creation",
      "Synchronizing Frontend State with Backend APIs",
      "Handling Product Availability and Stock Updates",
      "Implementing Flexible Delivery Charge Rules",
      "Ensuring Responsive UI Across Devices"
    ]
  },
  {
    id: "e-commerce-dashboard",
    name: "E-Commerce Dashboard",
    type: "Frontend Project",
    image: dashboardImage,
    imageAlt: "E-Commerce Dashboard preview",
    live: "https://nova-market-dashboard.vercel.app/",
    description: "Developed an admin dashboard for managing products, categories, users, orders, delivery settings, promotional banners, and customer notifications with efficient control over e-commerce operations.",
    stack: ["Tailwind CSS", "Shadcn", "React.js"],
    features: [
      "Centralized Admin Dashboard and Overview",
      "Product and Category Management",
      "Order Tracking and Status Management",
      "User Management and Account Controls",
      "Delivery Charge Configuration",
      "Banner and Notice Management",
      "WhatsApp Contact Settings",
      "Wishlist and Sales Reports",
      "Configurable Store Settings",
      "Cloudinary Image Management"
    ],
    challenges: [
      "Managing Multiple Store Operations in One Dashboard",
      "Keeping Product and Order Data Synchronized",
      "Implementing Secure Admin Access and Permissions",
      "Handling Product Image Uploads and Updates",
      "Configuring Dynamic Delivery Charges and Free Delivery Rules",
      "Maintaining Accurate Order and Sales Information",
      "Connecting Dashboard Forms with Backend APIs",
      "Designing a Consistent and Responsive Admin Interface"

    ]
  },
  {
    id: "e-earbuds",
    name: "E-Earbuds",
    type: "Full Stack Project",
    image: earbudsImage,
    imageAlt: "E-Earbuds online store preview",
    live: "https://e-mart-single-vendor-frontend.vercel.app/",
    description: "E-Earbuds is a full-stack eCommerce application built with the MERN stack, featuring product management, secure JWT authentication, shopping cart, order processing, and SSLCommerz payment gateway integration.",
    stack: ["React.js", "Node.js", "MongoDB", "Multer", "SSLCommerz", "JWT"],
    features: [
      "Focused product browsing for an earbuds store",
      "Shopping cart and order handling",
      "Product information presented in a clean storefront",
      "Responsive shopping experience across screen sizes"
    ],
    challenges: [
      "Making product discovery clear without overwhelming the page",
      "Keeping cart and order interactions predictable",
      "Adapting product imagery and details to smaller screens"
    ]
  },

  {
    id: "nova-studio",
    name: "Nova Studio",
    type: "Frontend Project",
    image: novaAgencyImage,
    imageAlt: "Nova Studio agency website preview",
    live: "https://web-agency-ruddy-mu.vercel.app/",
    description: "Nova Studio is a modern web agency frontend project built with React, JavaScript, and Tailwind CSS, featuring responsive design, smooth animations, creative UI/UX, and interactive service showcases.",
    stack: ["React.js", "JavaScript", "Tailwind CSS"],
    features: [
      "Agency-focused presentation of services and work",
      "Clear page sections and calls to action",
      "Responsive layouts with a polished visual style"
    ],
    challenges: [
      "Creating a strong visual hierarchy across the landing page",
      "Keeping the design cohesive across different screen sizes",
      "Balancing visual details with readable content and clear actions"
    ]
  }
];
