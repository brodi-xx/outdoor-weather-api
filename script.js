// Get references to the DOM elements
const keywordsInput = document.getElementById('keywords');
const categorySelect = document. querySelector('.category')
const searchBtn = document.getElementById('search');
const keywords = keywordsInput.value.trim();
let category = categorySelect.value.toLowerCase();


//  API endpoint URL
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = "eda74b25c0c08d1b90225737438fad5c"; //window.locationName -> restricted keyword


// Add event listener to the search button
searchBtn.addEventListener('click', () => {
  // Get the user's input
  let locationName = document.getElementById('location').value;
  console.log('loc valu', locationName)
  const endpointUrl = `${baseUrl}${locationName}&appid=${apiKey}`;

  // keywords = document.getElementById('keywords').value;
  // const category = document.querySelector('.category').value;
  // Build the API URL based on the user's input
  // Make an HTTP request to the API using the Fetch API
  fetch(endpointUrl)
    .then(response => response.json())
    .then(data => {
      // Process the API response data
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;
      // const locationNameName = data.name;
      // Display the weather information on the page
      const weatherInfo = `The weather in ${locationName} is currently ${weatherDescription} with a temperature of ${temperature} Kelvin.`;
      document.getElementById('weather-info').textContent = weatherInfo;
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

function initMap() {
  // Map locationName options
  var options = {
    zoom:7,
    center:{lat:19.4326,lng:-99.1332}
  }
  // New Map
  var map = new google.maps.Map(document.getElementById('map'), options);
}

// Create the search box and link it to the UI element.
const input = document.getElementById("pac-input");
const searchBox = new google.maps.places.SearchBox(input);
map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
// Bias the SearchBox results towards current map's viewport.
map.addListener("bounds_changed", () => {
  searchBox.setBounds(map.getBounds());
});
map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
// Bias the SearchBox results towards current map's viewport.
map.addListener("bounds_changed", () => {
  searchBox.setBounds(map.getBounds());
});

initMap();