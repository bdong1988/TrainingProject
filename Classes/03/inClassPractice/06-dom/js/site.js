'use strict'

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