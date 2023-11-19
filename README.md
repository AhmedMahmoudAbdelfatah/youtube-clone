# YouTube Clone Project

This is a YouTube clone project that I created to learn the basics of Redux and styled-components. The project consists of two parts: backend and frontend.

## Technology Used

The following technologies are used in this project:

### Frontend

- ReactJS: A JavaScript library for creating user interfaces.
- Redux: A state management library that helps to store and update the global state of the application in a single source of truth.
- Redux-persist: A library that enables to persist and rehydrate the Redux store, so that the state is preserved even when the page is refreshed or closed.
- MUI: A popular UI framework that provides ready-made components and styles for building responsive and attractive web pages.
- Styled-components: A library that allows to write CSS code in JavaScript files and apply them to React components.
- Timeago: A library that converts timestamps into human-readable relative time formats, such as "3 minutes ago" or "yesterday".
- Axios: A library that simplifies the process of making HTTP requests and handling responses from the backend.
- React-router: A library that enables to create dynamic routes and navigate between different pages in the application.

### Backend

- Node.js: A JavaScript runtime environment that allows to run JavaScript code outside the browser.
- Express: A web framework that provides various features and middleware for building web applications with Node.js.
- Bcryptjs: A library that helps to hash and compare passwords securely using the bcrypt algorithm.
- Cookie-parser: A middleware that parses cookies attached to the client request object.
- Dotenv: A library that loads environment variables from a .env file into process.env.
- Jsonwebtoken: A library that allows to create and verify JSON Web Tokens (JWTs), which are used for authentication and authorization purposes.
- Mongoose: An object data modeling (ODM) library that provides a schema-based solution for modeling and manipulating data in MongoDB, a NoSQL database.

## Features

The YouTube clone project has the following features:

- Users can sign up and log in using their email and password.
- Users can view videos on the home page or search for videos by keywords.
- Users can watch videos on a separate page with video details, comments, and related videos.
- Users can like or dislike videos and leave comments.
- Users can upload videos with title, description, category, and thumbnail.
- Users can subscribe or unsubscribe to other users' channels.
- Users can view their subscriptions page with videos from their subscribed channels.

## How to run the project

To run the project locally, you need to have Node.js, npm, and MongoDB installed on your machine. You also need to clone or download the project repository from GitHub. Then follow these steps:

1. Navigate to the backend folder and create a .env file with the following variables:
   - MONGO: The connection string for connecting to MongoDB (e.g., mongodb://localhost:27017/youtube-clone)
   - JWT: The secret key for creating and verifying JWTs (e.g., abc123)
2. Run `npm install` to install all the dependencies for the backend.
3. Run `npm start` to start the server.
4. Navigate to the frontend folder and run `npm install` to install all the dependencies for the frontend.
5. Run `npm start` to start the client.
6. Open your browser and go to http://localhost:3000 (or the port number you specified in the frontend) to see the application.
