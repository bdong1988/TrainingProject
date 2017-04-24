/// <reference path="typings/globals/jquery/index.d.ts" />

'use strict'

var jq = jQuery.noConflict();

jq(document).ready(function () {
  jq('.hide').click(function () {
    jq(this).parents('.ex').hide(1000,function() {
      jq(this).parents('.ex').show(1000);
    });
  });
  
})