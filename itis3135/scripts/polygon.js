/**The work submitted here is my work - I have not copied and pasted code into these pages. 
 * I have gotten help from no one. and these sites: (list the sites). 
 * - Sign with First M. Last and include the date and time. 
 * David Kravchuk, 2/20/2022 5:02pm.
 */

function getNumberOfSides(){
    
    var numSides = parseInt(prompt("Digital Koala wants to tell you the name of a shape" + //Ask for a number
                                   "based on the number you enter on range of 1-10"));

    numSides = Math.abs(numSides);

    var validatedNumSides = validateEntry(numSides);    //Send the number to validation method and assign to another variable
    var results = getShape(validatedNumSides);      //Send the validated number to get the type of polygon and assign it to the results variable

    alert(results);     //Create a popup to show the type of polygon.
}

function validateEntry(numSides){       //Method to validate whether the entry is valid

    while(numSides < -10 || numSides > 10 || isNaN(numSides)){    //Loop will execute until every condition is met
        numSides = parseInt(prompt("Digital Koala states that is an invalid entry, TRY AGAIN!"));
    }

    return Math.abs(numSides);
}

function getShape(validatedNumSides){       //Method to determine the type of polygon 

    var shapeName;

    if(validatedNumSides == 0)
        shapeName = "Not a shape";
    if(validatedNumSides == 1)
        shapeName = "Henagon";
    if(validatedNumSides == 2)
        shapeName = "Digon";
    if(validatedNumSides == 3)
        shapeName = "Trigon";
    if(validatedNumSides == 4)
        shapeName = "Tetragon";
    if(validatedNumSides == 5)
        shapeName = "Pentagon";
    if(validatedNumSides == 6)
        shapeName = "Hexagon";
    if(validatedNumSides == 7)
        shapeName = "Heptagon";
    if(validatedNumSides == 8)
        shapeName = "Octagon";
    if(validatedNumSides == 9)
        shapeName = "Enneagon";
    if(validatedNumSides == 10)
        shapeName = "Decagon";
    
    return shapeName;   //Return the polygon type back
}

getNumberOfSides();