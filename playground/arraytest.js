array = []; 



pushpop(); 

function pushpop(){
    array.push('nick'); 
    console.log(array); 
    array.pop('nick'); 
    console.log(array); 
}


module.exports = {pushpop}; 