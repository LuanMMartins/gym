let gotenksimg = document.getElementById("resultadoimg")
const gotenksmagro = "/img/gotenksmagro.png"
const gotenks = "/img/gotenks.png"
const gotenksgordo = "/img/gotenksGordo.png"
const majimboo = "/img/inchadoBoo.png"
function calcularImc() {
    const peso = parseFloat(document.getElementById("weight").value);
    const altura = parseFloat(document.getElementById("height").value);
    let corpo
    const imc = peso / (altura/100 * altura/100);
    switch (true) {
        case (imc < 18.5):
            corpo = "abaixo do peso";
            gotenksimg.src = gotenksmagro;
            break;
        case (imc >= 18.5 && imc < 25):
            corpo = "peso ideal";
            gotenksimg.src = gotenks;
            break;
        case (imc >= 25 && imc < 30):
            corpo = "acima do peso";
            gotenksimg.src = gotenksgordo;
            break;
        default:
            corpo = "igual o Majin Buu inchado";
            gotenksimg.src = majimboo;
            break;
    }
    let resultado = "seu imc e " + imc.toFixed(3) + ", e voce esta " + corpo
    const p = document.getElementById("resultado-imc").textContent = resultado;
}
