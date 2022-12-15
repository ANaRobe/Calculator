# Calculator
![alt text](/docs/Screenshot.PNG)
![alt text](/docs/Screenshot-Mobile.PNG)

This is a simple Calculator for general purposes, a modern app written in React that provides standard calculator functionality.

This app is designed to showcase the learning outcomes after attending a semester the React Course at ReDi School , being built in React using  JavaScript, CSS and HTML.

View the live website on [Heroku](https://anarobe.github.io/Calculator)

Note: To open any links in a new tab, press CTRL + Click

---------------------------------------------------------------------------------------------------

## User Experience Design (UX)

### Strategy Plane

With the core UX principles in mind I started with the outline of the website by firstly identifying target audience and the needs of the enduser.
In the brainstorming phase I focused on answering  questions like "What type of content/functionality is crucial on the website?", "What type of content/functionality would be nice, but not essential?".
The overview of how the competition looks like allowed me decide what features and functionalities would be necesary for my own project. 

*The typical user for the website would be someone who:*

- Needs fast and precise addition resuls 
- Needs fast and precise subtraction resuls 
- Needs fast and precise multiplication resuls 
- Needs fast and precise division resuls 
- Needs fast and precise mixed operations resuls 

*Site Goals:*

- To provide users a single place to find all the above 
- To have  intuitive controls and layout
- Wide compatibility with every Browsers and Devices.

*Site Owner Goals:*

- To provide the user with a professional web application

### EPICS & User Stories

EPIC | Operations

As a user I can operate addition between multiple operands so I can obtain a final result
As a user I can operate subtraction between multiple operands so I can obtain a final result
As a user I can operate multiplication between multiple operands so I can obtain a final result
As a user I can operate division between multiple operands so I can obtain a final result
As a user I can apply different operations between multiple operands so I can obtain a final result
As a user I can start a new chain of calculations after hitting the  "=" key so I can obtain the result of a new calculation

EPIC | Display

As a user I can view the result of my last operation and the operand I am currently introducing
As a user I can view the the numbers separated by comas in groups of 3 figures before adding the coma which precedes the deciamas

Epic | Deletions

As a user I can delete a digit from the current operand I am typing so that I correct the number in case was ryped wrong
As a user I can delete the whole calculation result in order to clear the screen and be able to start new chain of calculations

## Design

The site employs a simple UI, with many standard UI components already familiar to the user and little to distract from the content itself.

### Color scheme

The color scheme was chosen as it feels clean and stylish background: linear-gradient(to right, rgb(36, 188, 193), white);.
At the same time, it is both visually unintimidating and easy on the eye. 
Uith the UX principles in mind, to the buttons colors were offered transparency when clicking.

### Existing Features

 * Addition
 * Subtraction
 * Multiplication
 * Division

## Technologies Employed

### IDE
* Visual Studio Code

### Languages
* HTML
* CSS
* JavaScript


### Hosting
* Github
* Github Pages

### Testing

* Google Dev Tools (including Lighthouse)
<br>
![alt text](/docs/Lighthouse-mobile.PNG)
![alt text](/docs/Lighthouse-desktop.PNG)

* W3C Validator (to check validity of HTML and CSS)
![alt text](/docs/w3c-validator.PNG)

### Deployment

The site was deployed to GitHub Pages. The steps to deploy are as follows:

#### Step 1: Add homepage to package.json
The step below is important!

If you skip it, your app will not deploy correctly.

* Open your package.json and add a homepage field for your project:

  "homepage": "https://myusername.github.io/my-app",
or for a GitHub user page:

  "homepage": "https://myusername.github.io",
or for a custom domain page:

  "homepage": "https://mywebsite.com",

Create React App uses the homepage field to determine the root URL in the built HTML file.


#### Step 2: Install gh-pages and add deploy to scripts in package.json
Now, whenever you run npm run build, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

* To publish it at https://myusername.github.io/my-app, run:

npm install --save gh-pages
Alternatively you may use yarn:

yarn add gh-pages

* Add the following scripts in your package.json:

  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",

The predeploy script will run automatically before deploy is run.

* If you are deploying to a GitHub user page instead of a project page you'll need to make one additional modification:

Tweak your package.json scripts to push deployments to master:
  "scripts": {
    "predeploy": "npm run build",
-   "deploy": "gh-pages -d build",
+   "deploy": "gh-pages -b master -d build",


#### Step 3: Deploy the site by running npm run deploy
* Then run:

npm run deploy


#### Step 4: For a project page, ensure your project’s settings use gh-pages

* Finally, make sure GitHub Pages option in your GitHub project settings is set to use the gh-pages branch:

gh-pages branch setting
Step 5: Optionally, configure the domain
You can configure a custom domain with GitHub Pages by adding a CNAME file to the public/ folder.

Your CNAME file should look like this:

mywebsite.com
Notes on client-side routing
GitHub Pages doesn’t support routers that use the HTML5 pushState history API under the hood (for example, React Router using browserHistory). This is because when there is a fresh page load for a url like http://user.github.io/todomvc/todos/42, where /todos/42 is a frontend route, the GitHub Pages server returns 404 because it knows nothing of /todos/42. If you want to add a router to a project hosted on GitHub Pages, here are a couple of solutions:

You could switch from using HTML5 history API to routing with hashes. If you use React Router, you can switch to hashHistory for this effect, but the URL will be longer and more verbose (for example, http://user.github.io/todomvc/#/todos/42?_k=yknaj). Read more about different history implementations in React Router.
Alternatively, you can use a trick to teach GitHub Pages to handle 404s by redirecting to your index.html page with a custom redirect parameter. You would need to add a 404.html file with the redirection code to the build folder before deploying your project, and you’ll need to add code handling the redirect parameter to index.html. You can find a detailed explanation of this technique in this guide.
Troubleshooting
"/dev/tty: No such a device or address"
If, when deploying, you get /dev/tty: No such a device or address or a similar error, try the following:

Create a new Personal Access Token
git remote set-url origin https://<user>:<token>@github.com/<user>/<repo> .
Try npm run deploy again
"Cannot read property 'email' of null"
If, when deploying, you get Cannot read property 'email' of null, try the following:

git config --global user.name '<your_name>'
git config --global user.email '<your_email>'
Try npm run deploy again

The live link can be found here -  https://anarobe.github.io/Calculator


## To fork the repository on GitHub

A copy of the GitHub Repository can be made by forking the GitHub account. Changes can be made on this copy without affecting the original repository.

1. Log in to GitHub and locate the repository in question.
2. Locate the Fork button which can be found in the top corner, right-hand side of the page, inline with the repository name.
3. Click this button to create a copy of the original repository in your GitHub Account.

## To clone the repository on GitHub

1. Click on the code button which is underneath the main tab and repository name to the right.
2. In the 'Clone with HTTPS' section, click on the clipboard icon to copy the URL.
3. Open Git Bash in your IDE of choice.
4. Change the current working directory to where you want the cloned directory to be made.
5. Type git clone, and then paste the URL copied from GitHub.
6. Press enter and the clone of your repository will be created.


## Learning outcomes:

* JSX Synthax
* Rendering Elements
* Components and Props
* State and Lifecycle
* Handling Events
* Composition vs Inheritance
* Git & GitHub


## Acknowledgements
* For inpiration in general, help and advice, I'd like to give thanks to:

 #### My ReDi tutors
* Eldar Amantay
* Tiago Rezende
* Anna Dontcova
* Christopher Klaus

#### ReDi Coordinators
* Julian Kortendieck
* Fadi Zaim
* Jehan 

#### Fellow colleagues:
* Daniela Burgos
* Alina Cuznetov


