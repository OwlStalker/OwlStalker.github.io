var people = ["Joe", "Alex", "Ener"];
var salaries = [69000, 75000, 105000];

function addSalary(){
    
    var personEntry = document.getElementById('employee').value;
    var salaryEntry = document.getElementById('salary').value;

    if(salaryEntry < 1 || salaryEntry > 300000){
        alert("Please enter a valid salary");
        salaryEntry = "";
    }
    else
        people[people.length] = personEntry;
        salaries[salaries.length] = salaryEntry;
    
}

function displayResults(){

    var salarySum = 0;
    var max;

    for(var i = 0; i < salaries.length; i++){
        salarySum += salaries[i];
    }
    
    var average = parseInt(salarySum / 3);

    max = parseInt(Math.max(salaries[0],salaries[1],salaries[2]));

    document.getElementById('results').innerHTML = "<h2>Results</h2>" + 
                                                   "<p>The average salary is: " + average + "K</p>" +
                                                   "<p>The max salary is: " + max + "K</p>";
}

function displaySalary(){

    var table = "<tr><th>Salaries</th> <th>Names</th></tr>";

    for(var i = 0; i < salaries.length; i++){
        table += "<tr><td>" + salaries[i] + "</td><td>" + person[i] + "</td></tr>";
    }

    document.getElementById('table_results').innerHTML = "<h2> Table </h2>" + table;
}