import 
{ initializeFunction, 
  searchFunction, 
  formFunction, 
  btnFunction, 
  saveFunction, 
  myCollectionFunction, 
  deleteFunction } from './handler.js';

window.onload = function () {

  const deleteMovie = document.getElementById('delete_movie');
  deleteMovie.addEventListener('click', deleteFunction);

  const initialize = document.getElementById('initialize');
  initialize.addEventListener('keypress', initializeFunction);

  const searchBtn = document.getElementById('search_btn');
  searchBtn.addEventListener('click', searchFunction);

  const btn = document.getElementById('btn');
  btn.addEventListener('click', btnFunction);

  const save = document.getElementById('save');
  save.addEventListener('click', saveFunction);

  const myCollection = document.getElementById('my_collection');
  myCollection.addEventListener('click', myCollectionFunction);

  const searchForm = document.getElementById('search_form');
  searchForm.addEventListener('submit', formFunction(event));

  
};
