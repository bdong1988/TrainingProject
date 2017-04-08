/// <reference path="typings/globals/jquery/index.d.ts" />

'use strict'

$(document).ready(function () {

  $("#getCssBtn").click(function () {
    alert($('p').css('background-color'));
  })

  $("#getMutiClassBtn").click(function () {
    var propertyName = ['background-color', 'border'];
    var cssValues = $('p').css(propertyName);
    var values = '';
    for (var index = 0; index < propertyName.length; index++) {
      values += propertyName[index] + ':' + cssValues[propertyName[index]] + '\n';
    }
    alert(values);
  })

  $("#setCssBtn").click(function () {
    $('p').css('background-color', 'blue');
    $('p').css({
      'background-color': 'red',
      'border': '20px solid green'
    })
  })

  $("#callbackCssBtn").click(function () {
    $('p').css('border', function (index, currentValue) {
      if ($(this).closest('#row1').length > 0) {
        return 'thick solid red';
      }
      else if(index%2){
        return 'thick double red';
      }
    });
  })


});

