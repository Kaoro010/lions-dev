let coresFavoritas = ['preto', 'azul', 'verde']
let coresEspeciais = []
var corDoUsuario

console.log('qual e a sua cor favorita')
process.stdin.once('data', function(data){
    corDoUsuario = data.toString().trim()
    if (coresFavoritas.includes(corDoUsuario)){
        console.log('A sua cor favorita é uma das favoritas da turma!')
    
    }else{
        console.log('A sua cor favorita é diferente, vamos adicionar a lista.')
        coresEspeciais.push(corDoUsuario)
    }
    console.log(coresFavoritas)
    console.log(coresEspeciais)
    console.log(coresFavoritas.length)
})