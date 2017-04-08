$(function(){
	$('.notes_img').mobilynotes({ 
    	init: 'rotate', // specify how to show your notes (available options: rotate [does not work properly in IE] or plain) 
    	positionMultiplier: 5, 
    	title: null, // get the title from selector 
    	showList: true, // creates unordered list (class: listNotes) with anchors to your notes 
    	autoplay: true, // true/false 
    	interval: 4000 // autoplay interval (valid only when autoplay is enabled) 
	});
});
