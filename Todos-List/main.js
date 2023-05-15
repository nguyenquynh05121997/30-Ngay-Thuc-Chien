

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const getInput = $('input[type="text"]')
const getAddTodo = $('.btn')
const getList = $('.todo__list')
const getListNumber = $('.list-number')
const getClearAllBtn = $('.clear-btn')

let value = JSON.parse(localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : [] 
getListNumber.innerHTML = value.length
if(value.length > 0) {
  

  renderHTML(value)
  removeTodo(value)
}

getAddTodo.addEventListener('click',() =>{
  getList.style.display = 'block'
  let inputValue = getInput.value.trim();
  if(inputValue.length >= 6) {
    value.unshift({
      name: inputValue,
      index: 1
    })
    localStorage.setItem('todo',JSON.stringify(value))

    renderHTML(value)
    removeTodo(value)

    getInput.value = ''
    getListNumber.innerHTML = value.length
  }
})

document.addEventListener('keyup',(event) =>{
  if(event.code === 'Enter') {
    getList.style.display = 'block'
    let inputValue = getInput.value.trim();
    if(inputValue.length >= 6) {
      value.unshift({
        name: inputValue,
        index: 1
      })
      localStorage.setItem('todo',JSON.stringify(value))
  
      renderHTML(value)
      removeTodo(value)
  
      getInput.value = ''
      getListNumber.innerHTML = value.length
    }
    
  }
})

function renderHTML(inputArr) {
    let htmls = inputArr.map((item) => {
        return `
        <li class="todo__item">
        <span class="item-text">${item.name}</span>
        <div class="item-icon">
            <i class="fa-solid fa-trash-can del"></i>
        </div>
        `
    })

    getList.innerHTML = htmls.join('')
}

function removeTodo(inputArr) {
  const getDelIcon = $$('.del')

  getDelIcon.forEach((iconItem) => {
    iconItem.addEventListener('click', () => {
      const getPar = iconItem.parentElement.parentElement
      let textValue = getPar.innerText.trim()

      inputArr.forEach((item,index) => {
        if(item.name === textValue) {
          inputArr.splice(index,1)
          getPar.remove()
          localStorage.setItem('todo',JSON.stringify(inputArr))
          getListNumber.innerHTML = inputArr.length
        }
      })
    })
  })
}

getClearAllBtn.addEventListener('click', () => {
  value.splice(0,value.length)
  localStorage.setItem('todo',JSON.stringify(value))
  getListNumber.innerHTML = '0'
  getList.style.display = 'none'
})

const getFakeApi = `http://localhost:3000/person`

fetch(getFakeApi)
.then( response => {
  return response.json()
})
.then(person => {
  person.forEach((dataPerson) => {
    dataPerson.name = 'NGuyen van long'
    JSON.stringify(person)

    console.log(person)
  })
})



















