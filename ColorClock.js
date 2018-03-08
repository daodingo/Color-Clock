function time() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    h = twelveHourClock(h);
    h = zeroCheck(h);
    m = zeroCheck(m);
    s = zeroCheck(s);

    var h24 = today.getHours();
    
    var r = (h24 * 11);
    var g = (m * 4);
    var b = (s * 4);
    
    document.getElementById("display").innerHTML = h + ":" + m + ":" + s;
    var selfCall = setTimeout(time, 500); //calls a function after a specified number of milliseconds
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("display2").innerHTML = "RGB(" + r + "," + g + "," + b +")";
}

function zeroCheck(v) {
    if(v < 10)
        v = "0" + v;
    return v;
}

function twelveHourClock(v) { //turns it into 12 hour time
    if(v > 12)
        v = v - 12;
    return v;
}