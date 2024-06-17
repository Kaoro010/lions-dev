let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
let media = 0
let notaAlta = notas[0]
let notaBaixa = notas[0]
let soma = 0
let mediaAcima = 0
let reprovado = 0

for (let i = 0; i < notas.length; i++){
    soma = soma + notas[i]
}
media = soma / notas.length
console.log (`media ${media}`)

for (let i = 0; i < notas.length; i++){
    if (notas[i] > notaAlta) {
        notaAlta = notas[i]
    }
}
console.log(`a nota mais alta é ${notaAlta}`)

for (let i = 0; i < notas.length; i++){
    if (notas[i] < notaBaixa){
        notaBaixa = notas[i]
    }
}
console.log(`a nota mais baixa é ${notaBaixa}`)

for (let i = 0; i < notas.length; i++){
    if (notas[i] > media){
        mediaAcima++

    }
}
console.log(`as notas acima da media são ${mediaAcima}`)

notas.push(8.0)
console.log(`nota adicionada ${notas}`)

for (let i = 0; i < notas.length; i++){
    if (notas[i] < 6){
        reprovado++
    }
}
console.log(`os reprovados foram ${reprovado}`)

// 