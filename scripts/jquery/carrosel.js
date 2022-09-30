"use strict";
const containerimage = $(".carrosel__container");
const imgs = $(".carrosel__image");
const carroseldestaque = $(".carrosel__destaque");
const carroseldescricao = $(".carrosel__descricao");
const carroselsobre = $('.carrosel');
const animais = [
    {
        destaque: "Onça pintada",
        descricao: "Maior felídeo das Américas, ocorre por todo o Brasil, ocupando florestas densas da Amazônia e Mata Atlântica."
    },
    {
        destaque: "TUCANO TOCO",
        descricao: "Popularmente conhecido como tucanuçu, tucanaçu, tucano-grande e tucano-boi"
    },
    {
        destaque: "IGUANA",
        descricao: 'Popularmente conhecida como iguana-comum, iguano, sinimbu, "camaleão", cambaleão, senembi, senembu ou tijibu.'
    },
    {
        destaque: "Urubu rei",
        descricao: "É uma espécie cada vez mais rara. Possui envergadura que varia de 170 a 198 cm e peso de 3 a 5 kg."
    },
]

let options = $(".options");
$(options[0]).addClass("optioncurrent");
let tmp;

$(document).ready(function () {
    startTmp();
})

let idx = 0;
function ChangeInfoCarrosel(value) {
    clearInterval(tmp);
    if (value == null) {
        idx++;
    } else {
        idx = value;
    }
    // change color text in toucan and vulture 
    if (idx == 1 || idx == 3) {
        $('.carrosel').css("color", "#8ed5e2");
    } else {
        $('.carrosel').css("color", "inherit");
    }

    if (idx > $(".carrosel__image").length - 1) {
        idx = 0;
    }
    // change color ball for position image in carrosel
    $(options).removeClass("optioncurrent");
    $(options[idx]).addClass("optioncurrent");

    $(".carrosel__container").css("transform", `translateX(${-idx * 100}%)`);
    $(".carrosel__destaque").html(animais[idx].destaque);
    $(".carrosel__descricao").html(animais[idx].descricao);
    startTmp();
}

$(document).on('click', '.options', function () {
    let carrosel = $(this).index();
    ChangeInfoCarrosel(carrosel);
});

function startTmp() {
    tmp = setInterval(ChangeInfoCarrosel, 5000);
}