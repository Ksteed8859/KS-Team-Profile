//Create card for Manager Class
const createManager = function (Manager) {
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
const createEngineer = function (Engineer) {
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
const createIntern = function (Intern) {
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