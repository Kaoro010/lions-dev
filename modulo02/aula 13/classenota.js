let nota

process.stdin.once('data', function(data){
    nota = parseFloat(data.toString().trim())
    processamento(nota)
    process.exit()  
})

function processamento(nota) {
    let notaClassificada = classificar (nota)
    if (notaClassificada == 'A' || notaClassificada == 'B' || notaClassificada == 'C')  {
        console.log('você foi aprovado')
    } else {
        console.log('')
    }
}

function classificar(nota) {
    switch(true){
        case (nota >= 90 && nota <= 100):
            return 'A'
        case (nota >= 80 && nota <= 89):
            return 'B'
        case (nota >= 70 && nota <= 79):
            return 'C'
        case (nota >= 60 && nota <= 69):
            return 'D'
        case (nota >= 0 && nota <= 59):
            return 'F'
    }
    return nota
}
 
console.log(classificar(80))