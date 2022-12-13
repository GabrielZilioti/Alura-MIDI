function playSound (soundId) {
    const element = document.querySelector(soundId);

    if (element && element.localName === 'audio'){
        element.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor invalido');
    }
}

const keysList = document.querySelectorAll('.tecla');

for (let counter = 0; counter < keysList.length; counter++){
    const key = keysList[counter];
    const instrument = key.classList[1];
    const idAudio = `#som_${instrument}`; //template string

    key.onclick = function () {
        playSound(idAudio);
    }

    key.onkeydown = function(event) {
        if ( event.code === 'Space' || event.code === 'Enter'){
            key.classList.add('ativa');
        }
    }

    key.onkeyup = function() {
        key.classList.remove('ativa');
    }

}


// let count = 0;

// while (count < keysList.length){

//     const key = keysList[count];
//     const instrument = key.classList[1];
//     //template string
//     const idAudio = `#som_${instrument}`

//     // console.log(idAudio);

//     key.onclick = function () {
//         playSound(idAudio)
//     }

//     count+=1;

//     console.log(count)
// }
