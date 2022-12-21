const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')
const itens = JSON.parse(localStorage.getItem('itens')) || []

itens.forEach((elemento) => {
    criaElemento(elemento)
})

//cria ação para obter os dados enviados ao apertar o submit
form.addEventListener('submit', (evento) => {
    evento.preventDefault() //evita que o formulário execute uma ação padrão

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    const existe = itens.find(elemento => elemento.Nome === nome.value)
    console.log(existe)

    //armazenar no local storage
    const itemAtual = {
        'Nome': nome.value,
        'Quantidade': quantidade.value
    }

    if (existe) {
        itemAtual.id = existe.id
        atualizaElemento(itemAtual)
        itens[existe.id] = itemAtual
    } else {
        itemAtual.id = itens.length
        //obter os valores dos inputs e insere na função de criar elemento
        criaElemento(itemAtual)
        itens.push(itemAtual)
    }

    localStorage.setItem('itens', JSON.stringify(itens))

    //apaga o input depois de enviado os dados
    nome.value = ''
    quantidade.value = ''
})

//função para criar item
function criaElemento(item) {
    const novoItem = document.createElement('li')
    novoItem.classList.add('item')

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.Quantidade
    numeroItem.dataset.id = item.id
    novoItem.append(numeroItem)

    novoItem.innerHTML += item.Nome
    lista.appendChild(novoItem)
}

function atualizaElemento(item){
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.Quantidade
}