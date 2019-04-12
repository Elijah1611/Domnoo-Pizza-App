# Domnoo

### Domnoo is a web app that'll allow you to browse a menu of delicious meals and create an order to call in! <br>

**Features:**
* Explore Domnoo's Single Page App that's powered by Vue, Vue Router, Vuex, Vuetify, and Firebase!
* Browse a variety  of foods from a responsive dynamic menu!
* Make a request to a cloud firestore database to search the menu for your favorite foods using the search feature!
* Select a category then open the menu to only search for certain meals!
* Add items to a cart!
* Remove items from a cart!
* See the total items and cost of your cart!
* See all the items you added to the cart with a fullscreen dialog!

## Getting Started ⌨

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.<br>
See the **Deployment** section on how to deploy the project on a live system.

## Prerequisites ✏

Make sure you have the following installed on your system before preceding.
* Node & NPM

## Installation 💿

These are a series of step by step examples that will help you get a development environment up & running.

### Step 1. Download the zip or clone the repo 💾

```
git clone https://github.com/LijahTheDev/Domnoo-Pizza-App.git
```

### Step 2. Install Dependencies 🗂

Once you have the project folder ready to go, open the folder in your favorite code editor.<br>
Once you have opened the project folder in your code editor,<br> 
open the project directory in a terminal and run the following command in the project folder/directory.

```
npm install
```
This will install all the dependencies and get all the required packages for this project.

### Step 3. Run Project on Local Dev Server 💻

Next, you'll want to run a local development server with hot reloading.<br> 
When you make changes and save, the server running the project on localhost will automatically reload with your changes.<br>
Vue makes it easy to spin up a local server on localhost by typing an easy command in the terminal.

```
npm run serve
```

## Deployment 📢
After following the previous installation steps up above,<br> 
you can run the following command to have an optimized production version of the project where you can put the project on a host of your choice.
```
npm run build
```
This command compiles and minifies the app for production to the `dist` folder.<br>

See Vue's section about [deployment](https://cli.vuejs.org/guide/deployment.html) for more information.

### How I Handled Deployment 🔌

I used **Netlify** for deployment. It was one of the easiest things I did on this project.<br> 
I linked this repo to Netlify so anytime I push my changes to this repo it will automatically update the live website!<br> 
To view the live website on Netlify click here: https://domnoo-firebase.firebaseapp.com/

## This Project Is Built With: 🔨
* [Vue](https://vuejs.org/)
* [Vue CLI](https://cli.vuejs.org/)
* [Vue Router](https://router.vuejs.org/)
* [Vuex](https://vuex.vuejs.org/)
* [Cloud Firestore](https://firebase.google.com/docs/firestore/)
* [Vuetify](https://vuetifyjs.com/)
* [uuid](https://www.npmjs.com/package/uuid)

## Acknowledgments 💡

I built this project while taking ["The complete Vue JS course"](https://www.udemy.com/the-complete-vue-js-course/) course.<br> 
This is where the project idea came from. I added and changed many features.<br>
I'm thankful for this course, it taught me a lot!❤😎
