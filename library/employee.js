// constructor 
class Employee {
    constructor (role, name, id, email,school,github) {
        this.name = name;
        this.role = role; 
        this.id = id;
        this.email = email;
        this.school = school; 
        this.github = github; 
    }
    // Return constructor name
    returnName () {
        return this.name;
    }
    returnRole () {
        return this.role; 
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
    returnSchool () {
        return this.school; 
    }
    returnGithub () {
        return this.github; 
    }
};

// make module available to other includes
module.exports = Employee; 