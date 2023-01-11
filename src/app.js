


const movieContainer = document.querySelector(".movie-container")
const movieTitle = document.querySelector(".movie-title")


// API for get requests
let fetchRes = fetch(
    "http://www.omdbapi.com/?i=tt3896198&apikey=613f0b2b&s=super&page=1");
// fetchRes is the promise to resolve
// it by using.then() method

fetchRes.then(res =>
    res.json()).then(d => {

        let movieT = d.Search
        
             for (let i = 0; i < movieT.length; i++) {
                 movieContainer.innerHTML += `<div class="w-60 h-80  bg-slate-200 ml-10  mb-10 rounded ">
                 <div class=" movie-title  h-9  text-black text-center">${movieT[i].Title} </div>
                 <img src="${movieT[i].Poster}" alt="ant-man" class="w-60 h-60">
                 <div class=" h-9 text-black text-center">${movieT[i].Year}</div>
                 </div>`
             }
    })
  




