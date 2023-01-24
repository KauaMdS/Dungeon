/* -------------- Exportações de Classes -------------- */

const Protagonista = document.querySelector('.protagonista')
const Inimigo = document.querySelector('.inimigo')

const Cenario = document.querySelector('.cenario')

const Menu = document.querySelector('.MenuRestart')
const Musica = document.querySelector('.musica')
const Audio = document.querySelector('audio')
var Pause = window.document.querySelector('.pause')
var L = 0;

const Placar = window.document.getElementById('placar')
var cont=0, P = 0;
let M = 0;

/* -------------- Botões -------------- */

    function Redd(){
        document.addEventListener('click', pular)
    }

    function Greenn(){
        window.location.replace("menu.html")
    }

    function Bluee(){
        document.addEventListener("click", () =>{
            location.reload()
        })
    }

    function restart(){
        document.addEventListener("click", () =>{
        location.reload()
    })}

    function musica(){
        switch(M)
        {
            case 0:
                // Musica Ligado!
                M++
                Musica.style.borderColor = '#000'
                Musica.style.color = '#000'
                Audio.src = 'confg/prison_boss.mp3'
                Audio.play()

                break
            case 1:
                // Musica Desligado
                M--
                Musica.style.borderColor = 'red'
                Musica.style.color = 'rgb(142, 0, 0)'
                Audio.src = 'stop.mp3'

                break
        }
    }

    function pause(){
        switch(P)
        {
            case 1:
                // Pausar
                P--
                Pause.innerHTML = ' ►'

                Inimigo.style.animation = 'none'
                Inimigo.style.left = `${L}px`

                L = cont;
                
                break
            case 0:
                // Despausar
                P++
                Pause.innerHTML = '||'

                Inimigo.style.animation = 'ataque 1s infinite linear'
                Inimigo.style.right = '-100%'
                despause()
                
                break
        }
    }

    function IrMenu(){
        window.location.replace("menu.html")
    }

/* -------------- Inicio -------------- */

    Inimigo.style.animation = 'none'
    Inimigo.style.right = '-100%'

    const pular = () => {
        Protagonista.classList.add('pulando')

        setTimeout (() => {
            Protagonista.classList.remove('pulando')
        }, 500)
    }

setTimeout (() => {

    Inimigo.style.animation = 'ataque 1s infinite linear'
    Inimigo.style.right = '-100%'
    Protagonista.src = 'img/personagem/correndo.gif'

    /* --- Interface - */

    const loop = setInterval(() => {

        console.log(loop)
        console.log(score)
        // console.log(posicaoFundo)

        const posicaoInimigo = Inimigo.offsetLeft
        L = posicaoInimigo
        const posicaoProtagonista = +window.getComputedStyle(Protagonista).bottom.replace('px', '')
        const posicaoFundo = Cenario.offsetLeft
        
        if (posicaoInimigo <=112 && posicaoInimigo > 0 && posicaoProtagonista < 80) {

            Protagonista.src = 'img/personagem/death.gif'
            Protagonista.style.width = '45px'
            Protagonista.style.animation = 'none'

            Inimigo.style.animation = 'none'
            Inimigo.style.left = `${posicaoInimigo}px`

            setTimeout (() => {
                
                Protagonista.src = 'img/personagem/deathStop.png'
                Protagonista.style.marginLeft = '30px'
                Protagonista.bottom = '0'
                
                Menu.style.display = 'block'

                clearInterval(score)
                clearInterval(loop)
                // clearInterval(posicaoFundo)
            }, 100)
        }

        // Cenario.style.animation = 'movimento 5s infinite linear'

        // setTimeout (() =>{
        //     if(posicaoFundo == 0) {
        //         Cenario.style.animation = 'none'
        //     }
        // }, 5000)
        
        
    }, 10)

    const score = setInterval(function despause() {

        cont++;
        Placar.innerText = `Placar:${cont}`
        if (P == 1) {
            clearInterval(score)
        }

    }, 200)

    document.onkeydown = Teclado;
    function Teclado(e){
        if (e.keyCode == 38 || e.keyCode == 32) {
            pular()
        } else if (e.keyCode == 82) {
            restart()
        } else if (e.keyCode == 77) {
            musica()
        } else if (e.keyCode == 80) {
            pause()
        }
    }
},1000)


/* 
-------------- Metas --------------

- Cenário com um movimento continuo;
- Botão de Pause funcional;
- Arrumar o restart (R), com o eventKey;
- Variedade de Inimigos;
- Poder se abaixar para desviar do morcego;
- Velocidade transitiva;

*/