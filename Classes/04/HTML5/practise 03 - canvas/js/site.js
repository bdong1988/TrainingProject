'use strict'

navigator.getUserMedia = Navigator.getUserMedia || navigator.webkitGetUserMedia || window.navigator.mozGetUserMedia;
window.URL = window.URL || window.webkitURL;


var video = document.getElementById('myVideo');

video.addEventListener('click', snapShort, false);


var c = document.getElementById('myCanvas');
var context = c.getContext('2d');

var localMediaStream = null;
navigator.getUserMedia(
  {video:true, audio:false},
  function (stream) {
    video.src = window.URL.createObjectURL(stream);
    localMediaStream = stream;
  },
  function (error) {
    console.log(error);
  }
);

function snapShort(){
  if (localMediaStream) {
    context.drawImage(video, 0, 0);
    document.getElementById('img').src = c.toDataURL('image/png');
  }
}