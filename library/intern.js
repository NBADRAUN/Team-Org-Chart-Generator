// constructor 
const employee = require('./employee');

// extend intern from employee constuctor 
class intern extends employee  {
    constructor (name, id, email, school) {
        //gets the objects from the employee constructor 
        super (name, id, email); 
        // gets the object from the engineer constructor 
        this.school = school; 
    }
    // Return constructor school 
    returnSchool () {
        return this.school;
    }
    // updates constructor role 
    returnRole () {
        return "Intern";
    }
}

// Make module available to other includes 
module.exports = intern; 