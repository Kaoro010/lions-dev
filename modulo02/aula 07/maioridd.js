let nome 
let idade

console.log('qual e o seu nome')
process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('qual e a sua idade')
    
    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim() )
        processamento(nome, idade)
        process.exit()
    })
})

function processamento(nome, idade, maior) {
    var maior = 18 - idade
    if (idade < 18) {
        console.log(`${nome}, vc e menor de idade, faltam ${maior} anos para vc ser de maior`)

    } else {
        console.log(`${nome} vc e maior de idade`)
    }
}
