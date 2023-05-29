const dados = [
    {
        titulo: "Hambúrguer com Crispy de Cebola",
        imagem: "imagens/hamburguer.png",
        ingredientes: [
            "300 gramas de carne moída",
            "1 cebola cortada em fatias finas",
            "2 pães de brioche para hambúrguer",
            "2 colheres de sopa de Maionese Hellmann's Temperada Sabor Cebola",
            "4 tomates cereja"
        ],
        preparo: "Em uma panela média aqueça bem o óleo, faça o teste de temperatura colocando uma fatia de cebola, ela deve borbulhar vigorosamente. Abaixe o fogo para médio e frite as cebolas mexendo com uma escumadeira até ficarem douradas. Escorra em papel toalha."
    },
    {
        titulo: "Chips com carne",
        imagem: "imagens/chips.png",
        ingredientes: [
            "300 gramas de lagarto em peça",
            "1 saco de batata Ruffles Original (400 g)",
            "4 colheres de sopa de maionese Hellmann's Churrasco"
        ],
        preparo: "Disponha a Batata Ruffles Original numa travessa, cubra com a carne desfiada e finalize a receita com a Maionese Hellmann’s Churrasco. Sirva em seguida."
    },
    {
        titulo: "Sopa de Capeletti com Cenoura",
        imagem: "imagens/sopa.png",
        ingredientes: [
            "1 cebola pequena picada",
            "2 colheres de chá de Caldo em Pó Knorr Zero Sal™ Galinha",
            "1 pacote de capeletti de frango (400 g)",
            "1/2 colher de sopa de cheiro-verde picado"
        ],
        preparo: "Acrescente a cenoura e misture. Adicione a água e o Caldo em Pó Knorr Zero SalTM Galinha, mexa bem e deixe cozinhar em fogo alto, com a panela semitampada, por 5 minutos."
    }
];

function getListaIngredientes(receita) {
    return receita.ingredientes.reduce((acumulador, item) => acumulador += `<li>${item}</li>`, "");
}

function getCard(receita) {
    const card = `
    <div class="card">
        <img src="${receita.imagem}" alt="Receita de: ${receita.titulo}" class="card-img-top">
        <div class="card-body">
            <div class="card-title">
                ${receita.titulo}
            </div>
            <ul>
                ${getListaIngredientes(receita)}
            </ul>
            <hr>
            <div class="card-text">
                    <p>
                    ${receita.preparo}
                </p>
            </div>
        </div>
    </div>
    `;

    return card;
}

function preencheCatalogo() {
    const catalogo_div = document.getElementById("pnlCatalogo");
    catalogo_div.innerHTML = dados.reduce((acumulador, item) => acumulador += getCard(item), "");
}