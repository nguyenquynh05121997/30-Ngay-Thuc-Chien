const picture = [
    {
       path: 'https://www.nodemy.vn/projects/html-css-js/image-gallery/img1.jpeg' 
    },
    {
        path: 'https://www.nodemy.vn/projects/html-css-js/image-gallery/img2.jpeg' 
     },
     {
        path: 'https://www.nodemy.vn/projects/html-css-js/image-gallery/img3.jpeg' 
     },
     {
        path: 'https://www.nodemy.vn/projects/html-css-js/image-gallery/img4.jpeg' 
     },
     {
        path: 'https://www.nodemy.vn/projects/html-css-js/image-gallery/img5.jpeg' 
     },
     {
        path: 'https://www.nodemy.vn/projects/html-css-js/image-gallery/img6.jpeg' 
     },
     {
        path: 'https://www.nodemy.vn/projects/html-css-js/image-gallery/img7.jpeg' 
     },
     {
        path: 'https://www.nodemy.vn/projects/html-css-js/image-gallery/img8.jpeg' 
     },
     {
        path: 'https://www.nodemy.vn/projects/html-css-js/image-gallery/img3.jpeg' 
     },
]

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
// render Img
const getParentImg = $('.image')
const getBigImg = $('.big__img')
const getClose = $('.close')
const getNext = $('.next')
const getPrev = $('.prev')




function renderImg() {
    let htmls = picture.map((e)=> {
        return `
        <figure class="parent"><img src="${e.path}" alt=""></figure>
        `
    })
    getParentImg.innerHTML = htmls.join('')
}
renderImg()

const getImg = $$('.image .parent img')
let currentIndex = 0

// show Img
function showImg() {
    // show hide icon

    if(currentIndex <= 0) {
        getPrev.classList.add('hide')
        getNext.classList.remove('hide')   
    }
    else if(currentIndex >= picture.length - 1) {
        getNext.classList.add('hide')
        getPrev.classList.remove('hide')
    }
    else {
        getNext.classList.remove('hide')
        getPrev.classList.remove('hide')
    }
    getBigImg.classList.remove('hide')
    let changeImg = getBigImg.querySelector('img')
    changeImg.src = picture[currentIndex].path
}
function hideImg() {
    getBigImg.classList.add('hide')
}
// Event Click
getImg.forEach((e,index) => {
    currentIndex = 0
    e.addEventListener('click', function() {
        currentIndex = index
        showImg()
        getNext.addEventListener('click', function() {
            index++
            currentIndex = index
            showImg()
        })
        getPrev.addEventListener('click', function() {
            index --
            currentIndex = index
            showImg()
        })
    })

    document.addEventListener('keydown',function(ele) {
        if(ele.keyCode == 27) {
            hideImg()
        }
    })
    getClose.addEventListener('click', function() {
        hideImg()
    })
})






















