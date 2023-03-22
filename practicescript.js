// Get references to the DOM elements
const keywordsInput = document.getElementById('keywords');
const locationInput = document.getElementById('location');
const categorySelect = document. querySelector('.category')
const searchBtn = document.getElementById('search');

function search() {
  // Get user input from the search form
  const keywords = document.getElementById('keywords').value;
  const location = document.getElementById('location').value;
  const category = document.querySelector('.category').value;
  // Build the API URL based on the user's input
  let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=YOUR_APP_ID';
  // Make an HTTP request to the API using the Fetch API
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Process the API response data
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;
      const locationName = data.name;
      // Display the weather information on the page
      const weatherInfo = `The weather in ${locationName} is currently ${weatherDescription} with a temperature of ${temperature} Kelvin.`;
      document.getElementById('weather-info').textContent = weatherInfo;
    })
    .catch(error => {
      // Handle any errors that occur during the API request
      console.error('Error:', error);
    });
}


//  API endpoint URL
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = "eda74b25c0c08d1b90225737438fad5c";
console.log(location) //window.location -> restricted keyword


// Add event listener to the search button
searchBtn.addEventListener('click', () => {
  // Get the user's input
  const keywords = keywordsInput.value.trim();
  const location = locationInput.value.trim();
  const category = categorySelect.value.toLowerCase();
  console.log('loc valu', location)
  const endpointUrl = `${baseUrl}${location}&appid=${apiKey}`;
  
  // Fetch weather data from API
  fetch(endpointUrl)
    .then(response => response.json())
    .then(data => {
      // Check if location is valid
      if (data.cod === '404') {
        console.log('Location not found');
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




