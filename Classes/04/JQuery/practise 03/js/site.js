/// <reference path="typings/globals/jquery/index.d.ts" />
'use strict'

var jq = jQuery.noConflict();

jq(document).ready(function () {
  var colors = ['green', 'red', 'blue'];
  var index = 0;
  jq('button').on(
    'click', 
    function () {
      jq('body').css('background-color', colors[index++ % colors.length])
    }
  );

});