// employee constructor //
class Employee {
    constructor (role, name, id, email,school,github) {
        this.name = name;
        this.role = role; 
        this.id = id;
        this.email = email;
        this.school = school; 
        this.github = github; 
    }
    // Return constructor name//
    returnName () {
        return this.name;
    }
    // Return constructor role//
    returnRole () {
        return this.role; 
    }
    // Return constructor id //
    returnId () {
        return this.id;
    }   
    // Return constructor email//
    returnEmail () {
        return this.email;
    }
    // Return constructor school//
    returnSchool () {
        return this.school; 
    }
    // Return constructor github//
    returnGithub () {
        return this.github; 
    }
};

// make module available //
module.exports = Employee; 