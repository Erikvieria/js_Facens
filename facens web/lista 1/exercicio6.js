let numero 
let texto = 'So é aceito numeros positivos maiores que zero'

function dobro(numero){
    if (numero <= 0) {
       return  console.log(texto)
        
    }
   else { 
    return  numero * 2 
}
}


console.log(dobro(2))