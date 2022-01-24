let num = [5, 8, 2, 9, 3]

//num[3] = 6 // Acrescenta o número 6 na posição 3 
num.push(1) //Acrescenta um número ao final da array
num.sort() // Ordena a array de forma crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vertor é ${num[0]}`)


let pos = num.indexOf(8) // Procura o número e retorna a posição. Caso não encontre retorna -1
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}

