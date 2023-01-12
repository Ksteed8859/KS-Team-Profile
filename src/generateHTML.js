
//Generate employee cards for all entered employees
const generateCards = (team) => {
    //Create card for Manager Class
    const managerCard = (manager) => {
        return `
        <div class="card">
            <div id="header">
                <h4 id="name">${manager.name}</h4>
                <p id="role">Manager</p>
            </div>
            <div class="container">
                <p id="id">ID: ${manager.id}</p>
                <p id="email">${manager.email}</p>
                <p id="other">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    `;
    }

    //Create card for Engineer Class
    const engineerCard = (engineer) => {
        return `
        <div class="card">
            <div id="header">
                <h4 id="name">${engineer.name}</h4>
                <p id="role">Engineer</p>
            </div>
            <div class="container">
                <p id="id">ID: ${engineer.id}</p>
                <p id="email">${engineer.email}</p>
                <p id="other">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    `;
    }

    //Create card for Intern Class
    const internCard = (intern) => {
        return `
        <div class="card">
            <div id="header">
                <h4 id="name">${intern.name}</h4>
                <p id="role">Intern</p>
            </div>
            <div class="container">
                <p id="id">ID: ${intern.id}</p>
                <p id="email">${intern.email}</p>
                <p id="other">School: ${intern.school}</p>
            </div>
        </div>
    `;
    }

    cardsArray = [];
    cardsArray.push(team.filter(employee => employee.getRole() === "Manager").map(manager => managerCard(manager)));
    cardsArray.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => engineerCard(engineer)));
    cardsArray.push(team.filter(employee => employee.getRole() === "Intern").map(intern => internCard(intern)));
    
   return cardsArray.join("");
    
}
const generatePage = (team) => {
    return `
    <!DOCTYPE html>
    <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>KS Team Profile Generator</title>
            <link rel="stylesheet" href="../dist/style.css"/>
        </head>

        <body>
            <header>
                <h1>My Team</h1>
            </header>

            <main>
                <div class="container">
                    ${generateCards(team)}
                </div>
            </main>

            <script src="../index.js"></script>
        </body>
    </html>  
    `;
}

module.exports = generatePage;