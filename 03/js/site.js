'use strict'

var passWord = null;

function validateData() {
  var bValidate = checkUserName()
    && checkPassWord()
    && checkConfirmPassWord()
    && checkRealName()
    && checkbirthDate()
    && checkID()
    && checkPostCode()
    && checkEmail();

  if (!bValidate) {
    alert("Invalid Information");
  }

  return bValidate;
}


function checkUserName() {
  var userNameInput = document.getElementById('userName');
  var userNameSpan = document.getElementById('userNameSpan');

  var userName = userNameInput.value;
  var pattern = /^[a-zA-Z][a-zA-z0-9]*$/;
  if (!pattern.test(userName)) {
    userNameSpan.innerHTML = '<font color="red">户名为字母或数字组成，且以字母开头</font>';
    return false;
  }
  userNameSpan.innerHTML = '';

  return true;
}

function checkPassWord() {
  var passWordInput = document.getElementById('passWord');
  var passWordSpan = document.getElementById('passWordSpan');

  passWord = passWordInput.value;
  var pattern = /^.{8,}$/;
  if (!pattern.test(passWord)) {
    passWordSpan.innerHTML = '<font color="red">最小长度为8</font>';
    return false;
  }
  passWordSpan.innerHTML = '';

  return true;
}

function checkConfirmPassWord() {
  var confirmPassWordInput = document.getElementById('confirmPassWord');
  var confirmPassWordSpan = document.getElementById('confirmPassWordSpan');

  var confirmPassWord = confirmPassWordInput.value;
  if (confirmPassWord != passWord) {
    confirmPassWordSpan.innerHTML = '<font color="red">需要和密码相同</font>';
    return false;
  }

  confirmPassWordSpan.innerHTML = '';

  return true;
}

function checkRealName() {
  var realNameInputs = document.getElementById('realName');
  var readNameSpan = document.getElementById('realNameSpan');

  var realName = realNameInputs.value;
  if (!realName || 0 == realName.length) {
    readNameSpan.innerHTML = '<font color="red">需要填写真实姓名</font>';
    return false;
  }
  return true;
}

function checkbirthDate() {
  var birthDateInput = document.getElementById('birthDate');
  var birthDateSpan = document.getElementById('birthDateSpan');

  var birthDate = birthDateInput.value;
  if (!birthDate || 0 == birthDate.length) {
    birthDateSpan.innerHTML = '';
    return true;
  }

  var pattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
  if (!pattern.test(birthDate)) {
    birthDateSpan.innerHTML ='<font color="red">格式为yyyy-mm-dd</font>';
    return false;
  }
  birthDateSpan.innerHTML = '';
  return true;
}

function checkID() {
  var idInput = document.getElementById('id');
  var idSpan = document.getElementById('idSpan');

  var id = idInput.value;

  var pattern = /^\d{17}[0-9x]$/;
  if (!pattern.test(id)) {
    idSpan.innerHTML = '<font color="red">身份证号格式不符</font>';
    return false;
  }
  idSpan.innerHTML = '';
  return true;
}

function checkPostCode() {
  var postCodeInput = document.getElementById('postCode');
  var postCodeSpan = document.getElementById('postCodeSpan');

  var postCode = postCodeInput.value;
  if (!postCode || 0 == postCode.length) {
    postCodeSpan.innerHTML = '';
    return true;
  }

  var pattern = /^\d{6}$/;
  if (!pattern.test(postCode)) {
    postCodeSpan.innerHTML ='<font color="red">邮编格式不符</font>';
    return false;
  }
  postCodeSpan.innerHTML = '';
  return true;
}

function checkEmail() {
  var emailInput = document.getElementById('email');
  var emailSpan = document.getElementById('emailSpan');

  var email = emailInput.value;
  if (!email || 0 == email.length) {
    emailSpan.innerHTML = '';
    return true;
  }

  var pattern = /^\w+@\w+\.\S+$/;
  if (!pattern.test(email)) {
    emailSpan.innerHTML ='<font color="red">邮箱格式不符</font>';
    return false;
  }
  emailSpan.innerHTML = '';
  return true;
}