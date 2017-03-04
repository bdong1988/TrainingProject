
var timeout = null;
var interval = null;

function SayHello(){
    console.log("Hello");
}

function StartTimer() {
    SayHello();
    timeout = setTimeout("StartTimer()", 2000);
}


function ClearTimer() {
    clearTimeout(timeout);
}


function StartInterval() {
    interval = setInterval("SayHello()", 2000);
}


function ClearInterval() {
    clearInterval(interval);
}