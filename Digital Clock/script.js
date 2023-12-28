function showtime() {
    var date = new Date();
    var hour = date.getHours(); //0-23(hours)
    var minute = date.getMinutes(); //0-59(minutes)
    var second = date.getSeconds(); //0-59(seconds)
    var session = "PM";
    if (hour == 0) {
        hour = 12;
    }
    // if (h = 12) {
    //     hour = hour - 12;
    //     session = "AM";

    // }
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;
    var time = hour + ":" + minute + ":" + second + " " + session;
    document.getElementById("MyclockDisplay").innerText = time;
    document.getElementById("MyclockDisplay").textContent = time;
    setTimeout(showtime, 1000);

}
showtime();