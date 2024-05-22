let addToy = false;

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault()
  const addBtn = document.querySelector("#new-toy-btn");
  const toyCollection = document.getElementById("toy-collection");

  addBtn.addEventListener("click", () => {
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    } 
  });

  const fetchToys = () =>{
    fetch("http://localhost:3000/toys")
      .then(function(response) {
        return response.json()
      })
      .then(data => data.forEach(createCards));
  }

  const createCards = (toy) => {
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
  }

  const toyFormContainer = document.querySelector(".container");
  toyFormContainer.addEventListener("submit", (e) => {
    e.preventDefault()
    let toyNameInput = document.querySelectorAll(".input-text")[0]
    let imgUrlInput = document.querySelectorAll(".input-text")[1] 

    let toyName = toyNameInput.value;
    let imgUrl = imgUrlInput.value;

    const bodyData = {
      name: toyName,
      image: imgUrl,
      likes: 0
    }
      fetch("http://localhost:3000/toys", {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
        .then(function(response) {
          return response.json()
        })
        .then(data => createCards(data))
  })
  fetchToys()
})