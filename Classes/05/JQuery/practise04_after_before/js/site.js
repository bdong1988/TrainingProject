/// <reference path="typings/globals/jquery/index.d.ts" />

'use strict'

$(document).ready(function () {
  $("#btn1").click(function () {
    $('p').after('<p>new item</p>');
  })

  $("#btn2").click(function () {
    $('p').before('<p>new item</p>');
  })
});
