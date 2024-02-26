interface ObjetoQualquer {
   funcao: (parametro1: number, parametro2?: number) => number;
}

const funcaoTeste = (parametro1: number, parametro2?: number): number => {
   if (!parametro2) {
      return parametro1;
   }

   return parametro1 + parametro2;
};

// const teste: ObjetoQualquer = {
//    funcao: funcaoTeste,
// };

// funcaoTeste(1);

const objetoQualquer: ObjetoQualquer = {
   funcao: funcaoTeste,
};

console.log(objetoQualquer.funcao(1));
