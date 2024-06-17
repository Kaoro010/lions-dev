let somaPares = 0
let somaImpares = 0
let totalPares = 0
let totalImpares = 0

for (let i = 0; i <= 999; i = i+1){
    if (i % 2 == 0){
        somaPares += i
        totalPares++
    } else {
        somaImpares += i
        totalImpares++
    }
}
let mediaPares = somaPares / totalPares
let mediaImpares = somaImpares / totalImpares

console.log(`soma dos números pares: ${somaPares}`)
console.log(`soma dos números ímpares: ${somaImpares}`)
console.log(`total de números pares: ${totalPares}`)
console.log(`total de números ímpares: ${totalImpares}`)
console.log(`média dos números pares: ${mediaPares}`)
console.log(`média dos números pares: ${mediaImpares}`)

if (somaPares > somaImpares){
    console.log('a soma dos números pares é maior que a soma dos números ímpares.')
    }else if (somaImpares > somaPares){
        console.log('a soma dos números ímpares é maior que a soma dos números pares.')
    }else{
        console.log('a soma dos números pares é igual a soma dos números ímpares.') 
}