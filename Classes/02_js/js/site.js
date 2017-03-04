'use strict'

var win = null;
function OpenUrl(urlName) {
    win = window.open('', 'test', 'width=500, height=300, menubars=no, statusbars=no');
}

function ResizeBy() {
    if (null == win) {
        return;
    }

    win.resizeBy(100, 100);
}

function ResizeTo() {
    if (null == win) {
        return;
    }

    win.resizeTo(100, 100);
}

function MoveBy() {
    if (null == win) {
        return;
    }

    win.moveBy(100, 100);
}

function MoveTo() {
    if (null == win) {
        return;
    }

    win.moveTo(100, 100);
}


