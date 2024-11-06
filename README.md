# Relish App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

-   node 22.2.0 use of below tool is suggested
    -   [nvm](https://github.com/creationix/nvm)
-   npm 10.x

### Demo

https://relish-app.netlify.app

## Usage

1. Clone [relish-api](https://github.com/Almeida-Gerson/relish-api) – the API repo
2. Install `relish-api`'s 3rd party dependencies from `package-lock.json` via
    ```
    npm ci
    ```
3. Clone this repo
4. Install `relish-app`'s 3rd party dependencies from `package-lock.json` via
    ```
    npm ci
    ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Environment Variables

Within each file(`.env.development`, `.env.production`) will include environment variables.

Of note:

-   `REACT_APP_API_URL` will be used as the base API url

### Tools Used

- Create react app
- normalize.css
- react-responsive-pagination
- axios

### Deployment

Netlify will build and deploy when changes are pushed to this repo
