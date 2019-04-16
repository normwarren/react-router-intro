# React Router
React Router gives us the ability to switch pages in our application. We can install it with `npm i react-router-dom` or `yarn add react-router-dom`

## HashRouter
The specific type of router we will use for our application. We import this in our App.js file and wrap the main div element with it. This allows our entire application to have access to routing

## Switch
The Switch component works just like a switch case in javascript. It says "when we get a request to go to X route, display this component"README.md

## Route
The Route component takes to props 1. A `path` and 2. A component to display when we go to the previous route. There is an optional third prop called `exact` that says "match this route exactly". We used that in our project for our Home route because every single route started with `/` and it would display our Home component always without it

## Link
Just like an `a` element. It says we can route to this specific path we pass in via a prop called `to`. Remember, if you use a Link component, we need to make sure we have a route set up to handle that `to` in our router.