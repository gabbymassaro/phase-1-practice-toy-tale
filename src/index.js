let addToy = false;
let toyArray = []


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
      toyArray = data
      createCards()
    })

    const createCards = () => {
      toyArray.forEach(function(toy) {
        console.log(toy.id)
        const div = document.createElement('div')
        div.textContent = toy.id
        toyCollection.appendChild(div).className = "cards"

        console.log(toy.name)
        const h2 = document.createElement('h2')
        h2.textContent = toy.name
        toyCollection.appendChild(h2).className = "cards"

        console.log(toy.iamge)
        const img = document.createElement('img')
        img.src = toy.image
        toyCollection.appendChild(img).className = "cards"

        console.log(toy.likes)
        const p = document.createElement('p')
        p.textContent = (toy.likes)
        toyCollection.appendChild(p).className = "cards"
      }) 
    }
    
});


