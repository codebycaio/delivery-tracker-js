let listaEntregas = []
const res = document.querySelector('#resultado')

function registrar() {
    const entregas = Number(document.querySelector('#txtValor').value)

    if (entregas > 0) {
        listaEntregas.push(entregas)
    } else {
        window.alert('ERRO: Insira um número válido!')
        return
    }

    res.innerHTML = `Foram feitas ${listaEntregas.length} entregas.`

    document.querySelector('#txtValor').value = ''
    document.querySelector('#txtValor').focus()
}

function finalizar() {
    let total = 0

    if (listaEntregas.length <= 0) {
        window.alert('Nenhuma entrega registrada!')
        return
    } else {
        for (let i = 0; i < listaEntregas.length; i++) {
            total += listaEntregas[i]
        }
    }

    res.innerHTML += `<br><br>Total de taxas: R$${total}.`
}