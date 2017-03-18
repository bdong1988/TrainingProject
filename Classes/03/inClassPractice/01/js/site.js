'use strict'

function showTopLayer()
{
  var hide_bg = document.getElementById('hide_bg');
  var hide_div = document.getElementById('hide_div');

  hide_bg.style.display = "block";
  hide_div.style.display = "block";
}

function hideTopLayer()
{
  var hide_bg = document.getElementById('hide_bg');
  var hide_div = document.getElementById('hide_div');

  hide_bg.style.display = "none";
  hide_div.style.display = "none";
}