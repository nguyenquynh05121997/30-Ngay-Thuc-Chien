
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const preview = $('.preview')
const upFile = $('#upfile')

upFile.addEventListener('change',(e) => {
    const error = $('.error')
    const img = $('.img')
    let imgPreview = e.target.files[0]
    if(imgPreview.type.includes('image/jpeg')) {
        error.innerHTML = ''
        img.src = URL.createObjectURL(imgPreview)
    }
    else {
        error.innerHTML = `Vui lòng up load đúng định dạng`
    }
    
})
