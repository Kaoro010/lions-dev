let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklnmopqrstuvwxyz1234567890'
let senha =''
let numeroAletorio
let comprimentoDeSenha

console.log('quantos digitos vai ter a senha ?')
process.stdin.once('data', function(data){
    comprimentoDeSenha = parseInt(data.toString().trim())
    processamento()
    process.exit()
})
function processamento(){
    for(let i = 0; i < comprimentoDeSenha; i++){
        numeroAletorio = Math.floor(Math.random()*caracteres.length + 1)
    senha = senha + caracteres.charAt(numeroAletorio)
    }
    console.log(`sua senha é ${senha}`)
}