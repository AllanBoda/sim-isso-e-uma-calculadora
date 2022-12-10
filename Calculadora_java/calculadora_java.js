const n1R = document.getElementById('n1');
const n2R = document.getElementById('n2');
const Resp = document.getElementById('repost');
const selecao = document.getElementById('operacao');
let op = function() {
    alert("Escolha uma das Opções");
} 

function som(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}
function erro() {
    return 'ERRO';
}

function div(num1, num2) {
    let divisao;
    
    if(num2==0){
        divisao = "ERRO: DIVISÃO POR ZERO";
    }else{
        divisao = num1 / num2;
    }
    return divisao;
}

function mul(num1, num2) {
    return num1 * num2;
}

function operacao() {


    const OpSelecao = selecao.selectedIndex;

    switch (OpSelecao) {
        case 1:
            Resp.innerText = 'Adição';
            op = som;
            break;
        case 2:
            Resp.innerText = 'Subtração';
            op = sub;
            break;
        case 3:
            Resp.innerText = 'Multiplicação';
            op = mul;
            break;
        case 4:
            Resp.innerText = 'Divisão';
            op = div;
            break;
        case 0:
            Resp.innerText = 'Escolha uma Operação';
            op = erro;
            break;
        default:  
            break;
    }
}

function calcular() {
    // referências aos elementos
    const answer = document.getElementById('answer');

    // valores dos inputs
    const nm1 = parseInt(n1R.value);
    const nm2 = parseInt(n2R.value);
    const resposta = op(nm1, nm2);
    Resp.innerText = resposta;
}
