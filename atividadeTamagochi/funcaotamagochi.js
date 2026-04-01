// Pegando os elementos do HTML
const cria = document.getElementById("b");
const avatar = document.getElementById("avatarImg");

// Lista de imagens (verifique se os nomes batem com os seus arquivos!)
const estados = {
    normal: "b_n.png",
    puto: "b_p.png",
    morto: "b_d.png",
    comendo: "b_c.png",
    alimentado: "b_a.png",
};

let contador = 0; 
let intervaloFome = null;
let timeoutAcao = null;
let horas = 0;

// Função que faz o bicho sentir fome e morrer
function controlador() {
    if (intervaloFome) clearInterval(intervaloFome);
    
    intervaloFome = setInterval(() => {
        contador++;
        console.log("Tempo de fome:", contador);
        
        if (contador >= 30 && contador < 60) {
            cria.src = estados.puto;
        } else if (contador >= 60) {
            cria.src = estados.morto;
            clearInterval(intervaloFome); // Ele morreu, para de contar
        }
    }, 1000);
}

// Função de Alimentar (chamada pelo clique no HTML)
function alimentar() {
    // Se estava morto (contador >= 60), ele ressucita
    if (contador >= 60) {
        controlador(); 
    }

    contador = 0; // Reseta a fome
    cria.src = estados.comendo;
    if (avatar) avatar.src = estados.comendo;

    if (timeoutAcao) clearTimeout(timeoutAcao);

    // Sequência de animação
    timeoutAcao = setTimeout(() => {
        cria.src = estados.alimentado;
        if (avatar) avatar.src = estados.alimentado;

        timeoutAcao = setTimeout(() => {
            cria.src = estados.normal;
            if (avatar) avatar.src = estados.normal;
        }, 2000); // Fica feliz por 2 segundos e volta ao normal
    }, 1000); // Come por 1 segundo
}

// Ciclo Dia/Noite (Troca o fundo do Body)
function atualizarFundo() {
    setInterval(() => {
        horas++;
        if (horas >= 12) {
            document.body.style.backgroundImage = "url('background_noite.png')";
        } else {
            document.body.style.backgroundImage = "url('bg.png')";
        }
        if (horas >= 24) horas = 0;
    }, 1000); // 1000ms aqui é só para teste rápido
}

// Inicia as funções ao abrir a página
controlador();
atualizarFundo();