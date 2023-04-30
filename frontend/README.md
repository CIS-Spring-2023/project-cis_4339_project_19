# Data Platform Frontend

Follow the instructions below to set up our project.

This project uses [VueJS 3](https://vuejs.org/) with [Vite](https://vitejs.dev/) and [TailwindCSS](https://tailwindcss.com/).
For form validation [Vuelidate](https://vuelidate-next.netlify.app/) is used.

## Project setup

    npm install

### Before startup

You need to either have a local backend running and or use a cloud deployed backend.

Setup a .env file with following variables, e.g.:

    VITE_ROOT_API=http://localhost:3002

VITE_ROOT_API is the URL for the backend API, either on localhost or in the cloud.

### Compiles and hot-reloads for development

    npm run dev

### Login Information

Currently there are two users available for testing purposes:

    username: viewer
    password: password

    username: editor
    password: password

These two roles are used to restrict access to certain pages. Upon first logging in, the role is null so you see the login and dashboard. Upon logging
in with one of the above credentials, the role is set and you can navigate to the other pages.
