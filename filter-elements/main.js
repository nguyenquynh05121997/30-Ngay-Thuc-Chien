const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const foodImages = $('.food__images')
const getBtns = $$('.btn')

const Api = `http://localhost:3000/Food`

getApi()

async function getApi() {
    // const res = await fetch(Api)
    // const data = await res.json()
    // renderData(data)

    const data = await ((await fetch(Api))).json()
    renderData(data)
}

function renderData (data) {
    let Htmls = data.map((img) => {
        return `
        <figure class="wrap-img">
            <img src="${img.url}" alt="" class="img">
        </figure>
        `
    })

    foodImages.innerHTML = Htmls.join('')
}

getBtns.forEach((btn) => {
    btn.addEventListener('click',(e) => {
        e.preventDefault()
        let type = btn.getAttribute('type')
        if(document.querySelector('.btn.active')){
            document.querySelector('.btn.active').classList.remove('active')
        }
        btn.classList.add('active')
        if(type !== 'All') {
            renderType(type)
        }
        else {
            getApi()
        }
    })  
})


async function renderType (type) {
    const res = await fetch(Api)
    const data = await res.json()

    let imgArr = data.filter((img) => {
        return img && img.type == type
    })
    renderData(imgArr)
}

// fetch(Api)
// .then((res) => {
//     return res.json()
// })
// .then((data) => {
//     let imgArr =  data.filter((img) => {
//         return img && img.type == type
//     })
//     return imgArr
// })

// .then((resolve) => {
//     renderData(resolve)
// })
// }




