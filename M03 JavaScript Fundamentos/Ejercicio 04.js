/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   var resultado = Math.pow(num, 2);
   console.log('el cuadrado e: '+resultado);
   return resultado;
}
elevarAlCuadrado(6);

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   var resultado = Math.pow(num, 3);
   console.log('el cubo de un numero es: '+resultado);
   return resultado;
}
elevarAlCubo(3);

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   var resultado = Math.pow(num, exponent);
   console.log('el numero es: '+resultado);
   return resultado;
}
elevar(2,4)

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   resultado =Math.round(num);
   console.log(resultado);
   return resultado;
}
redondearNumero(7.225349)

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   resultado =Math.ceil(num);
   return resultado;
}
redondearNumero(18.32612)

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   var resultado = Math.random();
   return resultado;
}
numeroRandom();

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
