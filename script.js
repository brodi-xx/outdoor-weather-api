<<<<<<< HEAD
const categories = document.querySelectorAll('.category'); categories.forEach(category => { new Chosen(category, {disable_search_threshold: 10}); }); 
console.log (categories)

// API Key placeholder - 
// Google API Key: AIzaSyCFF4YG_cQn0Sj5LZ8IqXjx4aemkvj8pZ4
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCFF4YG_cQn0Sj5LZ8IqXjx4aemkvj8pZ4&libraries=places">

function initMap() {
  // Map location options 
  var options = {
    zoom:7,
    center:{lat:19.4326,lng:-99.1332}
  }

  // New Map
  var map = new google.maps.Map(document.getElementById('map'), options);
}


/*fetch('https://maps.googleapis.com/maps/api/js?key=AIzaSyCFF4YG_cQn0Sj5LZ8IqXjx4aemkvj8pZ4&libraries=places')
  .then(response => response.json())
  .then(data => {
    // Handle the response data here
    console.log(data);
  })
  .catch(error => {
    // Handle any errors here
    console.error(error);
  }); */
=======
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
>>>>>>> 8a03009cd6ed6ef1b7a903e10eeae514c5ed0496
