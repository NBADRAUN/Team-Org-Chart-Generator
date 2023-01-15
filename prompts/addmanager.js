//global includes ///// 
const inquirer = require("inquirer");
const Manager = require("../library/manager");
const Employee = require("../library/employee");
const fs = require("fs");


///function to build manager data //// 
const buildmanager = async() => {
  
  ///inquirer questions to ask /// 
  return inquirer   
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Who is the manager of this team?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the manager's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the manager's ID.",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter the manager's ID!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the manager's email.",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter an office number!");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((managerInput) => {
      const role = "Manager"; 
      const school = ""; 
      const github = ""; 

      /// creates the manager input object //// 
      const {name, id, email, officeNumber } = managerInput;
      const manager = new Manager(role, name, id, email, school, github,officeNumber);
        
      //writes the data from the array to a JSON /// 
      fs.writeFile("manager.json", JSON.stringify(managerInput,null,2), (err) => {
        if (err) throw err;
        console.log("Manager Data Added!");
      });
    });

}; 
module.exports = {buildmanager};
