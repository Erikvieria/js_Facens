//função nomeada 

function soma(a,b){
    return a + b

}

console.log(soma(2,4))


// função anonima

const subtracao = function (a,b){
    return a - b 
}

console.log(subtracao(4,2))

// arrow function 

const div = (a,b) => {
    if (b == 0) {
        return  'impossivel dividir por zero'
        
    }
    else {
    return a / b
}

}

console.log(div(1,0))

//arrow function mais resumida ainda (so funciona se tiver uma linha de função)

const multi = (a,b) => a * b

console.log(multi(3,6))

// função dentro de função (arrow function )

const calcular = (a,b,operacao = soma) => operacao(a,b)

console.log('calcular: ' + calcular(4,2,multi))


//função que na verdade é um objeto


function pessoa(){}

const p = new pessoa()
p.nome = 'erik'
console.log(p)




