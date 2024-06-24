import obterDados from 'readline-sync';

// Coleção de dados dos salarios minimo de 2010 até 2020
let salarioMinimo = [
  { ano: 2010, salario: 510.00 },
  { ano: 2011, salario: 545.00 },
  { ano: 2012, salario: 622.00 },
  { ano: 2013, salario: 678.00 },
  { ano: 2014, salario: 724.00 },
  { ano: 2015, salario: 788.00 },
  { ano: 2016, salario: 880.00 },
  { ano: 2017, salario: 937.00 },
  { ano: 2018, salario: 954.00 },
  { ano: 2019, salario: 998.00 },
  { ano: 2020, salario: 1045.00 },
];

// Coleção de dados do indice IPCA de 2010 até 2020
let inflacao = [
  { ano: 2010, ipca: 5.91 },
  { ano: 2011, ipca: 6.50 },
  { ano: 2012, ipca: 5.84 },
  { ano: 2013, ipca: 5.91 },
  { ano: 2014, ipca: 6.41 },
  { ano: 2015, ipca: 10.67 },
  { ano: 2016, ipca: 6.28 },
  { ano: 2017, ipca: 2.95 },
  { ano: 2018, ipca: 3.75 },
  { ano: 2019, ipca: 4.31 },
  { ano: 2020, ipca: 4.52 },
];

// Seção que criar o menu da aplicação
console.log("\nEscolha uma das alternativas abaixo:\n\n1 - Listar os salários mínimos de 2010 até 2020\n2 - Listar o índice IPCA de 2010 até 2020\n3 - Comparação entre o percentual de aumento salarial e o IPCA");

// A variavel "opcao" tem a responsabilidade de coletar/salvar a opção do menu escolhida pelo usuário
let opcao = obterDados.question("\nDigite o número da sua escolha: ");

// Essa seção faz a validação da opção escolhida e com nisso ela executa a part do código ligada a opçao selecionada pelo usuário
if (opcao == 1) {

  // Essa seção permite listar todos os itens contidos na coleção de objetos "Salário minimo"
  for(let dados of salarioMinimo) {
    let ano = dados.ano;
    let salario = dados.salario;

    console.log("\nAno:".padEnd(32, ".") + ano);
    console.log("Salário mínimo:".padEnd(31, ".") + "R$ " + Number(salario).toFixed(2).replace('.', ','));
  }
} else if (opcao == 2) {
      
  // Essa seção permite listar todos os itens contidos na coleção de objetos "Inflação"
  for(let dados of inflacao) {
    let ano = dados.ano;
    let ipca = dados.ipca;

    console.log("\nAno:".padEnd(32, ".") + ano);
    console.log("Inflação IPCA:".padEnd(31, ".") + Number(ipca).toFixed(2).replace('.', ',') + "%");
  }
} else if (opcao == 3) {

  // Essa seção permite listar todos os itens contidos nas coleções de objetos "Salário minimo" e "Inflação" para calcular o percentual de crescimento do ano atual versus o atual
  for(let i = 0; i < salarioMinimo.length || i < inflacao.length; i++) {
    let ano = salarioMinimo[i].ano;
    let salario = salarioMinimo[i].salario;
    let ipca = inflacao[i].ipca;
    let dado = (i - 1) >= 0 ? (i - 1) : 0;
    let salarioAnterio = salarioMinimo[dado].salario;
    

    let diferenca = salario - salarioAnterio;
    let crescimento = (diferenca / salarioAnterio) * 100;
    console.log("\nAno:".padEnd(32, ".") + ano);
    console.log("Salário mínimo:".padEnd(31, ".") + "R$ " + Number(salario).toFixed(2).replace('.', ','));
    console.log("Crescimento Salarial:".padEnd(31, ".") + Number(crescimento).toFixed(2).replace('.', ',') + "%");
    console.log("Inflação IPCA:".padEnd(31, ".") + Number(ipca).toFixed(2).replace('.', ',') + "%");
    
  }
} else {
  console.log("\nOpção Inválida!");
}
