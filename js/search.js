export default class A {
	getCard(key, content) {
		let str = `
    <div class="col s12 m4">
                <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="materialboxed" src="https://image.tmdb.org/t/p/w500${content["poster_path"]}" alt="movie_poster">
                        
                        <!--a id = "add_to_collection${content["original_title"]}" href = "#dropdown_modal" class="btn-floating halfway-fab waves-effect waves-light red modal-trigger"><i class="material-icons">add</i></a-->
                        
                         
                          
                    </div>
                    <div class="card-content">
                    <span id="more${key}" class="card-title activator grey-text text-darken-4">${content["original_title"]}<i class="material-icons right">forward</i></span>
                        <!--p>${content["original_title"]}<i class="material-icons right">forward</i></p>
                        <a id="more${key}" href="#more_modal" class="modal-trigger">More Details</a-->

                          
                          
                    </div>
                    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${content["original_title"]}<i class="material-icons right">close</i></span>
      <p>${content["overview"]}</p>
      <p><a href="#">Release Date: ${content["release_date"]}</a></p>
      <a id = "add_to_collection${content["original_title"]}" href = "#dropdown_modal" class="btn waves-effect waves-light modal-trigger">Add To Collections<i class="material-icons right">send</i></a>
    </div>
                </div>
    </div>
    `;
		return str;

	}
    

	getMoreView(k, json_array) {
		let str = `
                        <h4>${json_array[k]["original_title"]}</h4>
                        <p>${json_array[k]["overview"]}</p>
                        <p>RATING: ${json_array[k]["vote_average"]}</p>
                    `;
		return str;
	}

	getDropDownItem(name) {
		let str = `
                            <p>
                              <input type="checkbox" id="test${name}" />
                              <label for="test${name}">${name}</label>
                            </p>
                        `;
		return str;
	}

	getDropdown(list) {
		let str = `
                        <h4>Select Collection for the Movie</h4>
                        <form action="#">
                            
                            ${list}
                        </form>

                    `;
		return str;
	}
}