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

        console.log("Manager Added!");

        addNewEmployee();
    })
}

//Prompt asking if there are additonal employees
const addNewEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addNewEmployee',
            message: "Would you like to add additional employees to this team?",
            choices: ['y', 'n'],
        }
    ]);
};
//NEEDS WORK
if (addNewEmployee === 'y') {
    newEmployeeRole();
} else if (addNewEmployee === 'n') {
    return team;
};

const newEmployeeRole = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeRole',
            message: "What is your new team member's role?",
            choices: ['Engineer', 'Intern']
        }
    ])
}
//

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

        console.log("Engineer Added!");

        addNewEmployee();
    })
}

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

        console.log("Intern Added!");

        addNewEmployee();
    })
}
addManager();