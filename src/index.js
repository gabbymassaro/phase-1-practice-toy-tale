let addToy = false;
let toyArray = []

document.addEventListener("DOMContentLoaded", (e) => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const toyCollection = document.getElementById("toy-collection");

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    } 
  });

  toyFormContainer.addEventListener("submit", formSubmit);
  function formSubmit(e){
    e.preventDefault()
    let formData 
    console.log(e.target.value)
    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: formData
    })
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      console.log(data)
      createCards()
    })
  }
  
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
        const div = document.createElement('div')
        div.className = "card"
        div.textContent = toy.id
        
        const h2 = document.createElement('h2')
        h2.textContent = toy.name
        
        const img = document.createElement('img')
        img.src = toy.image
        img.classList.add("toy-avatar")
        
        const p = document.createElement('p')
        p.textContent = (toy.likes)

        const button = document.createElement('button')
        button.textContent = "Like ❤️"
        button.className = "like-btn"
        button.id = toy.id
        
        div.appendChild(h2)
        div.appendChild(img)
        div.appendChild(p)
        div.appendChild(button)

        toyCollection.appendChild(div)
      }) 
    }

})