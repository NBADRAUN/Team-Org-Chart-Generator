const http = require('http'); 
const fs = require('fs'); 


function createHTML(request, response) {
    response.writeHead(200,{'Content-Type' : 'text/html'}); 
     fs.readFile('index.html', null, function(err,data) {
        if (err) {
            response.writeHead(404); 
            response.write('file not found'); 
        } else {
        response.write(data); 
        response.write(`
        <section class="card-container d-flex flex-wrap flex-row">
      <!-- Manager 1 -->
      <div class="card m-5 text-white text-center bg-primary">
        <div class="card-header">
          <h3>Nick Badraun</h3>
          <h4>Manager</h4>
          <div class="card-body">
            <p class="EmpID">Employee ID: 1</p>
            <p class="Email">Email: Nbadraun@gmail.com</p>
            <p class="Office">Office Number: 5543</p>
          </div>
        </div>
      </div>
      </section>
            
        `)
                     
        }
        response.end(); 
    }); 
}

http.createServer(createHTML).listen(8000); 
console.log(`Example app listening at http://localhost:8000`);

