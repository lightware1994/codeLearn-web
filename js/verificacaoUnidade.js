var checkTaguatinga = document.getElementById("taguatinga")
var checkBrasilia = document.getElementById("brasilia")
var checkGama = document.getElementById("gama")
var checkSobradinho = document.getElementById("sobradinho")

img = document.getElementById("imagem")

radios = document.getElementsByName("radio-name")

for (let i=0; i<4; i++){
    radios[i].addEventListener("change", ()=>{
        let unidade

        if (checkBrasilia.checked) {
            unidade = "senaiBrasília"
        } else if (checkSobradinho.checked) {
            unidade = "senaiSobradinho"
        } else if(checkGama.checked){
            unidade = "senaiGama"
        }else{
            unidade ="taguatinga"
        }

        img.src = `/img/${unidade}.png`
        localStorage.setItem("unidade", unidade)

        localStorage.setItem("unidade", unidade)
    })
}