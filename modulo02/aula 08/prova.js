let prova01
let prova02
let notas = []

console.log('qual e a nota da prova 1')
process.stdin.once('data', function(data){
    prova01 = parseFloat(data.toString().trim())
    console.log('qual e a nota da prova02')

    process.stdin.once('data', function(data){
        prova02 = parseFloat(data.toString().trim())
        notaMedia(prova01, prova02)
        process.exit()
    })
})

function notaMedia(prova01, prova02){
    notas.push(prova01)
    notas.push(prova02)
    var media = (notas[0] + notas[1]) /2
    console.log(`A media é ${media}`)
}