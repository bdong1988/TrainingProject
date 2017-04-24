$(function(){
    $('.radio_box input').click(function(){
      radioClick($(this));
    });
})

function radioClick(_this){
  $('.radio_box').removeClass('checked');
    _this.parents('.radio_box').addClass('checked');
}