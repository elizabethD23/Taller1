// EJERCICIO 1
distanciaPlanetas = (num1,num2) => Math.sqrt(Math.pow(num1,2) + 
Math.pow(num2,2)).toFixed(2)

console.log(`La distancia del planeta Marte: ${distanciaPlanetas(0,40)}`)
console.log(`La distancia del planeta Jupiter: ${distanciaPlanetas(70,-50)}`)
console.log(`La distancia del planeta Mercurio: ${distanciaPlanetas(-10,-10)}`)
console.log(`La distancia del planeta Venus: ${distanciaPlanetas(50,0)}`)