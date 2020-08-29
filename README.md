# NodeJs-Guide

## How to use

## How it was setup

1. Run "npm init" and follow the steps
2. run "npm i express dotenv"
3. run "npm i -D nodemon"

<h3>Routes</h3>
<p>A route is a section of Express code that associates an HTTP verb (GET, POST, PUT, DELETE, etc) a URL path/pattern and a function that is called to handle that pattern. We use routes as actual endpoints for webaplications to interact with the system and trigger logic. </p>
<h3>Controllers</h3>
<p>Controllers are the callback functions we parse to the router methods. In this project we import our controllers in our router section and we make callbacks from the routs directly to our controllers. Controllers can then handle and distribute business logic using middleware, other functions and so on.</p>
