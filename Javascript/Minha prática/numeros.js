const peso1 = 1.2
const peso2 = Number('2.0')
console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) /** esse Number é uma função */
console.log(Number.isInteger(peso2))

const avaliacao1=9.895
const avaliacao2=5.87

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/(peso1 + peso2)

console.log(media)

console.log(media.toFixed(2)) /**definindo casas decimais */

console.log(media.toString()) /**transformando em string */
console.log(media.toString(2)) /** valor binário */
console.log(typeof media) /** define o tipo */
console.log(typeof Number) /** é uma função */
console.log(media.parseInt)
