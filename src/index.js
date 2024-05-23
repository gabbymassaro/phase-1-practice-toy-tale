let addToy = false;

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

  const getToys = () => {
    fetch("http://localhost:3000/toys")
      .then(function (response) {
        return response.json()
      })
      .then(data => {
        data.forEach(createCards)
      })
  }

  const createCards = (toy) => {
    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    const img = document.createElement('img')
    const p = document.createElement('p')
    const button = document.createElement('button')

    div.textContent = toy.id
    h2.textCOntent = toy.name
    img.src = toy.image
    p.textContent = toy.likes
    button.textContent = "Like ❤️"


    div.className = "card"
    button.className = "like-btn"
    img.classList = "toy-avatar"

    div.appendChild(h2)
    div.appendChild(img)
    div.appendChild(p)
    div.appendChild(button)
    toyCollection.appendChild(div)
  }


  getToys()
});
