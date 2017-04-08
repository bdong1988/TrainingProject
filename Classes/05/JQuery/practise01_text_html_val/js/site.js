/// <reference path="typings/globals/jquery/index.d.ts" />

'use strict'

var jq = jQuery.noConflict();

jq(document).ready(function () {
  jq("#btn1").click(function () {
    //alert("Contents:" + jq("#text").text());
    jq("#text").text("Hello World");
  })

  jq("#btn2").click(function () {
    //alert("HTML:" + jq("#text").html());
    jq("#text").html("<i>China</i>")
  })

  jq("#btn3").click(function () {
    //alert("form value:" + jq("#uname").val());
    jq("#uname").val("Ricky");
  })
});
