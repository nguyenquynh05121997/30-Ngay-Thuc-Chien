

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const getRangeSlice = $('.range-slice')
const getRangeValueText = $('.range-value')
const getRangePar = $('.range')
const getBg = $('.inner')

getRangePar.addEventListener ('mousemove', (event) => {
  let rangeValue = event.offsetX
  getRangeValueText.innerHTML = Math.round((rangeValue / getRangePar.offsetWidth * 100)) + '%'
  getRangeSlice.style.width = rangeValue + 'px'
  getBg.style.background = `rgba(0,0,0,${(rangeValue / getRangePar.offsetWidth).toFixed(2)}`
})



