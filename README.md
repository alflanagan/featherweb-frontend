[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://app.travis-ci.com/alflanagan/featherweb-frontend.svg?branch=main)](https://app.travis-ci.com/alflanagan/featherweb-frontend)

# Featherweb Frontend Application

This is to be a website for controlling my home-built robot using the [FeatherS2](https://feathers2.io) microprocessor. It
will provide low- and high-level interfaces for instructing the robot's motion, and reading whatever sensors I end up piling
on to the thing.

The first task is to get the robot walking, which requires both hardware setup and on-board software. The project for that is
[alflanagan/featherboa](https://github.com/alflanagan/featherboa) using CircuitPython. (At some point it may be necessary
to switch to programming the board in C. I'll have to see what roadblocks I run into.)

This project is based on Create React App, Typescript, and Redux. Below is the original README created by CRA from the command

`npx create-react-app featherweb-frontend --template=redux-typescript`.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
