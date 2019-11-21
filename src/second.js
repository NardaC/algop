// const algo = document.querySelectorAll("div.plusOrMin");
// algo.forEach(function(userItem) {
//     userItem.innerHTML = `     <i class="fas fa-plus p_5"></i>`;
// });

const algo = document.querySelectorAll("div.plusOrMin");
algo.forEach(function(userItem) {
    userItem.classList.add("onlyPlus");
});

const hideOrShow = (iddepregunt, idplus) => {
    const element = document.getElementById(iddepregunt);
    element.classList.toggle("blockPreg");
    const plusornot = document.getElementById(idplus);
    plusornot.classList.toggle("onlyPlus");
    plusornot.classList.toggle("onlyMinus");
}
hideOrShow("cont-preg1", "sig1");
hideOrShow("cont-preg9b", "sig9b");

document.getElementById("preg1").addEventListener("click", () => { hideOrShow("cont-preg1", "sig1") });
document.getElementById("preg2").addEventListener("click", () => { hideOrShow("cont-preg2", "sig2") });
document.getElementById("preg3").addEventListener("click", () => { hideOrShow("cont-preg3", "sig3") });
document.getElementById("preg4").addEventListener("click", () => { hideOrShow("cont-preg4", "sig4") });
document.getElementById("preg5").addEventListener("click", () => { hideOrShow("cont-preg5", "sig5") });
document.getElementById("preg6").addEventListener("click", () => { hideOrShow("cont-preg6", "sig6") });
document.getElementById("preg7").addEventListener("click", () => { hideOrShow("cont-preg7", "sig7") });
document.getElementById("preg8").addEventListener("click", () => { hideOrShow("cont-preg8", "sig8") });
document.getElementById("preg9").addEventListener("click", () => { hideOrShow("cont-preg9", "sig9") });
document.getElementById("preg10").addEventListener("click", () => { hideOrShow("cont-preg10", "sig10") });
document.getElementById("preg11").addEventListener("click", () => { hideOrShow("cont-preg11", "sig11") });
document.getElementById("preg12").addEventListener("click", () => { hideOrShow("cont-preg12", "sig12") });
document.getElementById("preg13").addEventListener("click", () => { hideOrShow("cont-preg13", "sig13") });
document.getElementById("preg14").addEventListener("click", () => { hideOrShow("cont-preg14", "sig14") });
document.getElementById("preg15").addEventListener("click", () => { hideOrShow("cont-preg15", "sig15") });
document.getElementById("preg16").addEventListener("click", () => { hideOrShow("cont-preg16", "sig16") });
document.getElementById("preg17").addEventListener("click", () => { hideOrShow("cont-preg17", "sig17") });
document.getElementById("preg18").addEventListener("click", () => { hideOrShow("cont-preg18", "sig18") });
document.getElementById("preg19").addEventListener("click", () => { hideOrShow("cont-preg19", "sig19") });
document.getElementById("preg20").addEventListener("click", () => { hideOrShow("cont-preg20", "sig20") });
const elem = document.getElementById("LigoContainer");
const elem2 = document.getElementById("ligoPlusContainer");
const btn1 = document.getElementById("ligo");
const btn2 = document.getElementById("ligopaypal");

btn2.classList.add("boton-azul");
btn1.classList.add("boton-blanco");


document.getElementById("ligo").addEventListener("click", () => {
    btn1.classList.add("boton-blanco");
    btn2.classList.add("boton-azul");
    btn1.classList.remove("boton-azul");
    elem.classList.remove("displayNone");
    elem2.classList.add("displayNone");
    elem.classList.add("container-preg");
});
document.getElementById("ligopaypal").addEventListener("click", () => {
    btn1.classList.add("boton-azul");
    btn2.classList.add("boton-blanco");
    btn2.classList.remove("boton-azul");
    elem.classList.remove("container-preg");
    elem2.classList.remove("displayNone");
    elem.classList.add("displayNone");
    elem2.classList.add("container-preg");

});

document.getElementById("preg1b").addEventListener("click", () => { hideOrShow("cont-preg1b", "sig1b") });
document.getElementById("preg2b").addEventListener("click", () => { hideOrShow("cont-preg2b", "sig2b") });
document.getElementById("preg3b").addEventListener("click", () => { hideOrShow("cont-preg3b", "sig3b") });
document.getElementById("preg4b").addEventListener("click", () => { hideOrShow("cont-preg4b", "sig4b") });
document.getElementById("preg5b").addEventListener("click", () => { hideOrShow("cont-preg5b", "sig5b") });
document.getElementById("preg6b").addEventListener("click", () => { hideOrShow("cont-preg6b", "sig6b") });
document.getElementById("preg7b").addEventListener("click", () => { hideOrShow("cont-preg7b", "sig7b") });
document.getElementById("preg8b").addEventListener("click", () => { hideOrShow("cont-preg8b", "sig8b") });
document.getElementById("preg9b").addEventListener("click", () => { hideOrShow("cont-preg9b", "sig9b") });