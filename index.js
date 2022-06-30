// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [ {
    type: "input",
    name: "username",
    message: "Enter your GitHub username:",
    validate: usernameInput => {
        if (usernameInput) {
            return true;
        } else {
            console.log("Please enter your GitHub username!");
            return false;
        }
    }
},
{
    type: "input",
    name: "email",
    message: "Enter your email address:",
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log("Please enter your email!");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'title',
    message: 'What is the title of the project? ',
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('You need to enter a title to continue!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project ',
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('You need to provide a project description!');
            return false;
        }
    }
},
{
    type: "input",
    name: "installation",
    message: "Provide the steps required to install your project:",
    validate: installationInput => {
        if (installationInput) {
            return true;
        } else {
            console.log("Please enter installation steps for your project!");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'usage',
    message: 'How do you use this project? ',
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('Please provide information on how to use project!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'contribution',
    message: 'How should people contribute to this project? ',
    validate: contributionInput => {
        if (contributionInput) {
            return true;
        } else {
            console.log('You need to provide information on how to contribute to the project!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'testing',
    message: 'How do you test this project? (Required)',
    validate: testingInput => {
        if (testingInput) {
            return true;
        } else {
            console.log('You need to describe how to test this project!');
            return false;
        }
    }
},
{
    type: "confirm",
    name: "confirmLicense",
    message: "Would you like to include a license for your project?",
    default: true
},
{
    type: "list",
    name: "license",
    message: "Select a license for your project:",
    choices: ["None", "MIT", "GNU GPLv3", "MPL 2.0"],
    when: ({ confirmLicense }) => {
        if (confirmLicense) {
        return true;
        } else {
        return false;
        }
    }
},
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Information transferred to the README!')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
