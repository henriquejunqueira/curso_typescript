const funcaoCallback = (valor: number): void => {
   console.log("Funcionou " + valor);
};

const funcaoTeste2 = (
   valor1: number,
   valor2: number,
   callback: (valor: number) => void,
): string => {
   if (valor1 > valor2) {
      callback(valor1);
   }
   return "";
};

funcaoTeste2(523, 32, funcaoCallback);

funcaoTeste2(43, 32, (x: number) => {
   console.log("outra função " + x);
});
