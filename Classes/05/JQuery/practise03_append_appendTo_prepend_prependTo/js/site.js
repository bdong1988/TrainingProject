/// <reference path="typings/globals/jquery/index.d.ts" />

'use strict'

$(document).ready(function () {
  $("#btn1").click(function () {
    var li1 = $('<li>1</li>');
    $('#list').append(li1);
  })

  $("#btn2").click(function () {
    $('<b>Good</b>').appendTo('p');
  })

  $("#btn3").click(function () {
    $('#list').prepend('<li>First</li>');
  })

  $("#btn4").click(function () {
    $('<li>First</li>').prependTo('ul');
  })
});
