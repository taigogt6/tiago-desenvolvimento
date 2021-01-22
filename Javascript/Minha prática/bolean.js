let isAtivo=false
console.log(isAtivo)

isAtivo = true
console.log(!!isAtivo)

isAtivo = 1
console.log(!isAtivo)

console.log('os verdadeisros..')
console.log(!!3)
console.log(!!-1)
console.log(!!'texto')
console.log(!![])
console.log (!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = Infinity))
console.log(!!(isAtivo = 33))
console.log(!!(isAtivo = 0)) /** é falso pq só pega o zero */


console.log("os falsos")

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!! (isAtivo=false) )

console.log('para finalizar...')
console.log (!!('' || null || 0 || ' '))
console.log (('' || null || 0 || ' Oi '))

let nome = ''
console.log(nome || 'desconhecido')

let nome = 'Lucas'
console.log(nome || 'desconhecido')