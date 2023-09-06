const API_KEY = 'c7842752';
const form_el = document.querySelector('#form');
const search_el = document.querySelector('#titleMove');
const type_el = document.querySelector('#typeMove');
const result_el = document.querySelector('#results');

form_el.addEventListener('submit', e => {
    e.preventDefault();
    result_el.textContent = '';
    const searchStr = search_el.value;
    const typeStr = type_el.value;
    const url = `http://www.omdbapi.com?apikey=${API_KEY}&s=${searchStr}&type${typeStr}`;
    console.log(url);
    fetch(url)
        .then((respons) => respons.json())
        .then((filmList) => {
            console.log(filmList);
            filmList.Search.forEach(film => {
                result_el.insertAdjacentHTML('beforeend',
                    `<div class="filmEl">
        <img src="${film.Poster}"/>
        <div class="right">
        <div class="title">
        <h2>${film.Title}</h2> <br/>
        </div>
        <div class="year">
        <p>${film.Year}</p>
        </div>
        </div>     
       
        </div>`)
            });

        });
});