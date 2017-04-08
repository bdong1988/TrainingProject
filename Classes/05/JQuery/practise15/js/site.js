/// <reference path="typings/globals/jquery/index.d.ts" />

'use strict'

$(document).ready(function () {
  $('table tr:odd').addClass('oddClass');
  $('table tr:even').addClass('evenClass');

  $('table tr').mouseover(function () {
    $(this).addClass('class1');
  })
  
    $('table tr').mouseleave(function () {
    $(this).removeClass('class1');
  })
});

