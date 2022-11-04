const telefone = document.querySelector('input[type=tel]');
const listaDeBotoes = document.querySelectorAll('input[type=button]');

for (let i = 0; i < listaDeBotoes.length; i++) {
    const teclas = listaDeBotoes[i];

    teclas.onclick = function () {
        telefone.value = telefone.value + teclas.value;
    }
}
