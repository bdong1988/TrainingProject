'use strict'

function onCaculateClick(){
    let elements = document.getElementsByName("num");

    let result = 0;
    let bChecked = false;
    for(let i = 0; i< elements.length; i++){
        if (elements[i].checked) {
            result += Number(elements[i].value);
            bChecked = true;
        }
    }
    if(false == bChecked){
        alert("None of the checkboxes are checked.")
        return;
    }

    var resultInput = document.getElementById("result");
    resultInput.value = result;
}