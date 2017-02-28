'use strict'
function festival(name, year, month, day) {
    this.name = name;
    this.date = new Date(year, month, day)

    this.IsEalierThanDate = function (rDate) {
        return this.date < rDate;
    }

    this.getNext = function () {
        return new festival(this.name, this.date.getFullYear() + 1, this.date.getMonth(), this.date.getDate());
    }
}

function onPageLoad() {

    var result = document.getElementById("result");
    result.value = "";
    
    var currentDate = new Date();
    var festivalList = [
        new festival("元旦", currentDate.getFullYear(), 0, 1),
        new festival("情人节", currentDate.getFullYear(), 1, 14),
        new festival("劳动节", currentDate.getFullYear(), 4, 1),
        new festival("儿童节", currentDate.getFullYear(), 5, 1),
        new festival("国庆节", currentDate.getFullYear(), 9, 1),
        new festival("圣诞节", currentDate.getFullYear(), 11, 24)
    ];

    for (var i in festivalList) {
        if (festivalList[i].IsEalierThanDate(currentDate)) {
            festivalList[i] = festivalList[i].getNext();
        }
    }

    var selection = document.getElementById("festivalSelection");
    for (var i in festivalList) {
        selection.options[selection.length] = new Option(festivalList[i].name, festivalList[i].date);
    }
}

function OnCalcualteClick() {
    var selection = document.getElementById("festivalSelection");
    var index = selection.selectedIndex;
    var festivalDate = new Date(selection.options[index].value);
    var currentDate = new Date();
    var difDate = festivalDate.getTime() - currentDate.getTime();

    var days = Math.floor(difDate / (24 * 3600 * 1000))


    var leave1 = difDate % (24 * 3600 * 1000)
    var hours = Math.floor(leave1 / (3600 * 1000))

    var leave2 = leave1 % (3600 * 1000)
    var minutes = Math.floor(leave2 / (60 * 1000))

    var leave3 = leave2 % (60 * 1000)
    var seconds = Math.round(leave3 / 1000)

    var result = document.getElementById("result");

    result.value = days + "天" + hours + "小时" + minutes + "分" + seconds + "秒";
}


