/// <reference path="typings/globals/jquery/index.d.ts" />
'use strict'

var jq = jQuery.noConflict();

jq(document).ready(function () {

jq('#panel').slideDown(5000);
  jq('button').on(
    'click',
    function () {
        jq('#panel').stop();
    }
  );
});