// classe do automovel
class Automovel {
  // construtor da classe
  constructor(nome, marca, modelo, paisFab) {
    this.nome = nome;
    this.marca = marca;
    this.modelo = modelo;
    this.paisFab = paisFab;
  }
  // get que retorna os atributos dos automóveis
  getAutomovel() {
    return `> É um ${this.nome}, da marca ${this.marca} modelo ${this.modelo} e fabricado no ${this.paisFab}`;
  }
}

// estância da classe
var exibAuto = new Automovel("Lancer", "Mitsubishi", "EvolutionX", "Japão");

//exibir os atributos do automóvel
console.log(exibAuto.getAutomovel());

// lista com marca e modelo - Item 1.2 e 1.3
const listaCarro = ["> Subaru Impreza", "> Chevrolet Opala"];

// for of - item 1.3
for (const itens of listaCarro) {
  console.log(itens);
}

// objeto de automóvel - item 2.1
const objAuto = {
  nome: "Fox",
  marca: "Volkswagen",
  modelo: "Pepper",
  cor: "Preto" // removido o atributo de país de origem e adiciobado a cor
};

/* não sei se era assim, mas deu muito a entender
que era pra se exibir assim o objeto */
console.log(objAuto);
