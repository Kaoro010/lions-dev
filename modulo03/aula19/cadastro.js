const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let funcionario = []
exibirMenu()

function exibirMenu() { 
    console.log(`
    Menu:
    1. Cadastrar funcionário
    2. Listar todos os funcionários
    3. Exibir funcionário com maior salário
    4. Sair
    `)
    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                cadastrarFuncionario()
                break
            case '2':
                listarFuncionarios()
                break
            case '3':
                exibirMaiorSalario()   
                break
            case '4':
                rl.close()
                break
            default:
                console.log('Opção inválida, tente novamente.')     
                exibirMenu()
                break    
        }
    })
}

function cadastrarFuncionario() {
    rl.question('Digite o nome do funcionário: ', (nome) => {
        rl.question('Digite o cargo do funcionário: ', (cargo) => {
            rl.question('Digite o salário do funcionário: ', (salario) =>{
                funcionario.push({nome, cargo, salario: parseFloat(salario) })
                console.log('Funcionário cadastrado com sucesso!')
                exibirMenu()

            })
        })
    })
}

function listarFuncionarios() {
    if ( funcionario.length === 0) {
        console.log('Nenhum funcionário cadastrado.')
    } else {
        console.log('Lista de funcionários:')
        funcionario.forEach((funcionario, index) => {
            console.log(`${index + 1}. Nome: ${funcionario.nome},
cargo: ${funcionario.cargo}, 
Salário: R$ ${funcionario.salario.toFixed(2)}`)           
        })
    }
    exibirMenu()    
}

function exibirMaiorSalario() {
    if (funcionario.length == 0) {
        console.log('Nenhum funcionário cadastrado.')
    } else {
        let funcionarioMaiorSalario = funcionario[0]
        for ( let i = 1; i < funcionario.length; i++) {
                if (funcionario[i].salario> funcionarioMaiorSalario.salario){
                    funcionarioMaiorSalario = funcionario[i]
                }
            }
            console.log(`Funcionário com maior salário:
            Nome: ${funcionarioMaiorSalario.nome}
            Cargo: ${funcionarioMaiorSalario.cargo}
            Salário: R$${funcionarioMaiorSalario.salario.toFixed(2)}`)
        }
        exibirMenu()
    }    