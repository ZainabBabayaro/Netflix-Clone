const movieContainer = document.querySelector(".movie-container")
const movieTitle = document.querySelector(".movie-title")

let pageCounter = 1


// API for get requests
const fetchMovies = (pageNum) => {
    movieContainer.innerHTML = ""
    fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=613f0b2b&s=super&page=${pageNum}`).then(res =>
            res.json()).then(d => {
                let movieT = d.Search


                for (let i = 0; i < movieT.length; i++) {
                    movieContainer.innerHTML += `<div class="w-60 h-80  bg-slate-200 ml-10  mb-10 rounded ">
                 <div class=" movie-title  h-9  text-black text-center">${movieT[i].Title} </div>
                 <img src="${movieT[i].Poster}" alt="ant-man" class="w-60 h-60">
                 <div class=" h-9 text-black text-center">${movieT[i].Year}</div>
                 </div>`

                }

                displayPageNumber()
                return movieT
            })
}
fetchMovies(pageCounter)

function displayPageNumber() {
    const pageNumber = document.querySelector('.page-number')
    pageNumber.textContent = pageCounter
}

function fetchNext() {
    pageCounter++
    fetchMovies(pageCounter)
}


function fetchPrevious() {
    if (pageCounter === 1) {
        return
    }
    pageCounter--
    fetchMovies(pageCounter)
}

let searchInput = document.querySelector('.search-input').value
let searchButton = document.getElementById('search-button')



function search() {

    fetchMovies(movieT)

    if (!(movieT.includes(searchInput))) {
        console.log('Not Found')
    } else {

    }
}
searchButton.addEventListener("click", search)


// function search() {
//     let searchInput = document.querySelector('.search-input').value

//     let searchTerm = " "

//     if (searchTerm === searchInput) {

//         for (let i = 0; i < movieT.length; i++) {
//             movieContainer.innerHTML += `<div class="w-60 h-80  bg-slate-200 ml-10  mb-10 rounded ">
//          <div class=" movie-title  h-9  text-black text-center">${movieT[i].Title} </div>
//          <img src="${movieT[i].Poster}" alt="ant-man" class="w-60 h-60">
//          <div class=" h-9 text-black text-center">${movieT[i].Year}</div>
//          </div>`

//         }

//         fetchMovies(se)
//         console.log("rice")
//     }

// 