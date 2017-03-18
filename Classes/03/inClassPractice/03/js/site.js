'use strict'


function validateData() {
  var bValide = checkUserName() && checkPassWord();
  if (!bValide) {
    alert("invalide information")
  }
  return bValide;
}

function checkUserName() {
  var userNameInput = document.getElementById('userName');
  var userNameSpan = document.getElementById('userNameSpan');

  var userName = userNameInput.value;
  var pattern = /^[a-zA-Z].*$/;
  if (!pattern.test(userName)) {
    userNameSpan.innerHTML = '<font color="red">Invalide userName</font>';
    return false;
  }

  return true;
}

function checkPassWord() {
  var passWordInput = document.getElementById('passWord');
  var passWordSpan = document.getElementById('passWordSpan');

  var passWord = passWordInput.value;
  var pattern = /^[a-zA-Z].*$/;
  if (!pattern.test(passWord)) {
    passWordSpan.innerHTML = '<font color="red">Invalide passWord</font>';
    return false;
  }

  return true;
}