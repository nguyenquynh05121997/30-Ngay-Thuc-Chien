
const Products = [
    {
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    name : "Fjallraven - Foldsack No. 1 Ba",
    price : '$109.95'
    },
    {
        image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        name : "Mens Casual Premium Slim Fit T",
        price : '$22.3'
    },
    {
        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        name : "Mens Cotton Jacket",
        price : '$55.99'
    },
    {
        image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        name : "Mens Casual Slim Fit",
        price : '$15.99'
    },
    {
        image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
        name : "John Hardy Women's Legends Nag",
        price : '$109.95'
    },
    {
        image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
        name : "Fjallraven - Foldsack No. 1 Ba",
        price : '$109.95'
    },
    {
        image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
        name : "Fjallraven - Foldsack No. 1 Ba",
        price : '$109.95'
    },
]


const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const listProducts = $('.list-products')
const searchInput = $('#search')
const noProduct = $('.no-product')

let productArr = []

start()
function start() {
    renderListProduct(Products)
    searchProduct()

}

// function

// Render List Product
function renderListProduct (Arr) {
    let htmls = Arr.map((product) => {
        return `
        <div class="product">
            <img src="${product.image}" alt="" class="img">
            <div class="product-info">
                <h2 class="product-name">${product.name}</h2>
                <span class="product-price">${product.price}</span>
        </div>
        </div>
        `
    })

    listProducts.innerHTML = htmls.join('')
}

function searchProduct () {

    searchInput.addEventListener('input',(e) => {
        let inputValue = e.target.value.toLowerCase()
        let newProduct =  Products.filter((product) => {
            let productName = product.name.split(' ').join('').toLowerCase()
            let productPrice = product.price.split('$').join('').toLowerCase()
            if(productName.includes(inputValue) || productPrice.includes(inputValue)) {
                return product
            }
        })
        if(newProduct.length > 0) {
            renderListProduct(newProduct)  
            noProduct.classList.add('hidden')
        }
        else {
            renderListProduct(newProduct)  
            noProduct.classList.remove('hidden')
        }
    })

}





