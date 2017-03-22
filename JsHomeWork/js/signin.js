'use strict'

function validateData() {
  var bValide = checkUserName() && checkPassWord();
  if (!bValide) {
    alert("invalide information")
  }
  return bValide;
}

function onSignUp(){
  window.location.href = "signup.html";
}

function checkUserName() {
  var userNameInput = document.getElementById('userName');
  var userNameSpan = document.getElementById('userNameSpan');

  var userName = userNameInput.value;
  if(userName == "tom"){
    userNameSpan.innerHTML = '';
    return true;
  }
  userNameSpan.innerHTML = '<font color="red">Invalide username</font>';
  return false;
}

function checkPassWord() {
  var passWordInput = document.getElementById('passWord');
  var passWordSpan = document.getElementById('passWordSpan');

  var passWord = passWordInput.value;
  if(passWord == "12345678"){
    assWordSpan.innerHTML = '';
    return true;
  }
  userNameSpan.innerHTML = '<font color="red">Invalide password</font>';
  return false;
}