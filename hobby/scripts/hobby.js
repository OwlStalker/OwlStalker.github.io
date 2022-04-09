window.onload = function(){
    document
}

function tab(evt, tabNum){
    var tabContent;
    var tabButtons;

    tabContent = document.getElementsByClassName('tabContent');

    for(var i = 0; i < tabContent.lenth; i++){
        tabContent[i].style.display = 'none';
    }

    tabButtons = document.getElementsByClassName('tabButton');
    for(var i = 0; i < tabButtons.lenth; i++){
        tabButtons[i].className = tabButtons[i].className.replace('active', "");
    }

    document.getElementById(tabNum).style.display = "block";
    evt.currentTarget.className += "active";
}