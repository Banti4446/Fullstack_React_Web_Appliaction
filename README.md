# Full-Stack React Web Application

This project demonstrates a full-stack React web application deployed and hosted using AWS Amplify. It includes a backend API to serve data from an S3 bucket and user authentication using AWS Cognito.

## Features
- **Deployment & Hosting**: The React app is deployed and hosted using AWS Amplify.
- **Backend API**: A REST API serves data from a static JSON file stored in an S3 bucket.
- **User Authentication**: User signup, login, and logout flows are implemented using AWS Cognito.

## Getting Started
1. **Clone the repository**:
    ```bash
    git clone https://github.com/Banti4446/Fullstack_React_Web_Appliaction.git
    cd Fullstack_React_Web_Appliaction
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up AWS Amplify**:
    ```bash
    amplify init
    amplify add auth
    amplify add api
    amplify publish
    ```

4. **Run the app**:
    ```bash
    npm start
    ```

## Usage
- **Fetch List**: The default landing page displays a list of items fetched from the backend API.
- **Item Details**: Clicking on an item fetches and displays its details from the backend API.
