interface Pessoas {
   idade: number;
   nome: string;
}

interface Usuarios {
   //pessoas: any;
   //pessoas: Pessoas;
   //pessoas: Array<Pessoas>;
   pessoas: Pessoas[];
   cidade: string;
}

const usuario: Usuarios = {
   cidade: "Caxambu",
   /*pessoas: {
      idade: 30,
      nome: "Henrique",
   },*/
   pessoas: [
      {
         idade: 30,
         nome: "Henrique",
      },
      {
         idade: 26,
         nome: "Maria",
      },
      {
         idade: 45,
         nome: "João",
      },
   ],
};

console.log(usuario.pessoas.length);
console.log(usuario);
