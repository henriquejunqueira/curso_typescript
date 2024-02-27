class Outro {
   endereco: string;

   constructor() {
      this.endereco = "";
   }
}

interface Carro {
   idade: number | string;
   nome: string;
}

interface Bicicleta {
   rodas: number;
}

const funcao = (validacao: boolean): Carro | Bicicleta | Outro => {
   if (validacao) {
      return {
         idade: 32,
         //idade: "um",
         nome: "gol",
      };
   }

   return {
      rodas: 4,
      endereco: "fdsfs",
   };
};

const resultado = funcao(false);

if (resultado instanceof Outro) {
   console.log("É do tipo: outro");
}

if ("idade" in resultado) {
   if (typeof resultado.idade === "string") {
      //console.log(resultado.nome);
      console.log(resultado.idade);
   }
}

if ("rodas" in resultado) {
   console.log(resultado.rodas);
}
