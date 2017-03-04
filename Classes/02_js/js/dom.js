
function Test(){
    var names = document.getElementsByName("uname");
    var ids = document.getElementById("uname");

    console.log("names.length=" +names.length);
    console.log("ids.length = ", ids.value.length);

    for (var index in names){
        console.log("name.value = "+names[index].value);
    }

    console.log("ids.value = " + ids.value);
    ids.value = "Jack";
}