let segundo = 0
let minuto = 0
let hora = 0
let timer
const display = document.querySelector("h1")

//atualiza o display(h1) para o formato HH:MM:SS
function atualizarDisplay() {
    const horasFormatada = String(hora).padStart(2, "0")
    const minutosFormatado = String(minuto).padStart(2, "0")
    const segundosFormatado = String(segundo).padStart(2, "0")
    display.textContent = `${horasFormatada}:${minutosFormatado}:${segundosFormatado}`
}

function start() {
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
        segundo++

        // lógica para minutos e horas
        if (segundo === 60) {
            segundo = 0
            minuto++
        }
        if (minuto === 60) {
            minuto = 0
            hora++
        }

        atualizarDisplay()
    }, 1000)
}

//pausa o cronometro
function pause(){
    clearInterval(timer)
}

//reseta o cronometro
function reset(){
    clearInterval(timer)
    segundo = 0
    minuto = 0
    hora = 0
    atualizarDisplay ()
}

// inicializa o display (h1)
atualizarDisplay()