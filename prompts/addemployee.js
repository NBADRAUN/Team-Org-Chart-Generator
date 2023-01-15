//// global includes //// 
const inquirer = require("inquirer");
const Employee = require("../library/employee");
const fs = require("fs");

///creates an array to capture the employee data after each loop///
const teamArray = [];

//function to gather employee data /////
const buildemployee = async () => {
  console.log(`
    Adding employees`);

  /// inquirer questions to ask ///////
  return inquirer
    .prompt([{
        type: "list",
        name: "role",
        message: "Please choose your employee's role",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What's the name of the employee?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter an employee's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the employee's ID.",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter the employee's ID!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the employee's email.",
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
        name: "school",
        message: "Please enter the school the employee went to",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a school name!");
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Please enter the employee's github username.",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the employee's github username!");
          }
        },
      },

      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add more team members?",
        default: false,
      },
    ])
    .then((employeeData) => {
      // creates the employee object //// 
      const {
        name,
        id,
        email,
        role,
        github,
        school,
        confirmAddEmployee
      } = employeeData;
      employee = new Employee(role, name, id, email, github, school);

      ///pushes the data to the team array to prepare for the loop///
      teamArray.push(employee);

      /// if statement to evaluate if a loop is needed ////
      //if confirmaddemployee from inquiror is Yes, loop, else, move on///
      if (confirmAddEmployee) {
        return buildemployee(teamArray);
      } else {
        console.log("Employee Data Added");

        ///stringifys the team array data ////
        var newData = JSON.stringify(teamArray);
        ///writes the stringified team array data to the employee JSON file //// 
        fs.writeFile("employees.json", JSON.stringify(teamArray, null, 2), (err) => {
          if (err) throw err;
          console.log("Employee Data Added!");
        });
        return teamArray;
      }
    });
};

module.exports = {
  buildemployee
};