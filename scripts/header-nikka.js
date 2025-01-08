/* Load SVG's */
$(document).ready(function () {
    $("#svg-content").load("injects/svg.html");
});
$(document).ready(function () {
    $("#svg-content").load("../injects/svg.html");
});

/* Load header for large devices */
$(document).ready(function () {
    $("#header-content-xl").load("injects/header-xl.html");
});
$(document).ready(function () {
    $("#header-content-xl").load("../injects/header-xl--sub.html");
});

/* Load header for devices */
$(document).ready(function () {
    $("#header-content").load("injects/header.html");
});
$(document).ready(function () {
    $("#header-content").load("../injects/header--sub.html");
});