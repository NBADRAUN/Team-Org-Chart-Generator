// using Employee constructor 
const Engineer = require('../library/engineer'); 

// creates an employee object  
test('Test 1: Creates a test engineer object', () => {
    const engineer = new Engineer('Nick', 1, 'nbadraun@gmail.com','NBADRAUN'); //sample engineer object 
            expect(engineer.github).toEqual(expect.any(String));          
});

// gets engineer github
test('Test 2:  Returns test engineers github', () => {
    const engineer = new Engineer('Nick', 1, 'nbadraun@gmail.com','NBADRAUN'); //sample engineer object 
        //test that the engineer's github is returned as a string
            expect(engineer.returnGithub()).toEqual(expect.any(String)); 
            
}); 


// gets employee role
test('Test 3:  Returns test engineers role', () => {
    const engineer = new Engineer('Nick', 1, 'nbadraun@gmail.com','NBADRAUN');
        //test that the employee role is returned as "engineer"
            expect(engineer.returnRole()).toEqual("Engineer");
}); 
