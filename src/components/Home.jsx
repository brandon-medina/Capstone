import React from 'react';
import home_store from '../assets/img/home_store.jpg';
import '../styles/home.css'; // Ensure the CSS file is imported if it contains styles that you'd like to apply. 

function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to the Fake Store</h1>
 
            <div className="store-description">
                <p>
                This webpage is an interactive and user-friendly e-commerce platform named "Fake Store", designed using React. It showcases various features essential for a modern online shopping experience, including product browsing, detailed product information, a shopping cart, and user authentication.
                </p>
                <h2>Core Features:</h2>
                <ul>
                    <li>
                        <strong>Navigation Bar:</strong> Intuitively designed for ease of navigation throughout the site, the navigation bar dynamically updates to reflect whether a user is logged in or not. Authenticated users can navigate to product listings and view their cart, while unauthenticated users are prompted to log in or view products.
                    </li>
                    <li>
                        <strong>Home Page:</strong> Features a welcoming message and an inviting image representing the store, creating an engaging first impression while providing a quick overview of what the store offers.
                    </li>
                    <li>
                        <strong>Product Listing and Detail:</strong> Users can browse through a list of products, filter and sort them based on categories, price, or ratings. Clicking on a product leads to a detailed view, offering in-depth information like product descriptions, prices, ratings, and an option to add the product to the cart.
                    </li>
                    <li>
                        <strong>Shopping Cart:</strong> A functional shopping cart allows users to review their selected products, adjust quantities, remove items, and proceed to checkout, ensuring a smooth shopping experience.
                    </li>
                    <li>
                        <strong>Login and Authentication:</strong> The login functionality enables users to authenticate, enhancing security and personalizing the user experience. The authentication state is managed with React's Context API, and local storage is utilized for persisting the user's session.
                    </li>
                    <li>
                        <strong>Checkout Process:</strong> Protected routes ensure that only authenticated users can proceed to the checkout process, culminating in a billing information page designed for transaction completion.
                    </li>
                </ul>
                <h2> Technical Stack: </h2>
                <p>
                    This application leverages React for its frontend, showcasing the power of hooks for state management (useState, useEffect) and navigation (BrowserRouter, Routes, Route, Navigate). Custom hooks and context providers are used to manage the shopping cart, demonstrating an advanced understanding of React's capabilities for stateful logic and context management. The styling is thoughtfully applied through CSS modules, contributing to the site's visual appeal and user experience.
                </p>
                
                <p>
                    Overall, the "Fake Store" web application stands as a comprehensive demonstration of a fully functional e-commerce site crafted with React. It meticulously combines user authentication, product browsing, and shopping cart management into a seamless online shopping journey. This platform exemplifies how modern web development techniques and React's robust ecosystem can be utilized to create engaging and dynamic web applications.
                </p>
            </div>
        </div>
    );
}

export default Home;