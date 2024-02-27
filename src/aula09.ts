interface Andar {
   passos: number | null;
}

const andar: Andar = {
   passos: null,
};

const funcaoTest = (): undefined | number => {
   if (andar.passos && andar.passos > 5) {
      return 543;
   }
   return undefined;
};

const outroNome = funcaoTest();

if (!andar.passos) {
   console.log("é nulo");
}

if (outroNome) {
   outroNome.toFixed();
}

console.log("andar", andar);

// let teste;

// if (teste === null) {
//    console.log("Valor2: ", teste);
// } else {
//    console.log("não é nulo");
// }

// if (!teste) {
//    console.log("Valor2: ", teste);
// } else {
//    console.log("não é nulo");
// }

// const funcaoTeste = (): undefined => {
//    console.log("FuncaoTeste");
//    return undefined;
// };

// const funcaoTeste = (): void => {
//    console.log("FuncaoTeste");
// };

// const funcaoTeste = () => {
//    console.log("FuncaoTeste");
// };

// console.log("Valor: ", teste);
