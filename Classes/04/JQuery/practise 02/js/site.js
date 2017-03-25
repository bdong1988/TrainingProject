/// <reference path="typings/globals/jquery/index.d.ts" />
'use strict'

var jq = jQuery.noConflict();

jq(document).ready(function () {
  jq('td').click(function () {
    var index = jq(this).index();
    jq(this).parents('tr').hide();
    jq(this).parents('tr').parents('table').children().children('td:eq(index)')
  });
  
})