let vetorInicial = [27, 10, 3, 0, 20, 5, 6, 3]
let vetorPares = []
let vetorImpares = []

for (let i = 0; i < vetorInicial.length; i++){
    if (vetorInicial[i] % 2 == 0){
        vetorPares.push(vetorInicial[i])
 
    } else {
        vetorImpares.push(vetorInicial[i])
    }
            
}
console.log(`Array de numeros impares: ${vetorImpares}`)
console.log(`Array de numeros pares: ${vetorPares}`)