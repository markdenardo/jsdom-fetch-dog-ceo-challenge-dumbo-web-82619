document.addEventListener("DOMContentLoaded", function() {
  let dogImageContainer = document.getElementById("dog-image-container")
    let dogBreedUL = document.querySelector("#dog-breeds")

  // console.log(dogImageContainer)

  //Challenge 1
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(res => res.json())
    .then(dogUrlImageObject => {
      let dogUrl = dogUrlImageObject.message;

        dogUrl.forEach(url => {
          let urlImg = `<img src="${url}"/>`
            // console.log(url)
            // console.log(urlImg)
            dogImageContainer.innerHTML += urlImg
      })
    })
    //End of Challenge 1

  //Challenge 2
  fetch("https://dog.ceo/api/breeds/list/all")
  .then(res => res.json())
  .then(dogNamesObject => {
    let dogBreedArr = Object.keys(dogNamesObject.message)
    dogBreedArr.forEach((breed) => addLi(breed))
  });

  function addLi(breed){
    let dogBreedUl = document.querySelector('#dog-breeds')
    dogBreedUl.innerHTML += `<li data-info="breed">${breed}</li>`
  }
  //End of Challenge 2

  //Challenge 3
  dogBreedUL.addEventListener("click", function(event){
    if (event.target.dataset.info === "breed") {
      event.target.style.color = "green"
    }
  })
  // End of Challenge 3

  // Challenge 4
  let dogSelect = document.getElementById('breed-dropdown')
  dogSelect.addEventListener("change", (event) => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(res => {
      let dogBreedsArr = Object.keys(res.message)

      let filteredArray = dogBreedsArr.filter(breed => {
        return breed.startsWith(event.target.value)
      })

      dogBreedUL.innerHTML = ""
      console.log(addLi)
      filteredArray.forEach(addLi)


    })
  })
  // Challenge 4

})
