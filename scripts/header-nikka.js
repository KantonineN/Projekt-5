/* <!-- Programmeret af Nikka --> */

/* Load SVG's */
$(document).ready(function () {
    $("#svg-content").load("injects/svg.html");
});
$(document).ready(function () {
    $("#svg-content--subfolder").load("../injects/svg.html");
});

/* Load header for large devices */
$(document).ready(function () {
    $("#header-content-xl").load("injects/header-xl.html");
});
$(document).ready(function () {
    $("#header-content-xl--studie").load("../injects/header-xl--studie.html");
});
$(document).ready(function () {
    $("#header-content-xl--projekt").load("../injects/header-xl--projekt.html");
});

/* Load header for devices */
$(document).ready(function () {
    $("#header-content").load("injects/header.html");
});
$(document).ready(function () {
    $("#header-content--studie").load("../injects/header--studie.html");
});
$(document).ready(function () {
    $("#header-content--projekt").load("../injects/header--projekt.html");
});