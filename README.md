This webpage is an interactive and user-friendly e-commerce platform named "Capstone Co.", designed using React. It showcases various features essential for a modern online shopping experience, including product browsing, detailed product information, a shopping cart, and user authentication.

Core Features:
    Navigation Bar: Intuitively designed for ease of navigation throughout the site, the navigation bar dynamically updates to reflect whether a user is logged in or not. Authenticated users can navigate to product listings and view their cart, while unauthenticated users are prompted to log in or view products.
    Home Page: Features a list of featured products that can take users to each products' respective details page or a quick link to the product list page. Also features the name of the website with the company logo.
    Product Listing and Detail: Users can browse through a list of products, filter and sort them based on categories, price, or ratings. Clicking on a product leads to a detailed view, offering in-depth information like product descriptions, prices, ratings, and an option to add the product to the cart.
    Shopping Cart: A functional shopping cart allows users to review their selected products, adjust quantities, remove items, and proceed to checkout, ensuring a smooth shopping experience.
    Login and Authentication: The login functionality enables users to authenticate, enhancing security and personalizing the user experience. The authentication state is managed with React's Context API, and local storage is utilized for persisting the user's session.
    Checkout Process: Protected routes ensure that only authenticated users can proceed to the checkout process, culminating in a billing information page designed for transaction completion.

Technical Stack: This application leverages React for its frontend, showcasing the power of hooks for state management (useState, useEffect) and navigation (BrowserRouter, Routes, Route, Navigate). Custom hooks and context providers are used to manage the shopping cart, demonstrating an advanced understanding of React's capabilities for stateful logic and context management. The styling is thoughtfully applied through CSS modules, contributing to the site's visual appeal and user experience.

Users can access this website using the following URL:
    https://capstone-project-v002.netlify.app/

How to Login:
    Because this website does not have a feature for creating new accounts yet, users can use pre-made accounts from the API. The following usernames and passwords are:
            User 1: John Doe
            Username: johnd
            Password: m38rmF$

            User 2: David Morrison
            Username: mor_2314
            Password: 83r5^_

            User 3: Kevin Ryan
            Username: kevinryan
            Password: kev02937@

            User 4: Don Romer
            Username: donero
            Password: ewedon
