// using Employee constructor 
const Manager = require('../library/manager'); 

// creates a manager object  
test('Test 1: Creates a test manager object', () => {
    const manager = new Manager('Nick', 1, 'nbadraun@gmail.com',1622); //sample manager object 
            expect(manager.officeNumber).toEqual(expect.any(Number));          
});

// gets managers office number
test('Test 2:  Returns test managers office number', () => {
    const manager = new Manager('Nick', 1, 'nbadraun@gmail.com',1622); //sample manager object 
        //test that the managers office number is a number
            expect(manager.officeNumber).toEqual(expect.any(Number)); 
            
}); 


// gets employee role
test('Test 3:  Returns test manaagers role', () => {
    const manager = new Manager('Nick', 1, 'nbadraun@gmail.com',1622);
        //test that the employee role is returned as "Manager"
            expect(manager.returnRole()).toEqual("Manager");
}); 
