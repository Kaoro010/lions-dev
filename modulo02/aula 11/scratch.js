var nota01
var nota02


console.log('qual e a primeira nota ?')
process.stdin.once('data', function(data){
    nota01 = parseFloat(data.toString().trim())
    console.log('qual e a segunda nota ?')

    process.stdin.once('data', function(data){
        nota02 = parseFloat(data.toString().trim())
        notaMedia(nota01, nota02)
        process.exit()
    })
})
function notaMedia(nota01,nota02){
    var media = (nota01 + nota02) /2
    console.log(`a media é: ${media}`)
    if (media < 6) {
        console.log(`que pena, voce ficou de recuperação, pois sua nota foi: ${media}`)
    } else {
        console.log(`parabens, voce passou de ano, pois sua nota foi: ${media}`)
    }
}
