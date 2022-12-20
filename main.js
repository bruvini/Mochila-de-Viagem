const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')

//cria ação para obter os dados enviados ao apertar o submit
form.addEventListener('submit', (evento) => {
    evento.preventDefault() //evita que o formulário execute uma ação padrão

    //obter os valores dos inputs e insere na função de criar elemento
    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
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
}