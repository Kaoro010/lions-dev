rodadas = 0
let maximoDeRodadas = 7

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let numeroAletorio = Math.floor(Math.random()*100) + 1
console.log('bem vindos ao jogo de adivinhaçao')
jogar()

function jogar(){
    rodadas = rodadas + 1
    if (rodadas <= maximoDeRodadas){
        rl.question(`tente adivinhar o numero: `, (numero) =>{
            if(numeroAletorio>numero){
                 console.log(`muito baixo`)
                jogar()
            }else if(numeroAletorio<numero){
                console.log(`muito alto`)
                 jogar()
            }else{
                console.log(`vc acertou o numero eras ${numeroAletorio} em ${rodadas}`)
                rl.close()
            }
        })
    }else{
        console.log('acabou')
        rl.close()
    }
}