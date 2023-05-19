
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const box1 = $('.box1')
const box2 = $('.box2')
const box3 = $('.box3')


const h1Text = $('.h1-text')
const box1PText = $('.box1 .p-text')
const box2Boxs = $$('.box2-box')
const numberToUp = $$('.number-to-up')

// copy Number ban dau
let numberArr = []
numberToUp.forEach((item) => {
    numberArr.push(+item.innerText)
})  


function showBox1() {
    h1Text.classList.add('open')
    box1PText.classList.add('open')
}

function showBox2 () {
    box2Boxs.forEach((box) => {
        box.classList.add('open')
    })
}

function hideBox1() {
    h1Text.classList.remove('open')
    box1PText.classList.remove('open')
}

function hideBox2 () {
    box2Boxs.forEach((box) => {
        box.classList.remove('open')
    })
}

window.addEventListener('scroll',(event) => {
    console.log(this)
    let spaceTop = this.scrollY
    if(spaceTop < box1.offsetHeight - 100) {
        showBox1()
    }
    else {
        hideBox1()
    }

    if(spaceTop > box1.offsetHeight / 2 && spaceTop < 2*box1.offsetHeight  - 100) {
        showBox2()
    }
    else {
        hideBox2()
    }

})



function render(value,element) {
    element.innerHTML = value
}


function upNumber (valueElementNumber,element) {
    let times = 100
    let count = 0
    let upTime = setInterval(()=> {
        count += Math.round(valueElementNumber / times) 
        if(count > valueElementNumber) {
            count = valueElementNumber
            clearInterval(upTime)
        }
        render(count,element)
    },10)
}


function sliceNumber() {
    numberToUp.forEach((item) => {
        let itemValue = +item.innerText
        upNumber(itemValue,item)
    })
}


sliceNumber()
