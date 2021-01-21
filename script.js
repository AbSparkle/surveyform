// create variables and cache them
var referYes = document.getElementById('radio1');

var referNo = document.getElementById('radio2');

var yes = document.getElementById('yes');

var yesParent = yes.parentNode;

var no = document.getElementById('no');

var noParent = no.parentNode;
// set event listener on radio buttons
referYes.onchange = changeClass;

referNo.onchange = changeClass;
// function to remove class and show conditional part of form
function changeClass() {
    yesParent.className = 'hidden';  //resets classname to hidden
    noParent.className = 'hidden'    //resets classname to hidden

    var value = this.value;

    if(value == 'yes'){
        yesParent.toggleAttribute('class');
    } else if(value == 'no'){
        noParent.removeAttribute('class');
    }
}