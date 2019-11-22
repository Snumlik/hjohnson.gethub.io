function isFriday() {
    var d = new Date();
    var n = d.getDay();
    if (n != 5) {
        document.getElementsByClassName("banner")[0].style.display = "none";
    }
}