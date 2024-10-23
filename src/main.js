console.log("Connected");

/* /breeds/list/all = All breads 

/* breed/{breedName}//images/random = single image */
const selectEl = document.querySelector("select")
// API

const BASE_URL = `https://dog.ceo/api/`

// .fetch(`${BASE_URL}breeds/list/all`)
//     .then((data) => {
//     reurndata.json()
// })
// then((data)=> console.log(data))
function getDogBreeds() {
    return fetch(`${BASE_URL}breeds/list/all`)
        .then((res) => res.json())
        .then((data) => {
            console.log(Object.keys(data.message))
            return Object.keys(data.message)
        })
        .catch((error) => console.log(error))
}

getDogBreeds()

console.log("end")