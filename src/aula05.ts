interface Estado {
   nome: string;
}

interface Cidade {
   nome: string;
   estado: Estado;
}

interface Endereco {
   rua: string;
   bairro: string;
   cidade: Cidade;
   complemento?: string; // a interrogacão indica que o atributo é opcional e vai tirar o erro do código
}

const endereco: Endereco = {
   bairro: "Centro",
   rua: "Rua do 123",
   //complemento: "apt401",
   cidade: {
      nome: "Rio de Janeiro",
      estado: {
         nome: "Rio de Janeiro",
      },
   },
};

// console.log(endereco.complemento?.substring(3));
console.log(endereco.complemento?.substring(3) || "DEU ERRO");
console.log(endereco);
