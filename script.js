const categories = document.querySelector('.category');
// categories.forEach(category => {
//      new Chosen(category, {disable_search_threshold: 10}); 
//     }); 
const keyword = document.querySelector('#keyword');
const location = document.querySelector('#location');
const search = document.querySelector("#search");

search.addEventListener("click", function() {
    localStorage.setItem("keyword", keyword);
    localStorage.setItem("location", location);
    localStorage.setItem("category", category);
})
