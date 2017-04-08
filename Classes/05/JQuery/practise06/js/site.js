/// <reference path="typings/globals/jquery/index.d.ts" />

'use strict'

$(document).ready(function () {

  $("#addBtn").click(function () {
    var username = '<td>' + $('#uname').val() + '</td>';
    var password = '<td>' + $('#password').val() + '</td>';
    var btn  = $('<button>Delete</button>');
    btn.click(function () {
      $(this).parent().parent().remove();
    });
    var operation = $('<td></td>');
    operation.append(btn)

    var $newRow = $('<tr>' + username + password + '</tr>')
    $newRow.append(operation)
    $('#usertable').append($newRow);
  })
});

