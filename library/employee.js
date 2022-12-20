// constructor 
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }
    // Return constructor name
    returnName () {
        return this.name;
    }
    // Return constructor id 
    returnId () {
        return this.id;
    }   
    // Return constructor email
    returnEmail () {
        return this.email;
    }
    // Return constructor role
    returnRole () {
        return 'Employee'; 
    }
};

// make module available to other includes
module.exports = Employee; 