/// <reference path="typings/globals/jquery/index.d.ts" />

'use strict'

$(document).ready(
  function () {
      $('[data-toggle="popover"]').popover();
      $('[data-toggle="tooltip"]').tooltip();     
  }
);