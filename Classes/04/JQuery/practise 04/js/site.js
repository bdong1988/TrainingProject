/// <reference path="typings/globals/jquery/index.d.ts" />
'use strict'

var jq = jQuery.noConflict();

jq(document).ready(function () {

  jq('button').on(
    'click',
    function () {
      // jq('#div1').fadeToggle();
      // jq('#div2').fadeToggle('slow');
      // jq('#div3').fadeToggle(3000);


      jq('#div1').fadeTo('fast', 0.15);
      jq('#div2').fadeTo('slow', 0.4);
      jq('#div3').fadeTo('slow', 0.7);
    }
  );

});