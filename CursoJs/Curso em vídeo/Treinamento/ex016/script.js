function contar() {

    //Coletando os dados da caixa de texto
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')
    
    // Verificando se as caixas de texto estão vazias
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Inmpossível Contar! [Revise os dados]'
    } else {
        res.innerHTML = 'Cotando: <br>'

        // Declarando as variaveis em formato númerico
        let i = Number.parseFloat(ini.value)
        let f = Number.parseFloat(fim.value)
        let p = Number.parseFloat(pas.value)

        if (p <= 0) {
            alert('PASSO inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            // Contagem Crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f449}` // emoji mão apontando
            }
        } else {
            // Contagem Regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449}` // emoji mão apontadon
            }
        }
        res.innerHTML += `\u{1f3c1}` // emoji bandeira
    }
}