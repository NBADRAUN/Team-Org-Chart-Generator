
// get the employee constructor /////
const employee = require('./employee');

// extends manager from the employee constructor ///
class manager extends employee {
    constructor (name, role, id, email, school, github, officeNumber) {
        // gets the objects from the employee constructor //
        super (name, role, id, email,school, github); 
        // gets the objects from the manager constructor //
        this.officeNumber = officeNumber; 
        
}
}; 
// make module available to others///
module.exports = manager; 