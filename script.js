// const categories = document.querySelectorAll('.category'); categories.forEach(category => { new Chosen(category, {disable_search_threshold: 10}); });
// console.log (categories)

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

  //weather api url plus search function for city

  let weather = {
    apiKey: "eda74b25c0c08d1b90225737438fad5c",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=imperial&appid=" +
          this.apiKey
      )
    //alert if no location found with alert

        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => {
          this.displayWeather(data);
          // Save the last searched city in local storage
          localStorage.setItem("lastCity", city);
        });
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = Math.round(temp) + "°F";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind: " + Math.round(speed) + " mph";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?wallpaper')";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
