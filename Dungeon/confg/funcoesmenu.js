/* -------------- Exportações de Div's -------------- */

const Start = document.querySelector('input.start')
const Musica = document.querySelector('.musica')
const Audio = document.querySelector('audio')

let M = 0;

/* -------------- Botões -------------- */

function Redd(){
    alert('=== Info Botões no Game ===\nVermelho = Pulo do Protagosnista\nVerde = Retorno ao Menu\nAzul = Restart')
}

function Greenn(){
    window.location.replace("menu.html")
}

function Bluee(){
    window.location.replace("historia.html")
}

/* -------------- Menu -------------- */

function historia() {
    window.location.replace("historia.html")
}

Start.addEventListener("click", () =>{
    window.location.replace("Dungeon.html")
})

function musica(){
    switch(M)
    {
        case 0:
            // Musica Ligada
            M++
            Musica.style.borderColor = 'black'
            Musica.style.background = 'rgba(249, 231, 181, 0.429)'
            Audio.src = 'confg/prison_boss.mp3'
            Audio.play()
            break
                
        case 1:
            // Musica Desligada
            M--
            Musica.style.borderColor = 'red'
            Musica.style.background = 'rgba(255, 0, 0, 0.273)'
            Audio.src = 'stop.mp3'
            break
    }
}

/* -------------- Gatilhos -------------- */

document.onkeydown = Teclado
function Teclado(e){
    if (e.keyCode == 32 || e.keyCode == 13) {
        Start()
    } else if (e.keyCode == 77) {
        musica()
    }
}