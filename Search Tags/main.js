

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const getInput = $('.search-input')

const getEnter = $('.enter-btn')
const getSearchList = $('.search-list')
const getSearchItem = $('.search-item')
const getRemoveAll = $('.search-tag__btn')



let searchText = ''



function addSearch(value) {
    let getSection = document.createElement('section')
    getSection.classList.add('search-item')
    getSection.innerHTML = `<p class="search-text">${value}</p>
                            <i class="remove-icon fa-solid fa-xmark"></i>`
    getSearchList.appendChild(getSection)

    
    
}
function removeAll (element) {
    element.forEach((e)=>{
        e.remove()
    })
}



getInput.addEventListener('change', (e) =>{
    document.addEventListener('keypress',(event) =>{
        if(event.key === 'Enter' && e.target.value.length >= 1 ) {
            searchText = e.target.value
            addSearch(searchText)
            e.target.value = ''
        
            const getClose = $$('.remove-icon')
            const getAllSearchItem = $$('.search-item')
        
            getRemoveAll.addEventListener('click',() => {
                removeAll(getAllSearchItem)
            })
        
            getClose.forEach((e,index) => {
                e.addEventListener('click', () =>{
                    getAllSearchItem[index].remove()
                })
            })
        }
        
    })
    
    
})




   






    






