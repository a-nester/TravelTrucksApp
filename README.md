# TravelTrucks - Campervan Rental Service

## Overview

**TravelTrucks** is a web application for campervan rentals. Users can browse available campervan models, filter them by characteristics, book selected models, leave reviews, and get information about upcoming trips.

## Key Features

- View a catalog of campervans.
- Filter campers by various attributes (capacity, price, brand).
- Detailed information for each campervan: features, reviews, photos.
- Ability to book a campervan for a specific time period.
- Add reviews for campervans.
- Responsive design for ease of use on various devices.

## Technologies

The project is developed using the following technologies:

- **React** — as the framework for building the user interface.
- **Vite** — for building the project.
- **Redux Toolkit** — for managing global state.
- **React Router** — for routing between pages.
- **Formik** + **Yup** — for form handling and data validation.
- **Axios** — for making API requests.
- **React Hot Toast** — for displaying notifications.
- **React Datepicker** — for selecting booking date ranges.
- **React Spinners** — for displaying loading indicators.

## Installation and Running the Project

### 1. Clone the Repository

Clone the project from GitHub:

```bash
git clone https://github.com/a-nester/TravelTrucksApp
2. Install Dependencies
Navigate to the project directory and install all the dependencies:

bash
Копировать код
cd traveltrucks
npm install
3. Start the Local Server
To start the project in development mode, use the following command:

bash
Копировать код
npm run dev
This will launch the app in development mode. Open http://localhost:3000 to view it in your browser.

4. Build for Production
To create an optimized production build, run the following command:

bash
Копировать код
npm run build
This will generate the optimized version of the app in the dist folder.

5. Preview the Production Build
To preview the production build locally, run:

bash
Копировать код
npm run preview
Scripts

npm run dev — starts the app in development mode.
npm run build — creates a production build.
npm run preview — previews the production build.
npm run lint — checks code for errors using ESLint.
Deployment on Vercel

The project is deployed automatically on Vercel. To set up your own deployment:

Create an account on Vercel.
Connect your repository to Vercel.
Select the branch you want to deploy (usually main).
Configure the environment and environment variables if needed.
After that, your app will be accessible at a generated domain or a custom one.

Dependencies

Main Dependencies
@reduxjs/toolkit: A tool for managing state with Redux.
axios: A library for making API requests.
clsx: A utility for conditionally joining class names.
formik: A library for managing forms.
react-datepicker: A date picker component for selecting dates.
react-hot-toast: A library for displaying notifications.
react-redux: Official library for integrating React with Redux.
react-router-dom: For routing between pages.
redux-persist: For persisting Redux state between page reloads.
yup: A library for data validation.
Dev Dependencies
eslint: A tool for linting JavaScript code.
eslint-plugin-react: ESLint plugin for React.
vite: A fast build tool for the project.
@vitejs/plugin-react: A plugin for supporting React in Vite.
Project Structure

arduino
Копировать код
├── public
│   └── index.html
├── src
│   ├── components
│   ├── pages
│   ├── redux
│   ├── App.js
│   ├── index.js
│   ├── styles
│   └── assets
└── README.md
components/: All reusable components (forms, lists, etc.).
pages/: Application pages (home page, catalog, camper details).
redux/: Redux logic and operations.
styles/: Global project styles.
assets/: Images, icons, and other static files.
Contact

If you have any questions or suggestions about this project, feel free to contact us:

Email: a_nester@ukr.net
Website: TravelTrucks
License

This project is licensed under the MIT License.
