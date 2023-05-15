

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const getPressBtn = $('.press-btn')
const getOpenPress = $('.press-key')

const getCodeKey = $('.code-key-text')
const getCodeValue = $$('.key-code-value')


document.addEventListener('keydown', (e) => {
    let getArr = []
    getOpenPress.classList.add('open')

    getCodeKey.innerHTML = e.keyCode
    
    getArr.push(e.key)
    getArr.push(e.location)
    getArr.push(e.which)
    getArr.push(e.code)
    
    getCodeValue.forEach((e,index) => {
        e.innerHTML = getArr[index]
    })

})

