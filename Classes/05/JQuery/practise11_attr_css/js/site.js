/// <reference path="typings/globals/jquery/index.d.ts" />

'use strict'

$(document).ready(function () {

  $("#btn").click(function () {
    var p1 = $('p').attr('class');
    alert(p1);
  })

  $("#setStyleBtn").click(function () {
    $('p').attr('class', 'class2');
  })


});

