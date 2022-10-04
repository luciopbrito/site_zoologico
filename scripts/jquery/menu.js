"use strict";
let menuative = false;
$(document).on("click", ".menu-toggle", function () {
    menuative = !menuative;

    if (menuative == true) {
        $(this).attr("class", "menu-toggle on");
        $(this).children().attr("src", "/src/assets/icons/list.svg");
    } else {
        $(this).attr("class", "menu-toggle off");
        $(this).children().attr("src", "/src/assets/icons/x-lg.svg");
    }
});