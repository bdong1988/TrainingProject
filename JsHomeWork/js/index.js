'use strict'

var interval = null;

var cityArray = [
  ["None"],
  ["Ha erbin", "QiQi Haer", "Shuang cheng"],
  ["Change Chun", "Gongzhu Ling", "Si Ping", "Bai Shan"],
  ["Shen Yang", "Da Lian"]
];

function provinceChange(selection) {
  var citySelection = document.getElementById('city');
  citySelection.length = 0;

  for (var i in cityArray[selection.value]) {
    citySelection.options[citySelection.length] = new Option(cityArray[selection.value][i], i);
  }
}

function onPageLoad(){
  interval = setInterval(displayDate, 1000);
}

function displayDate()
{
    let currentData = new Date();
    var result = document.getElementById('currentTime');
    var month = currentData.getMonth()+1
    result.value = currentData.getFullYear() + "年" + month + "月" + currentData.getDate() + "日" + currentData.getHours() + "时" + currentData.getMinutes() + "分"+ currentData.getSeconds() + "秒";
}

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