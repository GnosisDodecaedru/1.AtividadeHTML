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
    
    function addProduto(){
    }

    function atualizarTela(){

        const lista = getElementById("lista");
        lista.innerHTML = "";

        let total = 0;

        carrinho.forEach((item, index) => {
            total+= item.subtotal;

            const li = document.createElement("li");
            li.className = "list-group-item";

            li.innerHTML = '<div class="d-flex justify-content-between">
                <strong>${item.nome}</strong>
                <small> ${item.quantidade} x R$ ${item.preco} = <strong>${item.subtotal}
                </strong></small>';
        }
            lista.appendChild(li);
            });
    }

}
