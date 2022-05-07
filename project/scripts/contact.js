function contactUs(){
    let firstname = document.getElementById("fname").value;
    let inquiry = document.getElementById("typeInquiry").value;

    confirm(firstname, inquiry);
}

function confirm(firstname, inquiry){
    alert("Thank you " + firstname + "! Your " + inquiry + " inquiry was received.");
}