function calcularTotal(){

    //value pega o valor de um input lá da tela
    let quantidade = document.getElementById('qtde').value;
    let valorUnitario = document.getElementById('valor').value;

    quantidade = Number(quantidade);
    valorUnitario = parseInt(valorUnitario);

    let valorTotal = multiplicarValores(quantidade, valorUnitario);
    let valorComGorjeta = somarGorjeta(valorTotal);

    //jogando o valor para tela
    document.getElementById('total').value = valorComGorjeta;
}

function multiplicarValores(qtde, valor){

    let total = qtde * valor

    return total;
}

function somarGorjeta(total){

    let gorjeta = 0;

    if(total > 100){
        gorjeta = 10;
    }else{
        gorjeta = 5;
    }
    

    return  total + gorjeta;

}