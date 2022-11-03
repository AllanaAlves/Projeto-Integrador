const INPUT_BUSCA = document.getElementById('input-busca')
const TABELA_PROCESSOS = document.getElementById('tabela')

INPUT_BUSCA.addEventListener('keyup' , () => {
    let expressao = INPUT_BUSCA.value.toLowerCase();

    // possibilidade de limitar a busca
    // if (expressao.length === 1){
    //     return;
    // }
    
    let linhas = TABELA_PROCESSOS.getElementsByTagName('tr');

    for (let posicao in linhas){
        if (true === isNaN(posicao)) {
            continue;
        }

        let conteudoDaLinha = linhas[posicao].innerHTML.toLowerCase();

        if (true === conteudoDaLinha.includes(expressao)) {
            linhas[posicao].style.display = '';
        } else {
            linhas[posicao].style.display = 'none';
        }
    }
    
});