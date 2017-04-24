/// <reference path="typings/globals/jquery/index.d.ts" />

'use strict'

$(document).ready(
  function () {
    $('#myModal').on('show.bs.modal', function (e) {
      alert("show event");
    })

    $('#myModal').on('shown.bs.modal', function (e) {
      alert("shown event");
    })
    $('#myModal').on('hide.bs.modal', function (e) {
      alert("hide event");
    })

    $('#myModal').on('hidden.bs.modal', function (e) {
      alert("hidden event");
    })
  }
);