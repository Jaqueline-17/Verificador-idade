function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("Verifique os dados e tente denovo.");
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('width', '250px')
        if(fsex[0].checked){
            genero = 'Homen'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', './imagens/h-crianca.png')
            } else if(idade < 21){
                img.setAttribute('src', './imagens/h-jovem.png')
            } else if(idade < 50){
                img.setAttribute('src', './imagens/h-adulto.png')
            } else{
                img.setAttribute('src', './imagens/h-idoso.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', './imagens/m-crianca.png')
            } else if(idade < 21){
                img.setAttribute('src', './imagens/m-jovem.png')
            } else if(idade < 50){ 
                img.setAttribute('src', './imagens/m-adulta.png')
            } else{
                img.setAttribute('src', './imagens/m-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}