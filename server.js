// node modules to include 
const inquirer = require('inquirer');
const fs = require('fs');
const http = require('http'); 


//constructors to include 


const {buildmanager} = require('./prompts/addmanager'); 
const {buildemployee} = require('./prompts/addemployee'); 
// const {createHTML} = require('./test'); 
const manager = require('./library/manager');
const employee = require('./library/employee'); 


const dowork = async() => {
    const step1 = await buildmanager();
    const step2 = await buildemployee();  
    // const step3 = await createHTML(); 


    return [buildmanager,buildemployee]; 
}


dowork(); 