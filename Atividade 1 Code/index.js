// 1- variável imutável de nome
const nome = "Ailton";

// 2- variável mutável se está chovendo ou não
var vaiChover = true;

// 3- variável com data de nascimento
const birth = "19/01/2002";

// 4- variável numérica retribuida a outro número
const idadeAt = 18 + 1; // minha idade real ksksksk

// 5- lista numérica
const lNum = "1, 2, 3, 4, 5, 6, 7, 8, 9 e 10";

// 6- objeto com dados de uma aluna (que na vdd é minha namorada ksksksksk)
const aluna = {
  //dados da aluna
  nome: "Maria",
  birth: "13/05/2001",
  bio: "Ela tbm faz este curso XD!"
};

// 7- objetos para exibir os dados
const dados = {
  rNome: nome, // a que recebe nome
  prevTempo: vaiChover, // recebe boolean do tempo
  rDataNasc: birth, // recebe data de nascimento
  idadeS: idadeAt // recebe "número qualquer" e soma com 1
};

// 8- não sei como descrever essa questão skksksk
let x = 10 * 43;

// 9- Lista de objetos
const aluno3 = {
  //dados do aluno
  nome: "Pepe",
  birth: "18/05/1999",
  bio: "Acho que esta jogando algo na Steam"
};

const aluna4 = {
  //dados da aluna
  nome: "Fernanda",
  birth: "25/06/2003",
  bio: "está passando raiva em Java, certeza!"
};

// 10- multiplicando outra variável por outro número
let j = 54 * 528;

// saída de dados
console.log(dados, aluna, aluna3, aluna4);

// exibindo a lista numérica
console.log("Lista Numérica: " + lNum);

// resultado das variáveis multiplicadas
console.log("X é igual a: " + x + " enquanto J é igual a " + j + ".");