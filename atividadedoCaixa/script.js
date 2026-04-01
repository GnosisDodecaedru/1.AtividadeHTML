const produto = {
    "123": {"nome": "Cocaina preta", "preco": 9.99},
    "456": {"nome": "Um mamute com um perocao", "preco": 8.99},
    "789": {"nome": "Vampiro Gayzão", "preco": 4.69}

}

let carrinho = [];

const audio = new Audio("bip.mp3");

window.onload = () => {
    document.getElementById("cod").focus();
}

function addProduto(){
    const codValue = document.getElementById("cod");
    const qtdValue = document.getElementById("qt");

    const codigo = codValue.value;
    const quantidade = qtdValue.value;

    if(!produto[codigo]){
        AlertItem();

        return;
    }

    const produtoBase = produto[codigo];
    const item = {
        nome: produtoBase.nome,
        preco: produtoBase.preco,
        quantidade: quantidade,
        subtotal: produtoBase.preco * quantidade

    };

    carrinho.push(item);
    audio.currentTime = 0;
    audio.play();

    atualizarTela();

}