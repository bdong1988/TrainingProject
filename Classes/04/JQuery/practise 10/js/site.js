/// <reference path="typings/globals/jquery/index.d.ts" />
'use strict'

var jq = jQuery.noConflict();

jq(document).ready(function () {
  var srcs = ['img/automazione_big.jpg', 'img/controllers.jpg'];
  var index = 0;
  
  jq('button').on(
    'click',
    function () 
    {
      var imgSource = "url(" + srcs[index++ % srcs.length] + ")";
      jq('div').animate(
        { opacity: 0 },
        'fast',
        function () 
        {
          jq(this).css({ 'background-image': imgSource }).animate({ opacity: 1 });
        }
      );
    }
  );
})