const movieContainer = document.querySelector(".movie-container")

let pageCounter = 1

let display = "love"
// API for get requests
const fetchMovies = (pageNum, display) => {
    movieContainer.innerHTML = ""
    fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=613f0b2b&s=${display}&page=${pageNum}`).then(res =>
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

            })
}
fetchMovies(pageCounter, display)

function displayPageNumber() {
    const pageNumber = document.querySelector('.page-number')
    pageNumber.textContent = pageCounter
}

function fetchNext() {
    pageCounter++
    fetchMovies(pageCounter, display)
}


function fetchPrevious() {
    if (pageCounter === 1) {
        return
    }
    pageCounter--
    fetchMovies(pageCounter, display)
}



function search() {
    let searchCount = 1
    let searchInput = document.querySelector('.search-input').value
    display = searchInput
    fetchMovies(searchCount++, searchInput)
    // displayPageNumber()
}
