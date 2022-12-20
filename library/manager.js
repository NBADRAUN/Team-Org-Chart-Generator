
// gets the employee constructor 
const employee = require('./employee');

// extends manager from the employee constructor 
class manager extends employee {
    constructor (name, id, email, officeNumber) {
        // gets the objects from the employee constructor 
        super (name, id, email); 
        // gets the objects from the manager constructor 
        this.officeNumber = officeNumber; 
    }
    // updates role to manager 
    returnRole () {
        return "Manager";
    }
}

// make module available to other includes.  
module.exports = manager; 