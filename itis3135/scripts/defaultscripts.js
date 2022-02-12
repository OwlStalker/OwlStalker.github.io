function doubtMe(){
    alert("You doubted me");
}

var companyName = "Kravchuk Limited";


function displayGreeting(){
    var firstName = document.introForm.firstName.value;
    var feeling = document.introForm.feeling.value;

    alert(companyName + " welcomes you, " 
         + firstName + "! " + "We're glad you are " 
         + feeling + "!");
}

function claimFreeGiftCards(){
    var message = "Congratulations! You are now infected!"

    alert(message);
}

function weirdFace(){
    var message = "( ͡ಥ ͜ʖ ͡ಥ)";

    alert(message);
}

function bababooey(){
    var message = "bababooey";
    document.write(message + "<br>");
    setInterval("bababooey()", 50);
}




