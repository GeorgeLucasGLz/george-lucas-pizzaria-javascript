const list = document.querySelector('#menu')
let mostrarTotal = document.querySelector('#mostrarTotal')
const btnMostrarTudo = document.getElementById('forEachBtn')
const btnDesconto = document.querySelector('#mapDesconto')
const btnSomaTotal = document.querySelector('#reduceBtn')
const btnFilterVegano = document.querySelector('#filterBtn')
const footer = document.querySelector('footer')
btnMostrarTudo.addEventListener('click', () => MostrarTudo(menuOptions))
btnDesconto.addEventListener('click', desconto)
btnSomaTotal.addEventListener('click', somaTotal)
btnFilterVegano.addEventListener('click', filterVegan)
mostrarTotal.style.opacity = 0

function formatCurrency(value) {
    /*
    usando "Intl.NumberFormat"
        const newValue = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value)
    
        return newValue
    */
    //OU usando "toLocaleString"

    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })

    return newValue
}



function MostrarTudo(productArray) {

    let myLi = ''
    list.style.opacity = 0
    list.style.visibility = 'hidden'

    productArray.forEach(product => {

        myLi += `
        <li class="card">
            <img src=${product.src} class="img" id="menor">
            <p>${product.name}</p>
            <p>${formatCurrency(product.price)}</p>
        </li>
        `
    })

    list.style.opacity = 0
    list.style.visibility = 'visible'
    setTimeout(function () {
        list.style.transition = 'opacity 0.6s ease-in-out'
        list.style.opacity = 1
        list.innerHTML = myLi
        mostrarTotal.style.opacity = 0

    }, 500)


}

function desconto() {

    let newPrice = menuOptions.map(product => ({

        ...product,
        price: product.price - (product.price * 10 / 100)

    }))

    MostrarTudo(newPrice)

    mostrarTotal.style.opacity = 0


}

function somaTotal() {

    mostrarTotal.style.visibility = 'hidden'
    mostrarTotal.style.opacity = 0

    let totalValue = menuOptions.reduce((acc, value) => {

        return acc + value.price
    }, 0)

    mostrarTotal.innerHTML = `
        <li id="card">
            
            <p>A soma total de todos os produtos é ${formatCurrency(totalValue)}</p>

        </li>`

    mostrarTotal.style.visibility = 'visible'
    setTimeout(function () {

        mostrarTotal.style.opacity = 1
        mostrarTotal.style.transition = 'opacity 0.5s ease-in-out'
        mostrarTotal.style.display = 'flex'
        mostrarTotal.style.justifyContent = 'center'
        mostrarTotal.style.padding = '10px'
        mostrarTotal.style.backgroundColor = 'rgba(29, 29, 29, 0.7)'
    }, 500)




    list.innerHTML = ''

}


function filterVegan() {
    
  

    const showSweet = menuOptions.filter(product => {

        if (product.sweet === true) {
            return true
        } else {
            return false
        }
    })
   

  
        MostrarTudo(showSweet)
        mostrarTotal.style.opacity = 0
   
    








}

