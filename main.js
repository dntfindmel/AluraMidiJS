function tocaSom(idAudioElement) {
    document.querySelector(idAudioElement).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');



for (let contador = 0; contador < listaDeTeclas.length; contador++ ) {

    const teclas = listaDeTeclas[contador];
    const instrument = teclas.classList[1];
    const idAudio = `#som_${instrument}`;

    teclas.onclick = function () {
        tocaSom(idAudio);
    }

    teclas.onkeydown = function(event) {

        if (event.code === 'Space' || event.code === 'Enter') {
            teclas.classList.add('ativa');
        }

    }



    teclas.onkeyup = function () {
        teclas.classList.remove('ativa');
    }

}