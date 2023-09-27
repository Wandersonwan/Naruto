//Passo 01
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.image')

// Passo 02

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        // Passo 03

        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        // Passo 04

        botao.classList.add('selecionado');

        //Passo 5

        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');


        //Passo 6
        
        imagens[indice].classList.add('ativa')



    })
});




