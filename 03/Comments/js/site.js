'use strict'

function OnSubmitComments() {
  Date.prototype.Format  =  function (fmt) { //author: meizz   
      var  o  =  {
          "M+" :  this.getMonth() + 1,                  
          "d+" :  this.getDate(),                    
          "h+" :  this.getHours(),                     
          "m+" :  this.getMinutes(),                   
          "s+" :  this.getSeconds(),                   
          "q+" :  Math.floor((this.getMonth() + 3) / 3),    
          "S"  :  this.getMilliseconds()                
      };
      if (/(y+)/.test(fmt))
          fmt = fmt.replace(RegExp.$1,  (this.getFullYear() + "").substr(4  -  RegExp.$1.length));
      for (var  k  in  o)
          if (new  RegExp("(" +  k  + ")").test(fmt))
          fmt  =  fmt.replace(RegExp.$1,  (RegExp.$1.length == 1)  ?  (o[k])  :  (("00" +  o[k]).substr(("" +  o[k]).length)));
      return  fmt;
  }

  var table = document.getElementById('tab');
  var row = table.insertRow(table.rows.length);
  var commentsArea = document.getElementById('newComments');

  var comments = commentsArea.value;
  var time = new Date().Format("yyyy-MM-dd hh:mm:ss");

  var cell = row.insertCell(0);
  cell.innerHTML = comments;

  cell = row.insertCell(1);
  cell.innerHTML = time;

}