'use strict'

var gXmlhttpRequest = null;
function checkName(){
    gXmlhttpRequest = new XMLHttpRequest();
    gXmlhttpRequest.onreadystatechange = function () {
        if (null == gXmlhttpRequest || 4 != gXmlhttpRequest.readyState || 200 != gXmlhttpRequest.status) {
            return;
        }
        dispayResult(gXmlhttpRequest.responseText);
    }

    gXmlhttpRequest.open('GET', GetRequest());
    gXmlhttpRequest.send();
}

function GetRequest(){
  var uname = document.getElementsByName('uname')[0];
  var url = "js_uname.jsp?uname="+uname.value;

  return url;
}

function dispayResult(result){
  var unameSpan = document.getElementById('uname_span');
  if(result == "true"){
    unameSpan.innerHTML = "Invalid";
  }
  else{
    unameSpan.innerHTML = "valid";
  }
}