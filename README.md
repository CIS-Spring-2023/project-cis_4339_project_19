# Data Platform Project Setup

This project has been developed over time by students in the CIS 4339 course.

The current iteration is based on development done by Elliot Farmer Garcia, Agatha	Molski and Chris	Blanco in Fall of 2022.

Requirements:

This project uses NodeJS and MongoDB.

## Backend Node Application
```
cd backend
```
Follow instructions in backend README for setup and running as a local instance.

## Frontend Vue 3 Application
```
cd frontend
```
Follow instructions in frontend README for setup and running as a local instance.


Can be found at https://documenter.getpostman.com/view/19884670/2s93eSab1N



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

    npm run start

### Login Information

Currently there are two users available for testing purposes:

    username: viewer12@gmail.com
    password: dev123

    username: editor12@gmail.com
    password: dev123

These two roles are used to restrict access to certain pages. Upon first logging in, the role is null so you see the login and dashboard. Upon logging
in with one of the above credentials, the role is set and you can navigate to the other pages.
