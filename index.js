const section = document.querySelector('section');

const randomarr =Math.floor(Math.random()*1643)

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
   
      section.innerHTML = data[randomarr].text;
  });

