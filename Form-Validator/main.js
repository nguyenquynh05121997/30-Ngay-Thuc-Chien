

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const getInputs = $$('.input')
const getName = $('.name')
const getBtn = $('.btn')

getInputs.forEach((input,index) => {
    const getMessage = input.parentElement.querySelector('.message')
    const getLine = input.parentElement.querySelector('.line')
    const getLabel = input.parentElement.querySelector('.label-text')
    input.addEventListener('change', (evt) => {
        let inputValue = input.value.trim()

        if(inputValue.length != '') {
            getLabel.style.top = '0'
        }

        else {
            getLabel.style.top = '50%'
        }

        if(inputValue.length < 6) {
            getMessage.innerHTML = 'Vui long nhap dung truong nay'
        }
        else {
            getMessage.innerHTML = ''
        }

    })
})

const getPass = $('.password')
const getCfPass = $('.cf-password')
const getEmail = $('.email')

const cfPassMessage = getCfPass.offsetParent.querySelector('.message')
const emailMessage = getEmail.offsetParent.querySelector('.message')

getEmail.addEventListener('change', () => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(regex.test(getEmail.value.replaceAll(' ',''))) {
        emailMessage.innerHTML = ''
    }
    else {
        emailMessage.innerHTML = 'Nhap dung truong la email'
    }

    getEmail.value = getEmail.value.replaceAll(' ','')
})

getCfPass.addEventListener('change', () => {
    if(getCfPass.value.replaceAll(' ','') !== getPass.value.replaceAll(' ','')) {
        cfPassMessage.innerHTML = 'vui long nhap lai dung mat khau'
    }
    else {
        cfPassMessage.innerHTML = ''
    }

    getCfPass.value = getCfPass.value.replaceAll(' ','')
    getPass.value = getPass.value.replaceAll(' ','')
})

function formInfo() {
 getBtn.addEventListener('click', () => {
    console.log({ 
        name:getName.value,
        email:getEmail.value,
        password:getCfPass.value
    })
})
}








    






