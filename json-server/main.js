
const getAPI = `http://localhost:3000/person`
const getTableBody = document.querySelector('tbody')


function renderApi() {
    fetch(getAPI)
.then((res) => {
    return res.json()
})
.then((data) => {
    renderHtml(data)
})
}

function renderHtml (data) {
    let html = data.map((list,index) => {
        return `
        <tr>
        <td>${index+1}</td>
        <td>${list.name}</td>
        <td>${list.gender}</td>
        <td>${list.address}</td>
        <td>${list.phone}</td>
        <td>
            <button class="delete">Delete</button>
            <button class="edit">Edit</button>
        </>
    </tr>
        `
    })

    getTableBody.innerHTML = html.join('')
}

function createAPI(data) {
    fetch(getAPI,{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
      },
    body: JSON.stringify(data)
})
    .then((res) => {
        return res.json()
    })
    .then((person) => {
        
    })
}

function deleteAPI(id) {
    fetch(getAPI + '/' + id,{
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
          },
    })
    .then((res) => {
        return res.json()
    })

    .then((person) => {

    })
}

function handleCreateApi() {
    const getBtn = document.querySelector('.btn')
    getBtn.addEventListener('click',(e) => {
        e.preventDefault()
        let name = document.querySelector('#name').value
        let address = document.querySelector('#address').value
        let phone = document.querySelector('#tel').value
        let gender = document.querySelector('input[type="radio"]:checked').value
        
        let formData = {
            name: name,
            address: address,
            gender:gender,
            phone:phone
        }
        createAPI(formData)

    })
}

function handleDeleteApi() {
    const getDeleteBtn = document.querySelectorAll('.delete')
    getDeleteBtn.forEach((ele) => {
        e.addEventListener('click', (event) => {
            event.preventDefault()
            console.log(ele)
        })
    })
}

handleCreateApi()

renderApi()

handleDeleteApi()





