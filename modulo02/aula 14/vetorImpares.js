let vetorInicial = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let vetorImpares = []

for (let i = 0; i < vetorInicial.length; i++){
    if (vetorInicial [i] % 2 != 0)
        vetorImpares.push(vetorInicial [i])
}
console.log(vetorImpares)