const certo = "Foi resgistado com sucesso"
const negado = "O E-mail precisa ser preenchido"
const s = document.getElementById("aprovate")
const n = document.getElementById("aprovate")
function matricular(){
    email = document.getElementById("email").value
    if (email == ""){
        s.textContent = negado;
        s.style.color = 'red';
    } else {
        n.textContent = certo
        n.style.color = 'yellowgreen';
    }
}