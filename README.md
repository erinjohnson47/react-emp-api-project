# Mini Project: React-Express-API

# ![GA Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) 

### Overview

While your last project taught you how to get started with writing a fullstack application in JavaScript using Express, Mongoose, and Node, this project will have you building another full stack application, but this time with a React front-end.

You will build a react front end to consume a given API

1. Link to this [API](https://github.com/erinjohnson47/react-weekend-employee-api) repository.
2. Front-end React code that updates the UI and makes CRUD requests to your API back end.

---

### Requirements

> ### *Do not use REDUX for this project*


#### Front-End Requirements
  - React front end that consumes your backend API.
  - It must communicate with the back end API RESTfully to Create, Read, Update, and Destroy resources, using fetch.
  - Add User Login and Registration
  

### App Organization

You should build your application in completely separate repositories, one for your React front-end and another for your Node-Express-Mongoose API.

---

### Process

* **Keep user stories small** and well-defined. Remember: user stories focus on what a user *needs*, not what development tasks need accomplishing.
* **Write pseudocode** before you write actual code. Thinking through the logic first helps.
* **Don't hesitate** to write throwaway code to solve short-term problems.
* **Read the docs** for whatever technologies / frameworks / APIs you plan to use. (See ["RTFM"](https://en.wikipedia.org/wiki/RTFM))
* **Use Git Branches** 


---

### Code

* **Keep your code DRY** and build your API RESTful.
* **Be consistent** with your code style. (Pick single or double quotes, either put a space between `) {` or don't).
* **Commit early; commit often.** Don't be afraid to break something because you can always go back in time to a previous version (so long as you're committing often).
* **Name things appropriately.  Comment as necessary.** Do your naming conventions make sense? Would another developer be able to look at your app and understand what everything is? (See ["self-documenting"](https://en.wikipedia.org/wiki/Self-documenting)).  Even if it's obvious, comments can help to explain the intent -- the what and why.  This allows the next developer (which could even be you in a few months) to understand the purpose and decide what can be adjusted to achieve the same goal.
* **Ensure it is well-formatted.** Are you indenting consistently? Can we find the start and end of every div, curly brace, etc?  Organizing the hierarchy is key to understanding.

---


---

### Bonuses

You should only attempt these bonuses if and only if you've satisfied project requirements.


* Implement pagination in your API (you could do this with query parameters or URL parameters)

#### Deployment
  - Your API must be deployed to Heroku and your front-end must be deployed to Heroku


    > You MUST deploy your back-end and front-end separately. This assignment is to make a front end and separate back end using totally decoupled architecture. This will make it far easier to debug your deployed applications and manage your deployments. One way to get yourself in trouble in this project would be to attempt to follow a tutorial for MERN stack that is NOT decoupled. Do not do this.
    
For React you can use the [heroku buildpack](https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack), just do the quick start guide!

For express use the same resources as last project.
    
---

### Easier

* Use semantic-ui to style your app. - fronted

* JSON web tokens (JWT) for authentication - backend & fronted

### Harder

* Add a third party api - backend or fronted
* Use the [multer](https://www.npmjs.com/package/multer) module to be able to add a profile pic to your express app
* you'll have to do some research and create a profile page for your user - backend and frontend

* OAUTH [oauth module](https://github.com/jaredhanson/oauth2orize) - backend

* Use [react-strap](https://reactstrap.github.io/) to style your app - frontend

* Create cool animations - frontend
