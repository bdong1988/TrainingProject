/// <reference path="typings/globals/jquery/index.d.ts" />

'use strict'

$(document).ready(function () {

  $("#wrapBtn").click(function () {
    //$('p').wrap('<div></div>');
    //$('p').wrapAll('<div></div>')
    $('p').wrapInner('<b></b>');
  })


});

