import XMLHTTPData from "./fetchData.js";
import searchFunc from "./search.js";
import collectionFunction from "./collection.js";
import "materialize-css";
import $ from "jquery";
import "./jquery.js";


let search = new searchFunc();
let collect = new collectionFunction();

let collection = {};
let movie_to_poster = {};

let previous = localStorage.getItem("Key2");

if (previous == null) {
     movie_to_poster = {};
} else {
     movie_to_poster = JSON.parse(previous);
}

let previousState = localStorage.getItem("Key");
if (previousState == null) {
    collection = {};
} else {
    collection = JSON.parse(previousState);
}

let array = "";
let dict = [];

export function myCollectionFunction() {
    let slide_out = document.getElementById("slide-out");
    let movie_modal_content = document.getElementById("movie_modal_content");
    //console.log("hello world");

    let str = collect.collectionListHeader();

    for (let name in collection) {
        str += collect.collectionListItem(name);

    }
    slide_out.innerHTML = str;
    for (let name in collection) {
        let ele = document.getElementById(name);
        ele.addEventListener("click", function() {
            let temp = "";

            let k = this.id;

            for (let index in collection[k]) {
                let movie = collection[k][index];
                //console.log(`${k} --- ${movie}`);
                temp += collect.collectionListModal(movie_to_poster, movie);

            }



            movie_modal_content.innerHTML = collect.collectionListModalContent(k, temp);
        });

        let del = document.getElementById(`del${name}`);
        del.addEventListener("click", function(event) {
            let k = this.id.substring(3);
            delete collection[k];
            localStorage.setItem("Key", JSON.stringify(collection));
            Materialize.toast(`${k} Deleted`, 3000);
            event.stopPropagation();
            $(".gg").sideNav("hide");

        });
    }

}

export function deleteFunction() {
    let c_name = document.getElementById("modal_header").innerHTML;
    let movie_modal = document.getElementById("movie_modal");
    let array = collection[c_name];
    let count = 0;
    let c_box = movie_modal.getElementsByTagName("input");
    for (let i in c_box) {
        if (isNaN(i) === false) {

            if (c_box[i].type === "checkbox" && c_box[i].checked === true) {

                let movie_name = c_box[i].id;
                let index = array.indexOf(movie_name);
                if (index != -1) {
                    array.splice(index, 1);
                    count += 1;
                }
            }
        }
    }
    localStorage.setItem("Key", JSON.stringify(collection));
    Materialize.toast(`Successfully Deleted ${count} Movies`, 3000);

    $("#movie_modal").modal("close");
}

export function initializeFunction() {
    searchFunction();
}

export function searchFunction() {
    let movie_name = document.getElementById("movie_name");
    let search_box = document.getElementById("search_box");
    let temp = movie_name.value.trim();

    if (temp == "") {
        return;
    }
    let url = `https://api.themoviedb.org/3/search/movie?api_key=e6216f01ce8f3b722894882fa504e84b&query=${temp}`;
    let promise = XMLHTTPData(url);
    promise.then(
        function(data) {
            dict = data;
            let search_result = "";
            for (let key in data) {

                if (data[key]["poster_path"] === null) {
                    console.log('this is null');
                    continue;
                }

                movie_to_poster[data[key]["original_title"]] = data[key]["poster_path"];

                let x = search.getCard(key, data[key]);


                search_result += x;
            }


            localStorage.setItem("Key2", JSON.stringify(movie_to_poster));

            if (search_result === "") {
                search_box.innerHTML = "DATA NOT FOUND";
                return;
            } else {
                search_box.innerHTML = search_result;
            }

            $(document).ready(function() {
                $(".materialboxed").materialbox();
            });

            for (let z in data) {


                let more = document.getElementById(`more${z}`);
                let more_modal_content = document.getElementById("more_modal_content");
                more.addEventListener("click", function() {
                    let k = parseInt(this.id.substring(4));

                    more_modal_content.innerHTML = search.getMoreView(k, dict);


                });

                let add_to_collection = document.getElementById(`add_to_collection${data[z]["original_title"]}`);
                let dropdown_modal_content = document.getElementById("dropdown_modal_content");
                add_to_collection.addEventListener("click", function() {
                    let list = "";
                    for (let name in collection) {
                        list += search.collectedListItem(name);
                    }

                    dropdown_modal_content.innerHTML = search.collectedList(list);
                    console.log(dropdown_modal_content);
                    let k = this.id.substring(17);

                    array = k;

                });
            }

        }
    );

    promise.catch(function(error) {

        search_box.innerHTML = error;
    });



}



export function btnFunction() {
    let dropdown_modal_content = document.getElementById("dropdown_modal_content");
    let c_box = dropdown_modal_content.getElementsByTagName("input");
    for (let i in c_box) {
        if (isNaN(i) === false) {
            if (c_box[i].type === "checkbox" && c_box[i].checked === true) {
                let array = collection[c_box[i].id.substring(4)];

                if (array.indexOf(array) === -1) {
                    array.push(array);
                    localStorage.setItem("Key", JSON.stringify(collection));
                    Materialize.toast(` ${array} Added to Selected Collections`, 3000);
                }
            }
        }
    }
}


export function formFunction(event) {
    searchFunction();
    event.preventDefault();
}



export function saveFunction() {
    let name = document.getElementById("first_name").value;
    if (name in collection) {
        Materialize.toast("You Already Have One!", 3000);
        return;
    }
    collection[name] = [];
    localStorage.setItem("Key", JSON.stringify(collection));
    //console.log(collection);
    $("#create_modal").modal("close");
    Materialize.toast(`Created ${name}`, 3000);
}