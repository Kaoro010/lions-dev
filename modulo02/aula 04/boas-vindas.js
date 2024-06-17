/*var nome = ''
console.log("qual e seu nome")   
process.stdin.on('data', funcion(data) {
    let nome =  data.toString();

})
*/

var nome = ''
console.log('qual e seu nome')
process.stdin.on('data', function(data){
    let nome = data.toString();
    var saudacao = 'ola ' + nome
    console.log(saudacao)
    process.exit();
}) 
