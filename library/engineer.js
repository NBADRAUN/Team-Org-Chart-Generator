// constuctor 
const Employee = require("../library/employee");

// extending engineer to employee constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // tets the objects from the employee constructor 
        super (name, id, email);
        // gets the object from the engineer constructor 
        this.github = github; 
    }
    // Return constructor github
    returnGithub () {
        return this.github;
    }
     // Return constructor role 
    returnRole () {
        return "Engineer";
    }
}

// make module available to other includes 
module.exports = Engineer; 