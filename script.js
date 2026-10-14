// 1. Seleciona os elementos da página usando seus IDs
const botao = document.getElementById('meuBotao');
const mensagem = document.getElementById('mensagem');

// 2. Adiciona um escutador de eventos de clique ('click')
botao.addEventListener('click', function() {
    
    // Comando 1: Alterna uma classe CSS (muda a cor para verde)
    botao.classList.toggle('sucesso');

    // Comando 2: Verifica o estado atual e altera os textos
    if (botao.classList.contains('sucesso')) {
        botao.textContent = 'Ativado! 🎉';
        mensagem.textContent = 'Você executou o comando com sucesso!';
    } else {
        botao.textContent = 'Clique Aqui!';
        mensagem.textContent = 'O botão voltou ao estado inicial.';
    }

    // Comando 3: Exibe um alerta/mensagem no console do navegador
    console.log('O botão foi clicado!');
});
