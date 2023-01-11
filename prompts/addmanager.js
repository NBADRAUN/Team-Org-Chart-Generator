const inquirer = require('inquirer');
const Manager = require('../library/manager');
const fs = require('fs'); 

const employeesArray = [];

const buildmanager = () =>{
inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter the manager's ID!")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter an email!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter an office number!')
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const {
            name,
            id,
            email,
            officeNumber
        } = managerInput;
        const manager = new Manager(name, id, email, officeNumber);

        employeesArray.push(manager);
        console.log(employeesArray);
        console.log(manager.name);
        console.log(manager.id);
        console.log(manager.email);
        console.log(manager.officeNumber);


        var newData = JSON.stringify(managerInput); 

            fs.writeFile('manager.json', newData, err=> {
                if (err) throw err;
                console.log('new data added'); 
                
            });             
        })

    }; 

    
    

module.exports = {buildmanager}; 
