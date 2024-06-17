let numero

console.log('fale um numero')
process.stdin.once('data',function(data){
    numero = data.toString().trim()
    verficacao(numero)
    process.exit()
})

function verficacao(numero){
    if (numero % 5 == 0) {
        console.log(`O número ${numero} é divisível por 5.`)
    } else { 
        console.log(`O número ${numero} não é divisível por 5.`)
    }
}