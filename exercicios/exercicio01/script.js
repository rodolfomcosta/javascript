function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    if (min < 10) {
        msg.innerText = `Agora são ${hora}:0${min}h`
    } else {
        msg.innerText = `Agora são ${hora}:${min}h`
    }
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        window.document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        window.document.body.style.background = '#fd8d43'
    } else {
        img.src = 'noite.png'
        window.document.body.style.background = '#333333'
    }
    
}