import React from 'react';
import home_store from '../assets/img/home_store.jpg';
import '../styles/home.css'; // Ensure the CSS file is imported if it contains styles that you'd like to apply. 

function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to the Fake Store</h1>
            <img src={home_store} alt="Store Front" className="store-image"/>
            <div className="store-description">
                <p>
                    The webpage is an interactive and user-friendly e-commerce platform named "Fake Store", designed using React.
                </p>
                <h2>Core Features:</h2>
                <ul>
                    <li>
                        <strong>Navigation Bar:</strong> Easily navigate throughout the site with a dynamic navigation bar that updates based on user authentication.
                    </li>
                    <li>
                        <strong>Home Page:</strong> A welcoming first impression with a quick overview of the store offerings.
                    </li>
                    <li>
                        <strong>Product Listing and Detail:</strong> Browse, filter, sort products, and view detailed product information.
                    </li>
                    <li>
                        <strong>Shopping Cart:</strong> Review selected products, adjust quantities, or remove items with ease.
                    </li>
                    <li>
                        <strong>Login and Authentication:</strong> Secure login functionality to personalize the user experience.
                    </li>
                    <li>
                        <strong>Checkout Process:</strong> A seamless checkout process accessible only to authenticated users.
                    </li>
                </ul>
                <p>
                    Overall, the "Fake Store" application demonstrates a fully functional e-commerce site crafted with modern web development techniques and React's robust ecosystem.
                </p>
            </div>
        </div>
    );
}

export default Home;