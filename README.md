# Real Estate MERN Stack Project

This is a full-stack real estate application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application allows users to browse, search, and list real estate properties. It also includes authentication and advanced search functionalities.

---

## Features

### User Features
- View available properties with images, details, and pricing.
- Search for properties using filters (location, price range, property type, etc.).
- User authentication (sign up, login, logout).
- Save favorite properties to a wishlist.
- Contact property owners.

### Admin Features
- Add, edit, and delete property listings.
- Manage user accounts.
- View analytics on property views and user activities.

---

## Technologies Used

### Frontend
- **React.js**: For building user interfaces.
- **Context API**: For state management.
- **CSS**: For styling.
- **React Router**: For navigation.

### Backend
- **Node.js**: For the server-side runtime environment.
- **Express.js**: For building APIs and handling server logic.
- **JWT Authentication**: For secure login and session management.
- **Mongoose**: For MongoDB object modeling.

### Database
- **MongoDB**: A NoSQL database to store user information, property data, and other application data.

---

## Installation and Setup

### Prerequisites
Ensure you have the following installed on your system:
- Node.js
- MongoDB
- Git

### Steps to Run the Application Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/venusai-mabbu/homez.git
   cd real-estate-mern
2.Install Dependencies: Navigate to both the backend and frontend directories and install dependencies:

-bash
-Copy code

# Backend
-cd api
-npm install

# Frontend
-cd ../client
-npm install

3.#Set Environment Variables: Create a .env file in the backend directory with the following details:

-PORT=5000
-MONGO_URI=mongodb://localhost:27017/realestate
-JWT_SECRET=your_secret_key
-CLOUDINARY_URL=your_cloudinary_url (if using for image uploads)

4.# Backend
-cd api
-npm start

# Frontend
-cd ../client
-npm start

