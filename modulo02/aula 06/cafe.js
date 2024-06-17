let cafe

console.log('vc gosta de cafe?')
process.stdin.once('data', function(data){
    cafe = data.toString().trim()
    processamento(cafe)
    process.exit()
})

function processamento(cafe){
    if (cafe.toLowerCase() == 'sim'){
        console.log('vc tem bom gosto')
    } else{
        console.log('vc nao tem bom gosto')
    }
}