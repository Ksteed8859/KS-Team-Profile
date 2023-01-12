
//Generate employee cards for all entered employees
const generateCards = (team) => {
    //Create card for Manager Class
    const managerCard = (manager) => {
        return `
        <div class="card">
            <div id="top">
                <h3 id="name">${manager.name}</h3>
                <i class="fa-solid fa-mug-hot"></i>
                <h3 id="role">Manager</h3>
            </div>
            <div class="container">
                <p id="id">ID: ${manager.id}</p>
                <p id="email"> <a href="mailto: ${manager.email}">${manager.email}</a></p>
                <p id="other">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    `;
    }

    //Create card for Engineer Class
    const engineerCard = (engineer) => {
        return `
        <div class="card">
            <div id="top">
                <h3 id="name">${engineer.name}</h3>
                <i class="fa-solid fa-glasses"></i>
                <h3 id="role">Engineer</h3>
            </div>
            <div class="container">
                <p id="id">ID: ${engineer.id}</p>
                <p id="email"> <a href="mailto: ${engineer.email}">${engineer.email}</a></p>
                <p id="other">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    `;
    }

    //Create card for Intern Class
    const internCard = (intern) => {
        return `
        <div class="card">
            <div id="top">
                <h3 id="name">${intern.name}</h3>
                <i class="fa-solid fa-user-graduate"></i>
                <h3 id="role">Intern</h3>
            </div>
            <div class="container">
                <p id="id">ID: ${intern.id}</p>
                <p id="email"> <a href= "mailto: ${intern.email}">${intern.email}</a></p>
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
            <script src="https://kit.fontawesome.com/b12753f3df.js" crossorigin="anonymous"></script>
        </head>

        <body>
            <header>
                <h1>My Team</h1>
            </header>

            <main>
                <div class="allCards">
                    ${generateCards(team)}
                </div>
            </main>

            <script src="../index.js"></script>
        </body>
    </html>  
    `;
}

module.exports = generatePage;