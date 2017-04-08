/// <reference path="typings/globals/jquery/index.d.ts" />

'use strict'

var jq = jQuery.noConflict();

jq(document).ready(function () {
  jq("#btn1").click(function () {
    //alert('Href:' + jq("a").attr('href')); // display value
    //jq("a").attr('href', 'http://www.163.com'); //set one attribute value
    // jq('a').text('This is a link to 163');
    // jq('a').attr({
    //   'href' : 'http://www.163.com',
    //   'title' : '163 address',
    // })
    jq('a').attr('href', function (i, origValue) {
      return origValue + "/jquery";
    })
  })

});
