const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')
const itens = []

//cria ação para obter os dados enviados ao apertar o submit
form.addEventListener('submit', (evento) => {
    evento.preventDefault() //evita que o formulário execute uma ação padrão

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    //obter os valores dos inputs e insere na função de criar elemento
    criaElemento(nome.value, quantidade.value)

    //apaga o input depois de enviado os dados
    nome.value = ''
    quantidade.value = ''
})

//função para criar item
function criaElemento(nome, qtd) {
    const novoItem = document.createElement('li')
    novoItem.classList.add('item')
    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = qtd
    novoItem.append(numeroItem)
    novoItem.innerHTML += nome
    lista.appendChild(novoItem)

    //armazenar no local storage
    const itemAtual = {
        'Nome': nome,
        'Quantidade': qtd
    }
    
    itens.push(itemAtual)
    localStorage.setItem('Item', JSON.stringify(itens))
    
}