const categories = document.querySelectorAll('.category'); categories.forEach(category => { new Chosen(category, {disable_search_threshold: 10}); }); 
console.log (categories)