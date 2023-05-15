

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const getSuccessBtn = $('.success')
const getWarningBtn = $('.warning')
const getErrorBtn = $('.error')
const getToastMessageSuccess = $('.toast-message--success')
const getToastMessageWarning = $('.toast-message--warning')
const getToastMessageError = $('.toast-message--error')
const getParentToast = $('.toast-message-block')

function handleButton (btnName,messageName) {
    btnName.addEventListener('click', () => {
      let createE =  document.createElement('section')
      

      if(btnName === getSuccessBtn) {
        createE.className = 'toast-message toast-message--success hide'
  
        createE.innerHTML = `
          <i class="fa-solid fa-circle-check"></i>
          <span class="text">Success Notification</span>
        `
      }
      else if(btnName === getWarningBtn) {
        createE.className = 'toast-message toast-message--warning hide'

        createE.innerHTML = `
        <i class="fa-solid fa-triangle-exclamation"></i>
        <span class="text">Success Warning</span>
        `
      }
      else if(btnName === getErrorBtn) {
        createE.className = 'toast-message toast-message--error hide'

        createE.innerHTML = `
          <i class="fa-solid fa-circle-xmark"></i>
          <span class="text">Success Error</span>
        `
      }
      getParentToast.appendChild(createE)

      setTimeout(()=> {
        createE.classList.add('show')
      },500)

      setTimeout(() => {
        createE.classList.remove('show')
        setTimeout(() => {
          createE.remove()
        },500)
      },2000)
    })
}

handleButton(getSuccessBtn)
handleButton(getWarningBtn)
handleButton(getErrorBtn)
