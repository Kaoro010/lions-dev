console.log("fala um numero")
process.stdin.once('data', function(data){
    numero = data.toString().trim()
    for (let i = 0; i <= 10; i++){
        if (!isNaN (numero)){
            console.log(numero * i)
        }
    }process.exit()
});