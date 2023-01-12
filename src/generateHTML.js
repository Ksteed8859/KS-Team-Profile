
//Create card for Manager Class
const managerCard = (Manager) => {
    return `
    <div class="card">
        <div id="header">
            <h4 id="name">${Manager.name}</h4>
            <p id="role">Manager</p>
        </div>
        <div class="container">
            <p id="id">ID: ${Manager.id}</p>
            <p id="email">${Manager.email}</p>
            <p id="other">Office Number: ${Manager.officeNumber}</p>
        </div>
    </div>
`;
}

//Create card for Engineer Class
const engineerCard = (Engineer) => {
    return `
    <div class="card">
        <div id="header">
            <h4 id="name">${Engineer.name}</h4>
            <p id="role">Engineer</p>
        </div>
        <div class="container">
            <p id="id">ID: ${Engineer.id}</p>
            <p id="email">${Engineer.email}</p>
            <p id="other">Github: <a href="https://github.com/${Engineer.github}>${Engineer.github}</a></p>
        </div>
    </div>
`;
}

//Create card for Intern Class
const internCard = (Intern) => {
    return `
    <div class="card">
        <div id="header">
            <h4 id="name">${Intern.name}</h4>
            <p id="role">Intern</p>
        </div>
        <div class="container">
            <p id="id">ID: ${Intern.id}</p>
            <p id="email">${Intern.email}</p>
            <p id="other">School: ${Intern.school}</p>
        </div>
    </div>
`;
}

generateHTML = () => {
    cardsArray = [];
    
    for (let i = 0; i < cardsArray.length; i++) {
        const employee = cardsArray[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const createManager = managerCard(employee);
            cardsArray.push(createManager);
        } else if (role === 'Engineer') {
            const createEngineer = engineerCard(employee);
            cardsArray.push(createEngineer);
        } else if (role === 'Intern') {
            const createIntern = internCard(employee);
            cardsArray.push(createIntern);
        }  
    }

    const totalCards = cardsArray.join('');

    const generateTeam = generatePage(totalCards);
    return generateTeam;
}

const generatePage = function (totalCards) {
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
                    ${totalCards}
                </div>
            </main>

            <script src="../index.js"></script>
        </body>
    </html>  
    `;
}

module.exports = generateHTML;