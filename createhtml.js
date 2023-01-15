//global variables /// 
const cardsection = document.getElementById('cardsection');



///loop data /// 
function createHTML() {


    ////get manager data from JSON then build Manager data/card/////
    fetch('./manager.json')
        .then(res => res.json())
        .then(managerdata => {

            ///create the manager card/////
            var card = document.createElement('div');

            //adds the manager card to the page and adds the HTML text/////
            document.getElementById('mgrcardsection').appendChild(card);
            card.classList.add('m-1');
            card.classList.add('p-2');
            card.classList.add('text-white');
            card.classList.add('bg-primary');
            card.classList.add('mx-auto');
            card.style.cssText += 'background-color:#0275d8;color:white; text-align: left;width: 250px; height: 200px;margin: 10px';

            card.innerHTML =
                managerdata.name + "<br>" +
                "Role: Manager" + "<br>" +
                "Employee ID: " + managerdata.id + "<br>" +
                "Office Number: " + managerdata.officeNumber + "<br>" +
                "Email Address: " + managerdata.email
        });

    ////get manager data from JSON then build Manager data/card/////
    fetch('./employees.json')
        .then(res => res.json())
        .then(employeedata => {

            for (var i = 0; i < employeedata.length; i += 1) {


               ///create the employee card/////
                var card = document.createElement('div');
                //adds the manager card to the page and adds the HTML text/////
                document.getElementById('emplcardsection').appendChild(card);
                card.classList.add('m-1');
                card.classList.add('p-2');
                card.classList.add('text-white');
                card.classList.add('bg-success');
                card.classList.add('mx-auto');
                card.style.cssText += 'background-color:#0275d8;color:white; text-align: left;width: 250px; height: 200px;margin: 10px';

                card.innerHTML =
                    employeedata[i].name + "<br>" +
                    "Role: " + employeedata[i].role + "<br>" +
                    "Employee ID: " + employeedata[i].id + "<br>" +
                    "Email Address: " + employeedata[i].email + "<br>" +
                    "GibHub Name: " + employeedata[i].github + "<br>" +
                    "School: " + employeedata[i].school + "<br>"

            }

        });


}

createHTML();

