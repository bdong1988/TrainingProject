'use strict'


function validateData() {
  var bValide = checkUserName() && checkPassWord() && checkPostCode();
  if (!bValide) {
    alert("invalide information")
  }
  return bValide;
}

function checkUserName() {
  var userNameInput = document.getElementById('userName');
  var userNameSpan = document.getElementById('userNameSpan');

  var userName = userNameInput.value;
  var pattern  = /^[a-zA-Z].*$/;
  if (!pattern.test(userName)){
    userNameSpan.innerHTML='<font color="red">Invalide userName</font>';
    return false;
  }
  userNameSpan.innerHTML='';

  return true;
}

function checkPassWord() {
  var passWordInput = document.getElementById('passWord');
  var passWordSpan = document.getElementById('passWordSpan');

  var passWord = passWordInput.value;
  var pattern  = /^[a-zA-Z].*$/;
  if (!pattern.test(passWord)){
    passWordSpan.innerHTML='<font color="red">Invalide passWord</font>';
    return false;
  }
   passWordSpan.innerHTML='';

  return true;
}

function checkPostCode() {
  var postCodeInput = document.getElementById('postCode');
  var postCodeSpan = document.getElementById('postCodeSpan');

  var postCode = postCodeInput.value;
  var pattern = /^\d{6}$/;
  if(!pattern.test(postCode)){
    postCodeSpan.innerHTML = '<font color="red">Invalide postCode</font>';
    return false;
  }
   postCodeSpan.innerHTML='';

  return true;
}