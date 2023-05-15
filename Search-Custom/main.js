
const $ =document.querySelector.bind(document)
const $$ =document.querySelectorAll.bind(document)

const getBtn = $('.search__btn')
const getSearch = $('.search')

let isOpen = false

getBtn.addEventListener('click', function() {
    isOpen = !isOpen
    if(isOpen) {
        getSearch.classList.add('open')
    }
    else {
        getSearch.classList.remove('open')
    }
})
