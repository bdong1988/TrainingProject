'use strict'

function onCheckedChange(){
    let mainCheck = document.getElementById("numMain");
    let elements = document.getElementsByName("num")
    let bChecked = mainCheck.checked
    for (let i = 0; i < elements.length; i++) {
        elements[i].checked = bChecked;
    }   
    
}