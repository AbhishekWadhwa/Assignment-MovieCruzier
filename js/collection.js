export default class collectionFunction {
  collectionListModal(movie_to_poster, movie) {
    const map = `<div class = " center col s12 m4 l3">
                    
                      <input type="checkbox" id="${movie}" />
                      <label for="${movie}"><img class = "materialbox" src = "https://image.tmdb.org/t/p/w500${movie_to_poster[movie]}" style = "height:150px;"></label>
                      <h6 class = "center">${movie}</h6>
                    
                    </div>
                `;
    return map;
  }

  collectionListModalContent(k, temp) {
    const map = `
                <h4 id = "modal_header" class = "center">${k}</h4>
                <form action="#" class = "row">
                    ${temp}
                </form>
                    
            `;
    return map;
  }

  collectionListHeader() {
    const map = `
    <li><div class="user-view">
      
      <a href="#" ><span class=" center name black-text">Collection List</span></a>
    </div></li>
    `;
    return map;
  }

  collectionListItem(name) {
    const map = `<li class = "row"><a href="#movie_modal" class = "modal-trigger" id = 
        "${name}"> ${name}<i id = "del${name}" class="material-icons">delete</i></a></li>`;
    return map;
  }

  }
