/*
 # 2️⃣ Calculadora de partidas Rankeadas
*/
let vitorias = 100;
let derrotas = 5;
let saldo = 0;
let nivel;

function contas(vitorias, derrotas){
    saldo = vitorias - derrotas;
    return saldo;
}
saldo = contas(vitorias,derrotas);
function rank(saldo){
    if(saldo <10){
        nivel = "Ferro"
    }
    else if((saldo>10)&&(saldo<21)){
        nivel = "Bronze"
    }
    else if((saldo>20)&&(saldo<51)){
        nivel = "Prata"
    }
    else if((saldo>50)&&(saldo<81)){
        nivel = "Ouro"
    }
    else if((saldo>80)&&(saldo<91)){
        nivel = "Diamante"
    }
    else if((saldo>90)&&(saldo<101)){
        nivel = "Lendário"
    }
    else{
        nivel = "Imortal"
    }
    return nivel;
}


nivel = rank(saldo);
console.log("O Herói tem saldo de " + saldo + " está no nível de "+ nivel);