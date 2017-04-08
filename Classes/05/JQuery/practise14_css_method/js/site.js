/// <reference path="typings/globals/jquery/index.d.ts" />

'use strict'

$(document).ready(function () {

  $("#getOffsetBtn").click(function () {
    var x = $('p').offset().left;
    var y = $('p').offset().top;

    x = $('#leftSpan').text() + ':' + x;
    $('#leftSpan').text(x);

    y = $('#topSpan').text() + ':' + y;
    $('#topSpan').text(y);
  })

    $("#setOffsetBtn").click(function () {
    $('p').offset({
      'top' : 200,
      'left' : 200
    })
  })

});

