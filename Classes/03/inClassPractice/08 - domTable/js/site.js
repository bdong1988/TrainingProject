'use strict'

function createTable(){
  var div = document.getElementsByTagName('div')[0];
  var table = document.createElement('table');

  div.parentNode.appendChild(table);
  table.border = 1;
  table.style.width = '60%';

  for (var i = 0; i < 5; i++) {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    for (var j = 0; j < 3; j++) {
      var td = document.createElement('td');
      tr.appendChild(td);
      td.innerHTML = i + '_' + j;
    }
  }
}

function createTableEx(){
  var div = document.getElementsByTagName('div')[0];
  var table = document.createElement('table');

  div.parentNode.appendChild(table);
  table.border = 1;
  table.style.width = '60%';

  for (var i = 0; i < 5; i++) {
    var row = table.insertRow(i);
    var c = (i%2 == 0)?'silver' : 'red';
    row.style.backgroundColor = c;
    for (var j = 0; j < 3; j++) {
      var cell = row.insertCell(j)
      cell.innerHTML = i + '_' + j;
    }
  }
}