const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Enter  employee ID (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter  email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your office number (Required)',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Please enter  office number!');
                    return false;
                }
            }
        
        },
        {
            type: 'list',
            name: 'menu',
            message: 'Please select which option you would like to continue with:',
            choices: ['add an engineer', 'add an intern', 'finish building my team']
        }
    ]);
};
const promptEmployee = employeeData => {
    console.log(`
    ===============
    Add a New Employee
    ===============
    `);
// If there's no 'employees' array property, create one
if (!employeeData.employees) {
    employeeData.employees = [];
}
return inquirer.prompt([
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the name of engineer? (Required)',
        validate: engineerName => {
            if (engineerName) {
                return true;
            } else {
                console.log('Please enter the name of engineer!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'Enter  employee ID (Required)',
        validate: employeeId => {
            if (employeeId) {
                return true;
            } else {
                console.log('Please enter employee ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address (Required)',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter  email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter  Github username. (Required)',
        validate: githubUsername => {
            if (githubUsername) {
                return true;
            } else {
                console.log('Please enter Github username!');
                return false;
            }
        }
    }
]).then(employeeData => {
    employeeData.employees.push(employeeData);
    if (employeeData.confirmAddEmployee) {
        return promptProject(employeeData);
    } else {
        return employeeData;
    }
});
};
const promptIntern = internData => {
console.log(`
===============
Add a New Intern
===============
`);
if (!internData.interns) {
    internData.interns = [];
}

return inquirer.prompt([
    {
        type: 'input',
        name: 'internName',
        message: 'What is the name of the intern? (Required)',
        validate: internName => {
            if (internName) {
                return true;
            } else {
                console.log('Please enter the name of the intern!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'Enter employee ID (Required)',
        validate: employeeId => {
            if (employeeId) {
                return true;
            } else {
                console.log('Please enter  employee ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your Github username. (Required)',
        validate: githubUsername => {
            if (githubUsername) {
                return true;
            } else {
                console.log('Please enter your Github username!');
                return false;
            }
        }
    }
]).then(internData => {
    internData.interns.push(internData);
    if (internData.confirmAddIntern) {
        return promptIntern(internData);
    } else {
        return internData;
    }
});
};

promptManager()
.then(promptEmployee)
.then(employeeData => {
    return generatePage(employeeData);
})
.then(promptInter)
.then(internData => {
    return generatePage(internData);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
})
.then(copyFileResponse => {
    console.log(copyFileResponse);
})
.catch(err => {
    console.log(err);
});