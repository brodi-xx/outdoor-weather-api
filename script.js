// Get references to the DOM elements
const keywordsInput = document.getElementById('keywords');
const categorySelect = document.querySelector('.category');
const searchHistory = document.querySelector('#locationNames');
const searchBtn = document.getElementById('search');
const keywords = keywordsInput.value.trim();
let category = categorySelect.value.toLowerCase();
let modal = document.getElementById("myModal");
let closeButton = document.getElementById("close");

//  API endpoint URL
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = "eda74b25c0c08d1b90225737438fad5c"; //window.locationName -> restricted keyword
let iconcode;


// Add event listener to the search button
searchBtn.addEventListener('click', () => {
  // Add local storage for Location
  let locationName = document.getElementById('location').value;
  localStorage.setItem("location", locationName);
  let locationData = document.createElement("div");
  locationData.innerHTML = localStorage.getItem("location");
  searchHistory.appendChild(locationData);

  // Get the user's input
  console.log('loc valu', locationName)
  const endpointUrl = `${baseUrl}${locationName}&units=imperial&appid=${apiKey}`;
  // getCoords(locationName);

  // keywords = document.getElementById('keywords').value;
  // const category = document.querySelector('.category').value;
  // Build the API URL based on the user's input
  // Make an HTTP request to the API using the Fetch API
  fetch(endpointUrl)
    .then(response => response.json())
    .then(data => {
      console.log("data", data);
      initMap(data.coord.lat, data.coord.lon);
      // Process the API response data
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;
      iconcode = data.weather[0].icon;
      console.log("icon", iconcode)
      const iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
      console.log("iconUrl", iconurl)
      // const locationNameName = data.name;
      // Display the weather information on the page
      const weatherInfo = `The weather in ${locationName} is currently ${weatherDescription} with a temperature of ${temperature} F.`;
      document.getElementById('weather-info').textContent = weatherInfo;
      $('#wicon').attr('src', iconurl);
      $("div#icon").show();
    })
    .catch(error => {
      // Handle any errors that occur during the API request
      console.error('Error:', error);
    });

  // Fetch weather data from API
  fetch(endpointUrl)
    .then(response => response.json())
    .then(data => {
      // Check if locationName is valid
      if (data.cod === '404') {
        console.log('locationName not found');
        modal.style.display = "block";
        return;
      }
      // Get weather information
      const weather = data.weather[0].main.toLowerCase();
      // Check if weather is suitable for selected activity category
      if ((category === 'indoor' && weather !== 'rain' && weather !== 'snow') ||
        (category === 'outdoor' && weather === 'clear')) {
        console.log(`Weather is suitable for ${category} activity`);
      } else {
        console.log(`Weather is not suitable for ${category} activity`);
      }
    })
    .catch(error => console.log(error));
});

// function getCoords(city) {
//   var url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data.coord);
//       // initMap(data.coord.lat, data.coord.lon);
//     })
// }

// function initMap(lat, lng) {
//   // Map locationName options
//   var options = {
//     zoom: 7,
//     center: { lat: lat, lng: lng }
//   }
//   // New Map
//   var map = new google.maps.Map(document.getElementById('map'), options);

//   const request = {
//     query: "food",
//     type: ['restaurant']
//   };

//   // Create the search box and link it to the UI element.
//   const input = document.getElementById("pac-input");
//   const searchBox = new google.maps.places.SearchBox(input);
//   map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
//   // Bias the SearchBox results towards current map's viewport.
//   map.addListener("bounds_changed", () => {
//     searchBox.setBounds(map.getBounds());
//   });
//   map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
//   // Bias the SearchBox results towards current map's viewport.
//   map.addListener("bounds_changed", () => {
//     searchBox.setBounds(map.getBounds());
//   });
// }

function initMap(lat, lon) {
  const latitude = lat || 10
  const longitude = lon || 10
  const sydney = new google.maps.LatLng(latitude, longitude);

  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: sydney,
    zoom: 15,
  });

  const request = {
    query: "mall",
    // type: ['restaurant'],
    fields: ["name"],
  };

  service = new google.maps.places.PlacesService(map);
  service.findPlaceFromQuery(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
        console.log(results[i])
      }

      // map.setCenter(results[0].geometry.location);
    }
  });
}

function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;

  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.setContent(place.name || "");
    infowindow.open(map);
  });
}

window.initMap = initMap;

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});


// initMap();

// Erica's latest version 3/27 @ 4:30PM