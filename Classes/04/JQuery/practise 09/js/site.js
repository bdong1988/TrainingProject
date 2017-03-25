/// <reference path="typings/globals/jquery/index.d.ts" />
'use strict'

var jq = jQuery.noConflict();

jq(document).ready(function () {
  var srcs = ['img/bobby.jpg', 'img/controllers.jpg'];
  var index = 0;
  jq('button').on(
    'click', 
    function () {
      jq('img')[0].src = srcs[index++ % srcs.length];
    }
  );

  // jq('button').on(
  //   'click',
  //   function () {
  //     jq('img').slideUp()
  //   }
  // );

});