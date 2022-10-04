"use strict";
let menuative = false;
$(document).on("click", ".menu-toggle", function () {
    menuative = !menuative;

    if (menuative == true) {
        $(this).parent().attr("class", "menu-mobile off");
        $(this).children().attr("src", "./src/assets/icons/list.svg");
        $('html').css("overflow", "initial");
    } else {
        $(this).parent().attr("class", "menu-mobile on");
        $(this).children().attr("src", "./src/assets/icons/x-lg.svg");
        $('html').css("overflow", "hidden");
    }
});