/// <reference path="typings/globals/jquery/index.d.ts" />

'use strict'

$(document).ready(function () {

  $("#display").click(function () {
    $('<p>new contents </p>').insertAfter('span');
  })

});

