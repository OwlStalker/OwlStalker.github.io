const people = [];
const salaries = [];

window.onload = function(){
    document.getElementById("addSalary").onclick = addSalary;
    document.getElementById("displayResults").onclick = displayResults;
    document.getElementById("displaySalary").onclick = displaySalary;
    
}

function addSalary(){
    people.push(document.getElementById("employee").value);
    salaries.push(document.getElementById("salary").value)
}

function displayResults(){
    document.getElementById("results").innerHTML = "<h3>Results:</h3><p>The Average Salary is: $" + averageSalary() + "<br><p>The Highest Salary is: $" + highestSalary();
}

function displaySalary(){
    var table = "<h3>Table Salaries</h3><table><tr><th>Employee</th><th>Salary</th></tr>";

    for(let i = 0; i < people.length; i++){
        table += "<tr><td>" + people[i] + "</td><td> $" + salaries[i] + "</td></tr>";
    }

    table += "</table>";

    document.getElementById("table_results").innerHTML = table;
}

function averageSalary(){
    var total = 0;
    var averageSalary = 0;

    for(let i = 0; i < salaries.length; i++){
        total += parseFloat(salaries[i]);
    }

    averageSalary = total / (salaries.length);

    return averageSalary;
}

function highestSalary(){

    var highest = 0;

    for(let i = 0; i < salaries.length; i++){

        if(salaries[i] > highest){
            highest = parseFloat(salaries[i]);
        }

    }

    return highest;
}

