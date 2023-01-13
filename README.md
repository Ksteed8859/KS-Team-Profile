# KS Team Profile Generator

## Description

This program allows for users to create a polished html containing information about the manager, engineers, and interns on their team by inputing data through the terminal. This gave student's a chance to develop on their skills using node and npm files to create prompts and gather user input, while also using previously learned skills such as HTML and CSS.

## Installation

This program requires three npms to properly run: inquirer, fs, and jest. To install them, clone the github repo and then type 'npm install' into the command line.

## Usage

After cloning the repository to your personal device and installing the required npms, type 'node index.js' into the terminal. The program will ask for a name, id, email, and office number of the team manager. After all prompts are answered, users will be presented with a menu to select additional team members or finish. Selecting additional members will prompt similar questions for each new member. Selecting finish will generate a new index.html file in the dist folder which users can open up to view the polished webpage containing the information gathered. Note that the index.html file will be overwritten each time the application is run.

## Test

To run the tests for this program, type "npm test" into the command line.