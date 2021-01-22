const valores = [ 7.7, 8.9, 6.3, 9.4] /** é uma array com quatro posições */
console.log(valores[0], valores[3]) /** o array é indexado a indexacao começa em zeroele começa do zero  */
console.log(valores[4]) /** não da um erro mas informa que é undefined */


valores[4] = 10
console.log(valores)




console.log(valores.length) /** informa  a quantidade de elementos numa array     */

valores.push({id:3}, false, null, "teste") /**adiciona novos elementos no array */
console.log(valores)

console.log(valores.pop()) /** retorna o último elemento da array */
delete valores[0] /** retira o primeiro elemento da array */
console.log(valores) 

console.log(typeof valores)