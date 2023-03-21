// Get references to the DOM elements
const keywordsInput = document.getElementById('keywords');
const locationInput = document.getElementById('location');
const insideSelect = document.querySelector('inside');
const outsideSelect = document.querySelector('outside')
const searchButton = document.getElementById('search');

// Add event listener to the search button
searchButton.addEventListener('click', () => {
  // Get the user's input
  const keywords = keywordsInput.value;
  const location = locationInput.value;
  const inside = insideSelect.value;
  const outside = outsideSelect.value;
  // Perform the search
  performSearch(keywords, location, inside, outside);
});
// Define the search function
function performSearch(keywords, location, inside, outside) {
  // Do something with the search parameters, e.g.:
  console.log(`Searching for ${keywords} in ${location}, inside ${inside}, outside ${outside}`);
  // Or make an AJAX request to the server to retrieve search results
}