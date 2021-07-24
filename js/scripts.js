const imgsIDs = ['pacote1', 'pacote2', 'pacote3', 'pacote4', 'pacote5', 'pacote6', 'pacote7', 'pacote8', 'pacote9', 'pacote10'];

function expand(clickedImage) {
    let productcontent = document.getElementById('productcontent');
    let sharebutton = document.getElementById('sharebutton');

    //verificar se a imagem clicada já tem o "expand", isto é, se já foi clicada. Se já estiver faz-se remove para não voltar ao seu estado inicial
    if (clickedImage.classList.contains("expand")) {
        //de inicio todas as imagens ficam invisiveis
        imgsIDs.forEach(id => {
            let image = document.getElementById(id);
            image.classList.remove("invisible");
        })
        clickedImage.classList.remove("expand");
        productcontent.style.opacity = 0;
        productcontent.style.pointerEvents = 'none';

        sharebutton.style.opacity = 0;
        sharebutton.style.pointerEvents = 'none';
    } else {
        //de inicio todas as imagens ficam invisiveis
        imgsIDs.forEach(id => {
            let image = document.getElementById(id);
            image.classList.add("invisible");
        })

        clickedImage.classList.remove("invisible"); //utilizando o remove, remove-se a classe invisible para a imagem selecionada
        clickedImage.classList.add("expand"); //a seguir adiciona-se a classe que faz o expand à imagem selecionada

        productcontent.style.opacity = 1;
        productcontent.style.pointerEvents = 'all';

        sharebutton.style.opacity = 1;
        sharebutton.style.pointerEvents = 'all';
    }
}




/*
function expand(obj) {
    /* document.getElementsByTagName('img').style.transform = "translate3d(680.851px, 227.234px, 0px)";
    document.getElementsByTagName('img').style.transform = "rotate(0deg)"; */
    //document.getElementById(id).style.transform = "translate3d(680.851px, 227.234px, 0px)";
/*

obj.style.transform = "scale(1.5)";
} */