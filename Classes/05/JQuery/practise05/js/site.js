/// <reference path="typings/globals/jquery/index.d.ts" />

'use strict'

$(document).ready(function () {

  $("#addBtn").click(function () {
    event.preventDefault();
    $('#sel').append('<option>'+ $('#nation').val() + '</option>');
  })

});
