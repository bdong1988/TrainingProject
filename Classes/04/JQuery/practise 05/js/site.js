/// <reference path="typings/globals/jquery/index.d.ts" />
'use strict'

var jq = jQuery.noConflict();

jq(document).ready(function () {

  jq('button').on(
    'click',
    function () {
      jq('div').animate({
        left:'200px',
        height: '150px',
        width: '150px',
        opacity: '0.5'
      });
    }
  );
});