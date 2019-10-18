/*const xhr = new XMLHttpRequest()

const loadJson = () => {
    xhr.open('GET','burgers.json', true)
    xhr.onload = () => {
        
        if(xhr.status === 200){
            console.log(xhr.responseText)
            const person = JSON.parse(xhr.responseText)
             
            person.forEach(p => {        
            document.getElementById('burger-test').innerHTML = p;
            })
        }
            else if (xhr.status === 404) {
                console.log('File not found')
            }
        }
xhr.send()
}*/
       
/*fetch("./burgers.json")
.then(function(resp) {
    return resp.json();
})
.then(function(data){
    console.log(data.description);
});*/

const burgersBody = document.querySelector("#table-id > tbody");

function loadBurgers() {
    const request = new XMLHttpRequest();

    request.open("get", "burgers.json");
    request.onload = () => {
        try {
            const json = JSON.parse(request.responseText);
            populateTable(json)

        } catch (e) {
            console.warn("could not load the burgers.json file.")
        } 
    };
    request.send();
}

function populateTable(json) {

    // clears out the existing table data
    /*while (burgersBody.firstChild) {
        burgersBody.removeChild(burgersBody.firstChild);
    }*/

    //populate the table with json file.

    json.forEach((row) => {
        const tr = document.createElement("tr");
        
        row.forEach((cell) => {
            const td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td)
        })

        burgersBody.appendChild(tr);
    });
}

document.addEventListener("DOMContentLoaded", () => { loadBurgers(); })



/* LOADING THE JSON FILE INTO THE 2ND TABLE */



const sidesBody = document.querySelector("#table2-id > tbody");

function loadSides() {
    const request2 = new XMLHttpRequest();

    request2.open("GET", "sides.json");
    request2.onload = () => {
        try {
            const json = JSON.parse(request2.responseText);
            populateTableSides(json)

        } catch (e) {
            console.warn("could not load the sides.json file.")
        } 
    };
    request2.send();
}

function populateTableSides(json) {

    // clears out the existing table data
    /*while (burgersBody.firstChild) {
        burgersBody.removeChild(burgersBody.firstChild);
    }*/

    //populate the table with json file.

    json.forEach((row) => {
        const tr = document.createElement("tr");
        
        row.forEach((cell) => {
            const td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td)
        })

        sidesBody.appendChild(tr);
    });
}

document.addEventListener("DOMContentLoaded", () => { loadSides(); })




/* OBTAINED HELP FROM https://www.youtube.com/watch?v=12tjh_6xL2M */


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
           var openDropdown = dropdowns[i];
           if (open.classList.contains('show')) {
               openDropdown.classList.remove('show');
           }        
        }     
    }
}
















function nameOutput() {
        var nameVal = document.getElementById('fname-text').value;
        document.getElementById('output-name').innerHTML = ('Thank you for your message ') + nameVal + ('.');
    }

function lastModified() {
    var commentVal = document.lastModified;
    document.getElementById('output-last-modified').innerHTML = ('Comment Date: ') + commentVal;
}

function reviewMessage() {
    var reviewName = document.getElementById('name-review').value;
    document.getElementById('new-review').innerHTML = ('Thank you for your review ') + reviewName + ('.');
}
document.getElementById('submit-button').addEventListener('click', nameOutput);
document.getElementById('submit-button').addEventListener('click', lastModified);
document.getElementById('submit-button-review').addEventListener('click', reviewMessage);




/*var burgerObj = JSON.parse('{ "burger", "description", "image"}');*/

/*document.getElementById("burger-test").innerHTML = burgerObj;

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("burger-test").innerHTML = myObj.description;
  }
};
xmlhttp.open("GET", 'burgers.json', true);
xmlhttp.send();
*/