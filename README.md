# fxWizard API

_Made by Gijs van den Beuken_

## Table of Contents

- [Introduction](#heading-introduction)
- [About the Project](#heading-about-the-project)
- [Setup for the Project](#heading-setup-for-the-project)
- [Project Content](#heading-project-content)

## Introduction <a name="introduction"></a>

This repository contains the back-end for the fxWizard project, a script tailored for Adobe After Effects. The back-end serves as the middleware between the front-end and the MongoDB Atlas remote database, handling user authentication, data retrieval, and manipulation.

## Technologies Used <a name="technologies-used"></a>

- Node.js
- Express
- MongoDB Atlas
- Bcrypt
- Axios
- Mocha

## Installation <a name="installation"></a>

1. Clone the repository:

```javascript
git clone https://github.com/gijsvdbeuken/fxWizard-API.git
```

2. Install dependencies:

```javascript
cd fxWizard-backend
npm i
```

3. Configure environment variables:

```javascript
PORT = 8080;
MONGODB_URI = xxx;
SECRET_KEY = xxx;
```

## Usage <a name="usage"></a>

1. Run the server:

```javascript
npm start
```

2. The API will be accessible at http://localhost:8080

## Unit Tests <a name="unit-tests"></a>

1. Run tests using Mocha:

```javascript
npm test
```

## API Endpoints <a name="api-endpoints"></a>

- '/'
- '/register' - registers a new user
- '/auth' - authenticates a user
- '/refresh' - refreshes current session
- '/logout' - logs user out from current session
