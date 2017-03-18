'use strict'

function test(){
  var div = document.getElementsByTagName('div')[0];

  var p = document.createElement('p');
  div.appendChild(p);

  var t = document.createTextNode('new content');

  p.appendChild(t);
}