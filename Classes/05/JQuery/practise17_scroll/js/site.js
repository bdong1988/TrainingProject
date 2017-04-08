/// <reference path="typings/globals/jquery/index.d.ts" />

'use strict'

$(document).ready(function () {

  $('#scrollTopBtn').click(function () {
    alert($('div').scrollTop() + 'px');
  })

  $('#scrollLeftBtn').click(function () {
    alert($('div').scrollLeft() + 'px');
  })

  $('#getHeightBtn').click(function () {
    alert($('div').height() + 'px');
  })

  $('#setHeightBtn').click(function () {
    $('div').height('200px');
  })

});

