# React Fit - Fitness Subscription Management Website

A functional React website for a gym where you can log in and activate or deactivate a fitness subscription.

## Table of Contents
- [Overview](#overview)
  - [Technologies Used](#technologies-used)
- [Installation and Running](#installation-and-running)
  - [Requirements](#requirements)
  - [Installation Steps](#installation-steps)
- [Project Structure](#project-structure)
  - [Structure Explanation](#structure-explanation)
- [Main Features](#main-features)
- [License](#license)
  - [Permissions](#permissions)
  - [Limitations](#limitations)
  - [Contact](#contact)

### Overview

I decided to develop an application that makes it easy to manage gym subscriptions. 

This application allows users to log in, activate, or deactivate fitness subscriptions easily, offering an intuitive and efficient experience. 

I chose to create this project as part of my diploma thesis to show the skills I gained during my studies, and also to address a real problem many people face: easy access to health and fitness services.

### Technologies Used

- React
- JSON Server
- SCSS

I chose React to build the application interface because it's efficient and flexible for creating reusable components. JSON Server allows me to simulate a backend, providing a quick way to manage user data. I also used SCSS to ensure an attractive and responsive design, so the application is accessible on different devices.

### Installation and Running

#### Requirements
- Node.js
- NPM
- JSON Server (for mock API)

#### Installation Steps:

1. Clone the repository:
   ```
   git clone https://github.com/username/project-name.git
   ```

2. Go to the project folder:
   ```
   cd project-name
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Go to the JSON project folder:
   ```
   cd json-name
   ```

5. Run JSON Server to simulate the backend:
   ```
   json-server users.json --port=3002
   ```

6. Run the React application:
   ```
   npm start
   ```

Now the site should be accessible at `http://localhost:3000`, and JSON Server at `http://localhost:3002`.

### Project Structure

```
FINAL_PROJECT/
│
├── dbs/
│   └── users.json
│
├── project-js4/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── website/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── logo.svg
│   │   ├── reportWebVitals.js
│   │   └── setupTests.js
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
│
└── README.md
```

#### Structure Explanation:

- **dbs/**: Contains the local `users.json` database that stores users.
- **project-js4/**: The main folder of the React application.
  - **src/**: The source code for the React application, divided into components, pages, and other resources.
    - **components/**: Reusable components of the application.
    - **pages/**: Main pages of the application.
    - **assets/**: Static resources (images, styles, etc.).
    - **App.js**: The main component of the application.
    - **index.js**: The entry point of the application.

### Main Features

1. User login/registration
2. Activate or deactivate fitness subscription
3. View subscription status
4. Personal account management

### License

This project is protected by copyright. Using, copying, or changing the source code without the author's clear permission is not allowed.

#### Permissions

- You can use this code only for personal and educational purposes.
- You can't sell, rent, or share the source code or any part of it for commercial purposes without the author's written agreement.

#### Limitations

- This license doesn't give any guarantee about how the code works. The author is not responsible for any damage caused by using it.
- Any commercial use of this code without permission may lead to legal actions.

#### Contact

For questions or permission requests, please contact us at: raducanu_gabriell@yahoo.com.