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
