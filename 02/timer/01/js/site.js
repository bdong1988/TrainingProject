'use strict'

var interval = null;

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

    let result = document.getElementById("result");
    result.value = "";

    let currentDate = new Date();
    let festivalList = [
        new festival("元旦", currentDate.getFullYear(), 0, 1),
        new festival("情人节", currentDate.getFullYear(), 1, 14),
        new festival("劳动节", currentDate.getFullYear(), 4, 1),
        new festival("儿童节", currentDate.getFullYear(), 5, 1),
        new festival("国庆节", currentDate.getFullYear(), 9, 1),
        new festival("圣诞节", currentDate.getFullYear(), 11, 25)
    ];

    for (let i in festivalList) {
        if (festivalList[i].IsEalierThanDate(currentDate)) {
            festivalList[i] = festivalList[i].getNext();
        }
    }

    let selection = document.getElementById("festivalSelection");
    for (let i in festivalList) {
        selection.options[selection.length] = new Option(festivalList[i].name, festivalList[i].date);
    }
}

function displayDiff(festivalDate) {
    let currentData = new Date();
    let difDate = festivalDate.getTime() - currentData.getTime();

    let days = Math.floor(difDate / (24 * 3600 * 1000))


    let leave1 = difDate % (24 * 3600 * 1000)
    let hours = Math.floor(leave1 / (3600 * 1000))

    let leave2 = leave1 % (3600 * 1000)
    let minutes = Math.floor(leave2 / (60 * 1000))

    let leave3 = leave2 % (60 * 1000)
    let seconds = Math.round(leave3 / 1000)

    let result = document.getElementById("result");

    result.value = days + "天" + hours + "小时" + minutes + "分" + seconds + "秒";
}




function OnCalcualteClick() {
    if (null != interval) {
        clearInterval(interval);
        interval = null;
    }

    let selection = document.getElementById("festivalSelection");
    let index = selection.selectedIndex;
    let festivalDate = new Date(selection.options[index].value);

    displayDiff(festivalDate);
    if (null == interval) {
        interval = setInterval(function () {
            displayDiff(festivalDate);
        }, 1000)
    }

}

function OnSelectChg() {
    if (null != interval) {
        clearInterval(interval);
        interval = null;
    }


}

