export default class searchFunc {
	getCard(ID, data) {
		let map = `
    <div class="col s12 m4">
                <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="materialboxed" src="https://image.tmdb.org/t/p/w500${data["poster_path"]}" alt="movie_poster">
                        
                        <!--a id = "add_to_collection${data["original_title"]}" href = "#dropdown_modal" class="btn-floating halfway-fab waves-effect waves-light red modal-trigger"><i class="material-icons">add</i></a-->
                        
                         
                          
                    </div>
                    <div class="card-data">
                    <span id="more${ID}" class="card-title activator grey-text text-darken-4">${data["original_title"]}<i class="material-icons right">forward</i></span>
                        <!--p>${data["original_title"]}<i class="material-icons right">forward</i></p>
                        <a id="more${ID}" href="#more_modal" class="modal-trigger">More Details</a-->

                          
                          
                    </div>
                    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${data["original_title"]}<i class="material-icons right">close</i></span>
      <p>${data["overview"]}</p>
      <p><a href="#">Release Date: ${data["release_date"]}</a></p>
      <a id = "add_to_collection${data["original_title"]}" href = "#dropdown_modal" class="btn waves-effect waves-light modal-trigger">Add To Collections<i class="material-icons right">send</i></a>
    </div>
                </div>
    </div>
    `;
		return map;

	}
    

	collectedListItem(name) {
		let map = `
                            <p>
                              <input type="checkbox" id="test${name}" />
                              <label for="test${name}">${name}</label>
                            </p>
                        `;
		return map;
	}

	collectedList(list) {
		let map = `
                        <h4>Select Collection for the Movie</h4>
                        <form action="#">
                            
                            ${list}
                        </form>

                    `;
		return map;
	}
}