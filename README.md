<h1> NodeJs-Guide </h1>

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
- Mocha (can't run interly independent), Jasmine, Jest
- Supertest
o
<h2>Automated Testing</h2>
- The time it takes to manually test functions will grow exponentially throughout development and that's why we are in need of automated testing. 
- Automated tests should be part of our deployment process.
- It enables us to refactor our code with confidence.

<h2>Unit Test</h2>
- Tests a unit of an application without its external dependencies.
- Cheap to write 
- Execute fast

<h2>Integration Test</h2>
- Tests the application with it's external dependencies
- Gives you overview with health of application
- Good for high data driven application (With multiple database integrations)

<h2>End-To-End Test</h2>
- Drives an application through its UI.
- Gives you the greatest confidence
- Very slow
- Very brittle (easily breakable)
