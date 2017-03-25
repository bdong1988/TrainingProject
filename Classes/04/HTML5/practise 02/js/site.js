'use strict'

function onRangeChange(){
  var range = document.getElementById('range');
  var outPut = document.getElementById('output');
  outPut.value = range.value;
  
}

function showDetail(){
  var imageFile = document.getElementById('images');
  var fileList = imageFile.files;
  for (var index = 0; index < fileList.length; index++) {
    var file = fileList[index];
    var div = document.createElement('div');
    div.innerHTML = "the " + index + "'s file name : " + file.name + ". file type is " + file.type + "file size is" + file.size;
    document.body.appendChild(div); 
  }
}

document.getElementById('images').addEventListener('change', function(){
  var fileReader = new FileReader();
  fileReader.onloadend = function (e) {
    document.getElementById('img').src  = e.target.result;
  }

  fileReader.readAsDataURL(this.files[0]);
}, false);
