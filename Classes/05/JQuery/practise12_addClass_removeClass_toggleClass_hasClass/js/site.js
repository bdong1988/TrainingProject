/// <reference path="typings/globals/jquery/index.d.ts" />

'use strict'

$(document).ready(function () {

  $("#addClassBtn").click(function () {
    $('h1,h2,p').addClass('class1 class2');
    $('div').addClass('class2');
  })

  $("#removeClassBtn").click(function () {
    $('h1,h2,p').removeClass('class1 class2')
    $('div').removeClass('class2');
  })

  $("#removeAllClassBtn").click(function () {
    $('h1,h2,p').removeClass()
    $('div').removeClass();
  })

  $("#toggleClassBtn").click(function () {
    $('h1,h2,p').toggleClass('class1 class2')
    $('div').toggleClass('class2');
  })

  $("#hasClassBtn").click(function () {
    alert($('h1,h2,p').hasClass('class1 class2'));
  })


});

