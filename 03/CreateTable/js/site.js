'use strict'

function OnCreateTable() {
  var table = document.getElementById('tab');
  if (table != null) {
    return;
  }

  var div = document.getElementById('tabContainer');
  var table = document.createElement('table');
  table.id = 'tab';
  div.appendChild(table);
  table.border = 1;
  table.style.width = '60%';

  for (var i = 0; i < 5; i++) {
    var row = table.insertRow(i);
    for (var j = 0; j < 4; j++) {
      var cell = row.insertCell(j)
      cell.innerHTML = i + '' + j;
    }
  }
}

function OnInsertRow() {
  var table = document.getElementById('tab');
  if (!table) {
    return;
  }

  var index = prompt("Please enter index to insert the new row", "5");
  var row = table.insertRow(index);
  for (var j = 0; j < 4; j++) {
    var cell = row.insertCell(j)
    cell.innerHTML = 'new' + index + '' + j;
  }
}

function OnInsertColumn() {
  var table = document.getElementById('tab');
  if (!table) {
    return;
  }

  var index = prompt("Please enter index to insert the new Column", "4");
  for (var i = 0; i < table.rows.length; i++) {
    var row = table.rows[i];
    var cell = row.insertCell(index);
    cell.innerHTML = 'new' + i + '' + index;
  }
}

function OnRemoveRow() {
  var table = document.getElementById('tab');
  if (!table) {
    return;
  }

  var index = prompt("Please enter index to remvoe the row", "4");
  table.deleteRow(index);
}

function OnRemoveColumn() {
  var table = document.getElementById('tab');
  if (!table) {
    return;
  }

  var index = prompt("Please enter index to remvoe the rolumn", "3");
  for (var i = 0; i < table.rows.length; i++) {
    table.rows[i].deleteCell(index);
  }
}