let addToy = false;
let toyPicturesArray
let toyImageUrls = []

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const toyCollection = document.getElementById("toy-collection")

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    } 
  });

  fetch("http://localhost:3000/toys")
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    toyPicturesArray = data
    for (const object of toyPicturesArray) {
      let image = object.image;
      toyImageUrls.push(image)
    }
  })

  

});


