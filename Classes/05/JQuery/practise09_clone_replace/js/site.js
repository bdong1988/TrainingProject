/// <reference path="typings/globals/jquery/index.d.ts" />

'use strict'

$(document).ready(function () {

  $("#copyBtn").click(function () {
    $('ul li').clone(true).appendTo('ol');
  })

  $("#repaceBtn").click(function () {
   // $('p').replaceWith('<b>Here is the content after replacement</b>')
   $('<b>Here is the content after replacement</b>').replaceAll('p'); //replace must replace html tag.

  })

});

