$( document ).ready(function(){

    $("#barras").click(function() {
        // $("#nav_items").addClass("nav_items_ativo")

        if($("#nav_items").hasClass("nav_items_ativo")) {
            $("#nav_items").removeClass("nav_items_ativo")
        } else {
            $("#nav_items").addClass("nav_items_ativo")
        }

    })
  
    $("#btnSearch").click(function() {
        // $("#nav_items").addClass("nav_items_ativo")

        ($("#message").addClass("missao_ativa"))

    })


})



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


function renderizarVagas () {
    let vaga = document.getElementById("vagas_items");
    let listaVagas = [

    {
        areaVaga: "TI",
        nomeVaga: "Analista de Desenvolvimento de Sistemas - FullStack",
        exigenciaVaga: "PHP, Mysql, NodeJS, ReactJS, Python, HTML5, CSS, GIT, SCRUM",
        salarioVaga: "R$1.210,00",
       },
    {
        areaVaga: "SAC",
        nomeVaga: "DJ de musica de espera do teleatendimento",
        exigenciaVaga: "Dominio de ao menos 3 instrumentos musicais", 
        salarioVaga: "R$ 70,00/h",
    },
    
    {
        areaVaga: "Logística",
        nomeVaga: "Auxiliar de carragamento de veículos logísticos",
        exigenciaVaga: "Ombros largos",
        salarioVaga: "R$ 3.000,00",
    },
    
    
]


    let template = "";

    for (let index = 0; index <listaVagas.length; index++) {
        const vaga = listaVagas[index];

        console.log("Vaga")

        template += `<div class="card_vaga">
        <h1>${vaga.areaVaga}</h1>
        <h2>${vaga.nomeVaga}</h2>
        <h3>Exigências para cargo:<h3>
        <h3>${vaga.exigenciaVaga}</h2>
        <h4>${vaga.salarioVaga}</h4>
    </div>`

   }
    
   console.log(vaga.innerHTML)
    vaga.innerHTML = template;
}


function GetValue()
{
    var myarray= new Array("6 Esferas do dragão","Uma Lágrima do Chuck Norris","Pastilha de freio de um Peugeot","Um capacitor de fluxo", "Uma flor", "Uma Página completa com js CSS e HTML","Uma Revista Super Gamer Power com detonado de Resident Evil 2", "Os últimos livros de Game of Thrones", "Carta Lótus Negra de Magic the Gathering",);
    var random = myarray[Math.floor(Math.random() * myarray.length)];
   document.getElementById("message").innerHTML=random;
}


var toastTrigger = document.getElementById('btn-enviar')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}