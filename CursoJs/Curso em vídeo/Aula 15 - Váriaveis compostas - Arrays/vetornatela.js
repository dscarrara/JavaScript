let valores = [8, 1, 7, 4, 2, 9]


console.log(valores)

console.log()
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

console.log('Primeiro exemplo tradicional')
for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log()

console.log('Segundo exemplo simplificado')
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
