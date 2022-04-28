const Manager = require("../lib/Manager");

const generateTeam = (team) => {
    console.log(team);
  
    const html = [];

    const generateManager = manager => {
        console.log(manager);
        let managerHtml = ` <div class="card employee-card">
           <p>ManagerInfo</p>
        </div>
        `;
        html.push(managerHtml);
    }

   
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
    }

    return html.join('');
}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<body>
     ${generateTeam(team)}
</body>
</html>
    `;
}