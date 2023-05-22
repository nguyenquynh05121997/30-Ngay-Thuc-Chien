"use strict"

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const body = $('body')
const toggle = $('.toggle')

const logo = $('.logo')
const title = $('.title')
const subTitle = $('.sub-title')
const content = $('.content')
const btns = $$('.btn')

let isToggle = false
toggle.addEventListener('click',()=> {
    isToggle = !isToggle

    if(isToggle) {
        toggle.classList.add('active')
        nightMode()
    }
    else {
        toggle.classList.remove('active')
        removeNightMode()
    }
})

function nightMode() {
    logo.classList.add('night')
    title.classList.add('night')
    content.classList.add('night')
    subTitle.classList.add('night')
    body.classList.add('night')
    btns.forEach((btn) => {
        btn.classList.add('night')
    })
}

function removeNightMode() {
    logo.classList.remove('night')
    title.classList.remove('night')
    content.classList.remove('night')
    subTitle.classList.remove('night')
    body.classList.remove('night')

    btns.forEach((btn) => {
        btn.classList.remove('night')
    })
}

function createCount () {
    let count = 0
    function Count() {
        return ++count
    }
}

