// using intern constructor 
const Intern = require('../library/intern');  

// creates an employee object  
test('Test 1: Creates a test intern object', () => {
    const intern = new Intern('Nick', 1, 'nbadraun@gmail.com','Denver University'); //sample intern object 
            expect(intern.school).toEqual(expect.any(String));          
});

// gets engineer github
test('Test 2:  Returns test interns school', () => {
    const intern = new Intern('Nick', 1, 'nbadraun@gmail.com','Denver University'); //sample intern object 
        //test that the intern's schoool is returned as a string
            expect(intern.returnSchool()).toEqual(expect.any(String)); 
            
}); 


// gets employee role
test('Test 3:  Returns test interns role', () => {
    const intern = new Intern('Nick', 1, 'nbadraun@gmail.com','Denver Univerity');
        //test that the employee role is returned as "Intern"
            expect(intern.returnRole()).toEqual("Intern");
}); 
