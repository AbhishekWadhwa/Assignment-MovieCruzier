export default class B {
  getSlideOutHeader() {
    const str = `
    <li><div class="user-view">
      
      <a href="#" ><span class=" center name black-text">Collection List</span></a>
    </div></li>
    `;
    return str;
  }

  getSlideOutItem(name) {
    const str = `<li class = "row"><a href="#movie_modal" class = "modal-trigger" id = 
        "${name}"> ${name}<i id = "del${name}" class="material-icons">delete</i></a></li>`;
    return str;
  }

  movieModalItem(movie_to_poster, movie) {
    const str = `<div class = " center col s12 m4 l3">
                    
                      <input type="checkbox" id="${movie}" />
                      <label for="${movie}"><img class = "materialbox" src = "https://image.tmdb.org/t/p/w500${movie_to_poster[movie]}" style = "height:150px;"></label>
                      <h6 class = "center">${movie}</h6>
                    
                    </div>
                `;
    return str;
  }

  getMovieModalContent(k, temp) {
    const str = `
                <h4 id = "modal_header" class = "center">${k}</h4>
                <form action="#" class = "row">
                    ${temp}
                </form>
                    
            `;
    return str;
  }
}
