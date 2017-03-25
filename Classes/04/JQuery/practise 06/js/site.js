/// <reference path="typings/globals/jquery/index.d.ts" />
'use strict'

var jq = jQuery.noConflict();

jq(document).ready(function () {

  jq('button').on(
    'click',
    function () {
      var div = jq('div');
      div.animate({height:'300px', opacity:'0.6'},'slow');
      div.css('background-color:red');
      div.animate({width:'300px', opacity:'0.2'},'slow');
      div.css('background-color:blue');
      div.animate({height:'100px', opacity:'0.4'},'slow');
      div.css('background-color:green');
      div.animate({width:'100px', opacity:'0.9'},'slow');
      div.css('background-color:yellow');
    }
  );
});