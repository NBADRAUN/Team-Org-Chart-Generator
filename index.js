// node modules to include 
const inquirer = require('inquirer');
const fs = require('fs');
const http = require('http'); 


//constructors to include 


const {buildmanager} = require('./prompts/buildteam'); 
const manager = require('./library/manager');
const hi = () => {console.log("hi");}
const hello = () => {console.log("hello");}

const dowork = async() => {
    const step1 = await buildmanager(); 
    const step2 = await hi(); 
    const step3 = await hello(); 

    return [buildmanager,hi,hello]; 
}


dowork(); 