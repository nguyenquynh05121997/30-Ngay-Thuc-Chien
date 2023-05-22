const getText = document.querySelector('.text')

let textString = getText.innerText

function renderText (text) {
    getText.innerHTML = text
}

let textArr = []
let index = 0
let i = textString.length

    
let times = setInterval(() => {
        textArr[index] = textString[index]
        let textHtml = textArr.join('')
        renderText(textHtml)
        index++
        if(index > textString.length - 1) {
            index = textString.length
            textArr.splice(i,1)
            renderText(textHtml)
            i--
            if(i < 0) {
                i = index 
                index = 0
            }
        }
},200)


