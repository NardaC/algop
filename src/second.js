const hideOrShow = (iddepregunt) => {
    const element = document.getElementById(iddepregunt);
    element.classList.toggle("blockPreg");
}

document.getElementById("preg1").addEventListener("click", () => { hideOrShow("cont-preg1") });

document.getElementById("preg2").addEventListener("click", () => { hideOrShow("cont-preg2") });
document.getElementById("preg3").addEventListener("click", () => { hideOrShow("cont-preg3") });
document.getElementById("preg4").addEventListener("click", () => { hideOrShow("cont-preg4") });
document.getElementById("preg5").addEventListener("click", () => { hideOrShow("cont-preg5") });
document.getElementById("preg6").addEventListener("click", () => { hideOrShow("cont-preg6") });
document.getElementById("preg7").addEventListener("click", () => { hideOrShow("cont-preg7") });
document.getElementById("preg8").addEventListener("click", () => { hideOrShow("cont-preg8") });
document.getElementById("preg9").addEventListener("click", () => { hideOrShow("cont-preg9") });
document.getElementById("preg10").addEventListener("click", () => { hideOrShow("cont-preg10") });
document.getElementById("preg11").addEventListener("click", () => { hideOrShow("cont-preg11") });
document.getElementById("preg12").addEventListener("click", () => { hideOrShow("cont-preg12") });
document.getElementById("preg13").addEventListener("click", () => { hideOrShow("cont-preg13") });
document.getElementById("preg14").addEventListener("click", () => { hideOrShow("cont-preg14") });
document.getElementById("preg15").addEventListener("click", () => { hideOrShow("cont-preg15") });
document.getElementById("preg16").addEventListener("click", () => { hideOrShow("cont-preg16") });
document.getElementById("preg17").addEventListener("click", () => { hideOrShow("cont-preg17") });
document.getElementById("preg18").addEventListener("click", () => { hideOrShow("cont-preg18") });
document.getElementById("preg19").addEventListener("click", () => { hideOrShow("cont-preg19") });

document.getElementById("preg20").addEventListener("click", () => { hideOrShow("cont-preg20") });
const elem = document.getElementById("LigoContainer");
const elem2 = document.getElementById("ligoPlusContainer");

document.getElementById("ligo").addEventListener("click", () => {


    elem.classList.remove("displayNone");
    elem2.classList.add("displayNone");
    elem.classList.add("container-preg");
});
document.getElementById("ligopaypal").addEventListener("click", () => {

    elem.classList.remove("container-preg");
    elem2.classList.remove("displayNone");
    elem.classList.add("displayNone");
    elem2.classList.add("container-preg");

});



document.getElementById("preg1b").addEventListener("click", () => { hideOrShow("cont-preg1") });

document.getElementById("preg2b").addEventListener("click", () => { hideOrShow("cont-preg2b") });
document.getElementById("preg3b").addEventListener("click", () => { hideOrShow("cont-preg3b") });
document.getElementById("preg4b").addEventListener("click", () => { hideOrShow("cont-preg4b") });
document.getElementById("preg5b").addEventListener("click", () => { hideOrShow("cont-preg5b") });
document.getElementById("preg6b").addEventListener("click", () => { hideOrShow("cont-preg6b") });
document.getElementById("preg7b").addEventListener("click", () => { hideOrShow("cont-preg7b") });
document.getElementById("preg8b").addEventListener("click", () => { hideOrShow("cont-preg8b") });
document.getElementById("preg9b").addEventListener("click", () => { hideOrShow("cont-preg9b") });