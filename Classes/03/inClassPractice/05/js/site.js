'use strict'

function testLi01(){
  var li01 = document.getElementById('li_01');
  if (li01.classList.contains('classA')){
    li01.classList.remove('classA');
    li01.classList.add('classB');
  }
  else if (li01.classList.contains('classB')){
     li01.classList.add('classA');
     li01.classList.remove('classB');
  }
}

function testLi02(){
  var li02 = document.getElementById('li_02');
  li02.classList.add('classB');
}



