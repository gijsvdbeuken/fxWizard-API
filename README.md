# fxWizard API

_Made by Gijs van den Beuken_

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Unit Tests](#unit-tests)
- [API Endpoints](#api-endpoints)

## Introduction <a name="introduction"></a>

This repository contains the back-end for the fxWizard project, a script tailored for Adobe After Effects. The back-end serves as the middleware between the front-end and the MongoDB Atlas remote database, handling user authentication, data retrieval, and manipulation.

## Technologies Used <a name="technologies-used"></a>

- Node.js
- Express
- MongoDB Atlas
- Docker
- Bcrypt
- Axios
- Mocha

## Setup <a name="setup"></a>

1. Clone the repository:

```
git clone https://github.com/gijsvdbeuken/fxWizard-API.git
```

2. Install dependencies:

```
cd fxWizard-backend
npm i
```

3. Create a `.env` file in the root directory of the project.

4. Generate a access token secret by entering the following command in your terminal:

```
openssl rand -hex 32
```

5. Also generate a refresh token secret:

```
openssl rand -hex 32
```

6. Paste the following snippet into your `.env` file with the corresponding data.

```dotenv
ACCESS_TOKEN_SECRET = [Your previously generated access token secret.]
REFRESH_TOKEN_SECRET = [Your previously generated refresh token secret.]
DATABASE_URI = [Provide the URI for your database.]
DOCKER_USERNAME = [Your Docker Hub username.]
DOCKER_PASSWORD = [Your Docker Hub password.]
```

7. Make sure to add `.env` to your `.gitignore` file to avoid committing sensitive information.

## Usage <a name="usage"></a>

1. Run the server:

```
npm start
```

2. The API will be accessible at http://localhost:8080

## Unit Tests <a name="unit-tests"></a>

1. Run tests using Mocha:

```
npm test
```

## API Endpoints <a name="api-endpoints"></a>

- '/' - main entry API
- '/auth' - authenticates a user
- '/logout' - logs user out
- '/refresh' - handles refresh token
- '/register' - registers a new user
