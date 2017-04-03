/// <reference path="typings/globals/jquery/index.d.ts" />
'use strict'

function check(){
  if (!document.getElementById('bookName').checkValidity()) {
    document.getElementById('bookName').setCustomValidity("book name must be filled");
  }
}