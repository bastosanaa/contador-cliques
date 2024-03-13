const botao = document.querySelector('.botao')

var contagem = document.querySelector('.contagem')

botao.addEventListener('click', function(){
    var numero = parseInt(contagem.textContent) + 1;
    contagem.textContent = numero
})