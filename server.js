// global includes ////  
const inquirer = require('inquirer');
const fs = require('fs');
const http = require('http'); 


//constructors to include 

const {buildmanager} = require('./prompts/addmanager'); 
const {buildemployee} = require('./prompts/addemployee'); 
const manager = require('./library/manager');
const employee = require('./library/employee'); 


const dowork = async() => {
    const step1 = await buildmanager();
    const step2 = await buildemployee();  
    return [buildmanager,buildemployee]; 
}


dowork(); 