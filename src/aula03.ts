interface Pessoa {
   idade: number;
   nome: string;
   isMaiorIdade: boolean;
   //teste: any; // Recebe qualquer tipo de dado
}

const pessoa: Pessoa = {
   idade: 30,
   nome: "Henrique",
   isMaiorIdade: true,
   //teste: "afjhakjshf",
};

console.log(pessoa);

//const numero: number = 543;
// let numero: number;

// numero = 543;

// if (numero < 10) {
//    numero = 32;
// }

// console.log(numero);
