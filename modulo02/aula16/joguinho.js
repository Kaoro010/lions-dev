let opção = ['pedra', 'papel', 'tesoura']
let escolhaPc = ''
let escolhaEu
let resposta

console.log('pedra papel ou tesoura ?')
process.stdin.once('data', function(data){
    escolhaEu = data.toString().trim()
    processamento()
    process.exit()
})

function  processamento(){
    escolhaPc = opção[Math.floor(Math.random()*2 + 1)]
    console.log(`${escolhaPc}`)
    if (escolhaEu == escolhaPc){
        console.log('empate')
    }else if (escolhaEu == 'pedra' && escolhaPc == 'tesoura' || escolhaEu == 'tesoura' && escolhaPc == 'papel' || escolhaEu == 'papel' && escolhaPc == 'pedra'){
        console.log(`vc venceu :)`)
    }else{
        console.log('vc perdeu :(')
    }
}