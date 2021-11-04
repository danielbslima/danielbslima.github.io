function renderizarDestaques () {
    let destaque = document.getElementById("destaques_items");
    let listaItems = [

    {
        fotoItem: "img/item_mouse.png",
        nomeItem: "Mouse Logitech M50",
        precoItem: "R$ 70,00"
    },

    {
        fotoItem: "img/item_imac.png",
        nomeItem: "iMac 21.5",
        precoItem: "R$ 10.000,00"
    },

    {
        fotoItem: "img/item_bastion.png",
        nomeItem: "Funko Bastion Overwatch",
        precoItem: "R$ 55,00"
    },

    {
        fotoItem: "img/item_placa.png",
        nomeItem: "Placa RTX 2080",
        precoItem: "R$ 4.500,00"
    },
]


    let template = "";

    for (let index = 0; index <listaItems.length; index++) {
        const destaque = listaItems[index];

        console.log("Destaque")

        template += `<div class="card_destaque">
        <img src="${destaque.fotoItem}" alt="Mouse Logitech m50"> </img>
        <h1>${destaque.nomeItem}</h1>
        <h2>À vista no PIX:</h2>
        <h3>${destaque.precoItem}</h3>
    </div>`

   }
    
   console.log(destaque.innerHTML)
    destaque.innerHTML = template;
}