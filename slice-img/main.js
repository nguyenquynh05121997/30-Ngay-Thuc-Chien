

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const images = [
    {
      path: "https://dwuwz.csb.app/img9.jpeg"
    },
    {
      path: "https://dwuwz.csb.app/img8.jpeg"
    },
    {
      path: "https://dwuwz.csb.app/img7.jpeg"
    },
    {
      path: "https://dwuwz.csb.app/img6.jpeg"
    },
    {
      path: "https://dwuwz.csb.app/img5.jpeg"
    },
    {
      path: "https://dwuwz.csb.app/img4.jpeg"
    },
    {
      path: "https://dwuwz.csb.app/img3.jpeg"
    },
    {
      path: "https://dwuwz.csb.app/img2.jpeg"
    },
    {
      path: "https://dwuwz.csb.app/img1.jpeg"
    }
]

const bigImage = $('.big-image')
const smallImage = $('.small-image')
const nextBtn = $('.next.icon')
const prevBtn = $('.prev.icon')



let indexSlice = 6


start()

function start () {
  renderImage()
  starShowImg(indexSlice)
  handleShowImage()
}

// function
function renderImage() { 
  renderBigImage(indexSlice)
  renderSmallImage()   
}

function renderBigImage (index) {
    // render Big Image
    bigImage.innerHTML = `
    <img class="big-img" src="${images[index].path}" alt="">
    <div class="arrow-icon">
        <i onclick = "clickNextBtn()" class="fa-solid fa-angle-right icon next"></i>
        <i onclick = "clickPrevBtn()" class="fa-solid fa-angle-left icon prev"></i>
    </div>
    `
}

function renderSmallImage () {
      // Render Small Image
      let htmlSmallImg = images.map((image)=> {
        return `
        <img class="small-img" src="${image.path}" alt="">
        `
    })
    smallImage.innerHTML = htmlSmallImg.join('')
}

function starShowImg (index) {
  showBigImg(index)
  handleActiveImg(index)
}

function showBigImg(index) {
  const bigImg = $('.big-img')
  bigImg.src = images[index].path
}

function handleShowImage () {
    const smallImg = $$('.small-img')
    smallImg.forEach((item,i) => {
      item.addEventListener('click',() => {
        indexSlice = i
        handleActiveImg(indexSlice)
        showBigImg(indexSlice)
      })
    })

}

function handleActiveImg (index) {
  const smallImg = $('.small-img.active')
  if(smallImg) {
    smallImg.classList.remove('active')
  }
  const getSmall = $$('.small-img')
  getSmall[index].classList.add('active')
}


// Next - Prev Image
function clickNextBtn() {
    indexSlice++
    if(indexSlice > images.length - 1) {
      indexSlice = 0
    }
    showBigImg(indexSlice)
    handleActiveImg(indexSlice)

}
function clickPrevBtn() {
  indexSlice--
  if(indexSlice < 0) {
    indexSlice = images.length - 1
  }
  showBigImg(indexSlice)
  handleActiveImg(indexSlice)
}








