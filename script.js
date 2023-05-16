function changeImage() {
    const image = document.getElementById('imagemDupla');
    image.src = 'https://i.postimg.cc/3xtv8jnR/papelzinho-no-ch-o-01.jpg';
}

function restoreImage() {
    const image = document.getElementById('imagemDupla');
    image.src = 'https://i.postimg.cc/QCgFRcFj/papelzinho-no-ch-o-02.jpg';
}

/* function clickImageLegacy() {
    console.log('clickImage');
    const image = document.getElementById('imagemDupla');
    console.log(image.src);
    if (image.src === 'https://i.postimg.cc/QCgFRcFj/papelzinho-no-ch-o-01.jpg') {
        console.log('a imagem é a 2');
    }
} */

function clickImage() {
    console.log('clickImage!!!');
    const image = document.getElementById('imagemDupla');
    if (image.src.includes('papelzinho-no-ch-o-01.jpg')) {
        image.src = 'https://i.postimg.cc/QCgFRcFj/papelzinho-no-ch-o-02.jpg';
    } else {
        image.src = 'https://i.postimg.cc/QCgFRcFj/papelzinho-no-ch-o-01.jpg';
    }
}
