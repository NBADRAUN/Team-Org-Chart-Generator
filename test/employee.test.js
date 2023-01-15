// using Employee constructor 
const Employee = require('../library/employee');

// creates an employee object  
test('Test 1: Creates a test employee object', () => {
    const employee = new Employee('Nick', "intern",1, 'nbadraun@gmail.com',"school","github"); //sample employee object
        //test that the data is string data
            expect(employee.name).toEqual(expect.any(String));
            expect(employee.role).toEqual(expect.any(String)); 
            expect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));
            expect(employee.school).toEqual(expect.any(String));
            expect(employee.github).toEqual(expect.any(String));
});

// gets employee Name
test('Test 2: Returns test employee name', () => {
    const employee = new Employee('Nick', "intern",1, 'nbadraun@gmail.com',"school","github");
        //test that the employee name is string data 
            expect(employee.returnName()).toEqual(expect.any(String));
});

// gets employee ID 
test('Test 3: Returns test employee ID', () => {
    const employee = new Employee('Nick', "intern",1, 'nbadraun@gmail.com',"school","github");
        //test that the employee ID is a number
            expect(employee.returnId()).toEqual(expect.any(Number));
});

// gets employee email
test('Test 4:  Returns test employee email', () => {
    const employee = new Employee('Nick', "intern",1, 'nbadraun@gmail.com',"school","github");
        //tests that the employee email is returned as a string 
            expect(employee.returnEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets employee role
test('Test 5:  Returns test employees role', () => {
    const employee = new Employee('Nick', "intern",1, 'nbadraun@gmail.com',"school","github");
        //test that the employee role is returned as "employee"
            expect(employee.returnRole()).toEqual(expect.stringContaining(employee.role.toString()));
}); 
// gets employee school
test('Test 6:  Returns test employees school', () => {
    const employee = new Employee('Nick', "intern",1, 'nbadraun@gmail.com',"school","github");
        //test that the employee role is returned as "employee"
            expect(employee.returnSchool()).toEqual(expect.stringContaining(employee.school.toString()));
}); 
// gets employee github
test('Test 7:  Returns test employees github', () => {
    const employee = new Employee('Nick', "intern",1, 'nbadraun@gmail.com',"school","github");
        //test that the employee role is returned as "employee"
            expect(employee.returnGithub()).toEqual(expect.stringContaining(employee.github.toString()));
}); 