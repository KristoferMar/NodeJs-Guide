﻿<h1> NodeJs-Guide </h1>

<h2>Node</h2>
Configuration and mangement of node it self can be found here: <br>
https://bytearcher.com/articles/ways-to-get-the-latest-node.js-version-on-a-mac/

<h2>Documentation</h2>
Can be found here:<br>
https://nodejs.org/en/docs/

<h2> How it was setup </h2>

1. Run "npm init" and follow the steps
2. run "npm i express dotenv"
3. run "npm i -D nodemon"

<h3>Routes</h3>
<p>A route is a section of Express code that associates an HTTP verb (GET, POST, PUT, DELETE, etc) a URL path/pattern and a function that is called to handle that pattern. We use routes as actual endpoints for webaplications to interact with the system and trigger logic. </p>
<h3>Controllers</h3>
<p>Controllers are the callback functions we parse to the router methods. In this project we import our controllers in our router section and we make callbacks from the routs directly to our controllers. Controllers can then handle and distribute business logic using middleware, other functions and so on.</p>
<h3>Middleware</h3>
<p>Middleware functions have access to the request object, the response object and the next middleware function in the application's request-response cycle. It means that middleware can be injected in controllers to execute logic in different senarios such as when we use authentication. </p>
<h3>Models</h3>
<p>Models are created to define the type of data you want to store in a database. These models are then applied and used in the controllers in our CRUD functions to work with data.</p>

<h2>npm</h2>
Node package manager is a command-line tool and a repoisitory of packages for javascript. <br>

Npm packages can be installed both localy (--save) and globaly (--global).<br>
- Global packages are installed once and are available in any project directory you find yourself in.<br>
- Local packages are specific to the project you are in. <br>

Download the latest package manager. <br>
<i>npm install -g</i><br>

Give an overview of installed packages.<br>
<i>npm ls</i>

Remove node package installed. <br>
<i>npm remove 'package_name'</i>

Inittialize a proejct for npm. <br>
<i>npm init</i>

<h1>Testing</h1>
A very good way to test node.js is by using
- Mocha
- Supertest
