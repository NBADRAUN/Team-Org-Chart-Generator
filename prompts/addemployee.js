const inquirer = require('inquirer');
const employee = require('../library/employee');
const fs = require('fs'); 

const employeeArray = [];


const buildemployee = () => {
    inquirer.prompt([{
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter an employee's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the employee's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }; 
        function getAnswers() {
            return inquirer.prompt(questions).then((answers) => {
              if (answers.is_finished) {
                return answers;
              } else {
                return getAnswers();
              }
            });
          }
          
          getAnswers()
            .then(console.log)
            .catch((error) => {});
    ])
    .then(employeeData => {
        // data for employee types 
        const { 
            name, 
            id, 
            email, 
            role, 
            github, 
            school, 
            confirmAddEmployee 
        } = employeeData; 
        

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            const intern = new Intern (name, id, email, school);

            console.log(Intern);
        }

        teamArray.push(employee); 
        var newData = JSON.stringify(employeeData);

        fs.writeFile('employees.json', newData, err =>{
            if (err) throw err;
            console.log('new data added');

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    });
    }); 


    
}; 
module.exports = {buildemployee}; 
