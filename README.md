# Jahas-application Back-end and API

## Installation instructions
1. Download the repository
2. Install brew: `npm install brew`
3. Install MongoDB:  `brew install mongodb && mongod`.
4. Install Node JS: `brew install nodejs`.

## Get started
The repository holds the node modules you need to run the application (mongoose and express). Mongoose is an NPM package that allows to interact with MongoDB. Express is is web application framework that runs on NodeJS. In order to start the back end first run `mongod` (note that this may need to be run as admin) in the jahas-app directory. Then move on to the some-api direcotry `cd some-api` and run `npm run start`.
Now if you open your browser and type `http://localhost:3000/` you should see Express welcome page. You can also try other routes like `http://localhost:3000/groups`.

## What's in the API
Important part of the some-api, despite the name, are the router and models directories. In models we have different schemas that represent our tables. These schemas are imported to the corresponging route file in router-direcorry. We can query the database through the express.router. We can make use of standard methods like GET, PUT, POST and DELETE in order to query the database.
