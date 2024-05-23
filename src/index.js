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
    div.className = "card"
    div.textContent = toy.id
    toyCollection.appendChild(div)
  }


  getToys()
});
