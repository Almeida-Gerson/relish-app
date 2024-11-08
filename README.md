# Relish App

This project was bootstrapped with [Vite](https://github.com/vitejs/vite).

## Requirements

- node 22.2.0 use of below tool is suggested
  - [nvm](https://github.com/creationix/nvm)
- npm 10.x

### Demo

https://relish-app.netlify.app

## Usage

1. Clone [relish-api](https://github.com/Almeida-Gerson/relish-api) – the API repo
2. Install `relish-api`'s 3rd party dependencies from `package-lock.json` via
   ```
   npm ci
   ```
2. Run `relish-api`'s  via
   ```
   npm start
   ```
3. Clone this repo
4. Install `relish-app`'s 3rd party dependencies from `package-lock.json` via
   ```
   npm ci
   ```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173/](http://localhost:5173/) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.\

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Environment Variables

Within each file(`.env.development`, `.env.production`) will include environment variables.

Of note:

- `VITE_APP_API_URL` will be used as the base API url

### Tools Used

- Vite
- normalize.css
- react-responsive-pagination
- axios

### Deployment

Netlify will build and deploy when changes are pushed to this repo
