//All the files/node modules required to run index.js
const fs = require('fs');
const inquirer = require('inquirer');

const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager-Class');
const Engineer = require('./lib/Engineer-Class');
const Intern = require('./lib/Intern-Class');

const team = [];

//Prompt for Manager Employee
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the team manager?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this manager's ID number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this manager's email address?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is this manager's office number?",
        },
    ])
    .then(managerData => {
        const {name, id, email, officeNumber} = managerData;
        const manager = new Manager (name, id, email, officeNumber);

        team.push(manager);

        console.log("==== Manager Added! ====");

        menu();
    })
}

//Main Menu
const menu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menuList',
            message: "Add another team member or finish building team.",
            choices: ['Engineer', 'Intern', 'Finish']
        }
    ])
    .then(answers => {
        const userInput = answers.menuList;
        switch(userInput) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            case "Finish":
                finishHTML();
                break;
        }
    })
}


//Prompts for Engineer Employee
const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is this engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this engineer's ID number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this engineer's email address?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is this engineer's github username?",
        },
    ])
    .then(engineerData => {
        const {name, id, email, github} = engineerData;
        const engineer = new Engineer (name, id, email, github);

        team.push(engineer);

        console.log("==== Engineer Added! ====");

        menu();
    })
}

//Prompt for Intern employee
const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is this intern's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this intern's ID number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this intern's email address?",
        },
        {
            type: 'input',
            name: 'school',
            message: "What is this intern's school called?",
        },
    ])
    .then(internData => {
        const {name, id, email, school} = internData;
        const intern = new Intern (name, id, email, school);

        team.push(intern);

        console.log("==== Intern Added! ====");

        menu();
    })
}

//Generate new HTML page using gathered data
const finishHTML = () => {
    console.log("==== Team Generated! Check out index.html! ====")
}

addManager();