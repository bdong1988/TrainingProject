/// <reference path="typings/globals/jquery/index.d.ts" />

'use strict'

$(document).ready(function () {
  $('tr:odd').hide();
  $('tr:even').click(function () {
    var index = $(this).index();
    $('tr').eq(index + 1).toggle();
  })
});

