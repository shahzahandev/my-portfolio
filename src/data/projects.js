import novaMarketImage from "../assets/nova-market.png";
import novaAgencyImage from "../assets/nova-agency.png";
import earbudsImage from "../assets/e-earbuds.png";
import dashboardImage from "../assets/e-dashboard.png";

export const projects = [
  {
    id: "nova-market",
    name: "Nova Market (Fontend)",
    type: "Single Vendor E-Commerce",
    image: novaMarketImage,
    imageAlt: "Nova Market ecommerce website preview",
    live: "https://nova-market-frontend.vercel.app/",
    description: "Nova Market is a responsive e-commerce frontend built with React, providing a seamless shopping experience. Users can browse products, explore categories, manage shopping carts and wishlists, place orders, and access account features. It integrates with backend APIs to handle product data, authentication, and store information dynamically.",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Amarpay", "JWT", "Bcrypt.js", "Nodemailer"],
    features: [
      "Product Browsing and Discovery: Browse available products, explore categories, view individual product details, and navigate the store's product catalog.",
      "User Authentication: Register new accounts, log in, and manage account access through the authentication system.",
      "Password Management: Access forgot-password and password-change functionality to manage account credentials securely.",
      "Shopping Cart Management: Add products to the cart, update quantities, remove items, and manage selected products before checkout.",
      "Wishlist Management: Save favorite products to a wishlist for convenient access and future purchases.",
      "Order Management: Place orders and access order-related information through the connected backend APIs.",
      "Dynamic Store Information: Display store details, contact information, delivery information, notices, and return policy content configured through the Admin Dashboard.",
      "Responsive User Interface: Provide a user-friendly shopping experience across desktop, tablet, and mobile devices.",
      "Backend API Integration: Connect frontend components with backend services to retrieve product data, manage cart and wishlist operations, and handle user and order-related requests.",
    ],
    challenges: [
      "Integrating Frontend with Backend APIs: Connecting React components with backend endpoints while handling requests, responses, loading states, and errors.",
      "Managing Authentication and Account Access: Implementing registration and login flows and integrating forgot-password and password-change functionality.",
      "Handling Cart and Wishlist State: Keeping product quantities, cart items, and wishlist data consistent across relevant components and user interactions.",
      "Managing Product and Category Data: Displaying product listings, individual product details, and category-based content using dynamic API data.",
      "Handling Order-Related Workflows: Connecting the shopping experience with order creation and order-related backend operations.",
      "Displaying Dynamic Store Content: Integrating store information, delivery settings, notices, and return policies managed through the Admin Dashboard.",
      "Creating a Responsive Shopping Experience: Designing layouts and interactive components that remain usable across different screen sizes.",
      "Managing API Errors and Data States: Handling unsuccessful requests, missing data, validation errors, and other unexpected API responses gracefully.",
    ]
  },
  {
    id: "Nova Market Dashboard",
    name: "Nova Market (Dashboard)",
    type: "Single Vendor E-Commerce",
    image: dashboardImage,
    imageAlt: "E-Commerce Dashboard preview",
    live: "https://nova-market-dashboard.vercel.app/",
    description: "Nova Market Admin Dashboard is a separate React application designed to manage e-commerce operations efficiently. It supports product, category, order, and user management, along with banner updates, delivery configuration, store settings, and reports. JWT authentication and protected routes help secure administrative access to backend APIs.",
    stack: ["React.js", "Tailwind CSS", " Shadcn/UI", "Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt.js", "Cloudinary"],
    features: [
      "Secure Admin Authentication: Implement admin login using JWT authentication and protect dashboard routes with authentication and authorization middleware.",
      "Role-Based Access Control: Restrict administrative endpoints to authorized admin accounts and validate access permissions through backend middleware.",
      "Product Management: Create, retrieve, update, and delete products through dashboard forms connected to backend APIs.",
      "Category Management: Create and manage product categories, including controlling their active and on-hold statuses.",
      "Order Management: Retrieve all orders, view individual order details, update order information and statuses, and delete orders when required.",
      "User Management: View all users, retrieve individual user information, update account details, manage account status, place accounts on hold, and manage user roles.",
      "Cart and Wishlist Management: Access cart and wishlist data through the available APIs and perform supported retrieval, update, and deletion operations.",
      "Banner and Notice Management: Update promotional banners with images and text, and manage store notices through dashboard controls.",
      "Delivery Settings: Configure delivery charges and manage delivery-related settings according to the store's requirements.",
      "WhatsApp Contact Settings: Manage WhatsApp contact information used to support customer communication.",
      "Store Configuration: Update essential store information, including store name, email address, physical address, and return policy.",
      "Reports and Sales Insights: Access the available reporting functionality to review relevant store and sales information.",
      "Cloudinary Image Management: Integrate image uploads and updates for product or banner content using Cloudinary, where supported by the backend.",
      "Protected API Integration: Connect dashboard operations to backend endpoints and protect sensitive administrative actions with authentication and authorization middleware.",
      "Token Validation and Expiration Handling: Validate admin access tokens and handle invalid or expired tokens to prevent unauthorized dashboard access.",
    ],
    challenges: [
      "Implementing Secure Admin Authentication: Building an admin login flow that issues JWT access tokens and validates credentials before granting dashboard access.",
      "Protecting Administrative Routes and APIs: Applying authentication and authorization middleware to sensitive endpoints and preventing unauthorized users from accessing administrative operations.",
      "Managing User Roles and Account Status: Updating user roles, active or inactive status, and account hold status while enforcing appropriate access restrictions.",
      "Handling Token Expiration: Detecting invalid or expired JWT tokens and ensuring protected dashboard operations cannot continue without valid authorization.",
      "Managing Products and Categories: Implementing complete CRUD workflows while keeping product information, category assignments, and category statuses consistent.",
      "Maintaining Accurate Order Information: Retrieving order lists and individual orders, updating order details and statuses, and ensuring changes are correctly reflected in the application.",
      "Coordinating Multiple Store Operations: Bringing product, category, user, order, cart, wishlist, and configuration management together in a single administrative interface.",
      "Handling Image Uploads and Updates: Connecting dashboard forms with Cloudinary and backend APIs to manage banner and product images reliably.",
      "Configuring Dynamic Store Settings: Building forms for delivery charges, WhatsApp contact details, store information, notices, and return policies, with changes persisted through backend APIs.",
      "Integrating Dashboard Forms with Backend APIs: Managing API requests, form submissions, validation, loading states, error handling, and success feedback across multiple administrative modules.",
      "Maintaining Data Consistency: Ensuring updates made through the dashboard are correctly stored in the database and reflected in subsequent API responses and frontend views.",
      "Organizing a Separate Admin Application: Developing the dashboard as a separate React application while integrating it with the shared backend and maintaining secure access to administrative functionality."
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
      "Agency-Focused Presentation: Showcase services and work clearly.",
      "Clear Calls to Action: Guide visitors through well-organized page sections.",
      "Responsive Visual Design: Deliver a polished experience across screen sizes."
    ],
    challenges: [
      "Building Visual Hierarchy: Make the most important landing-page content easy to scan.",
      "Maintaining Design Consistency: Keep the interface cohesive across different screen sizes.",
      "Balancing Detail and Readability: Pair visual polish with clear content and actions."
    ]
  }
];
