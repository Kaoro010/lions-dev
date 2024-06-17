const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let funcionarios = []
exibirMenu()

function exibirMenu() {
	console.log(`
	Menu:
	1. Cadastar funcionário
	2. Listar funcionários
	3. Editar informações funcionário
	4. Remover
	5. Sair
		`)

	rl.question('Escolha uma opção: ', (opcao) => {

		opcao = parseInt(opcao)

		switch (opcao) {
			case 1:
				cadastrarFuncionario()
				break
			case 2:
				listarFuncionarios()
				break
			case 3:
				editarFuncionarios()
				break
			case 4:
				removerFuncionario()
				break
			case 5:
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
			rl.question('Digite o salário do funcionário: ', (salario) => {
				funcionarios.push({ nome: nome, cargo: cargo, salario: salario })
				console.log('Funcionário cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
}

function listarFuncionarios(){

	console.log(funcionarios)
	exibirMenu()
}

function editarFuncionarios(){

	rl.question(`Quer editar as informações de qual funcionário? `,(opcao)=>{

		opcao = parseInt(opcao)

		if(typeof(opcao) === 'number' && opcao > 0 && opcao <= funcionarios.length){

			rl.question('Digite o nome do funcionário: ', (nome) => {
				rl.question('Digite o cargo do funcionário: ', (cargo) => {
					rl.question('Digite o salário do funcionário: ', (salario) => {
						funcionarios[opcao - 1] = { nome: nome, cargo: cargo, salario: salario }
						console.log('Informalções alteradas com sucesso!')
						exibirMenu()
					})
				})
			})

		} else{

			console.log('Opção inválida, tente novamente.')
			editarFuncionarios()
		}
	})
}

function removerFuncionario(){

	rl.question(`Quer editar as informações de qual funcionário? `,(numero)=>{

		numero = parseInt(numero)

		if(typeof(numero) === 'number' && numero > 0 && numero <= funcionarios.length){

			funcionarios.splice(numero - 1,1)

			console.log('Funcionário removido com sucesso!')

			exibirMenu()

		} else{

			console.log('Opção inválida, tente novamente.')
			removerFuncionario()
		}
	})
}