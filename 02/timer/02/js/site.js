'use strict'

var interval = null;
var textInput = null;
var textlength = 0;
function onStartRolling(){
    textInput = document.getElementById("rollingText");
    interval = setInterval(function () {
        rollingText()
    }, 300);
}

function rollingText() {
    let length = textInput.value.length;
    let text = textInput.value.substr(1, length -1) + textInput.value.substr(0,1);
    textInput.value = text;
}