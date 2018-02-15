document.addEventListener("DOMContentLoaded", function(){
  const drinkURL = "http://localhost:3000/api/v1/drinks"

  let form = document.querySelector("#drink-create-form")
  form.addEventListener("submit", createDrink)


  function fetchDrinks() {
    DrinkApi.fetchDrinks()
    .then(drinks => renderDrinks(drinks))
  }
  fetchDrinks()

  // ///////////////////////////////
  // render all Drinks on page load
  // //////////////////////////////
  function renderDrinks(drinks){
    drinks.forEach(function(drink){
      renderDrink(drink)
    })
  } // end renderDrinks


  function fetchIBACocktails() {
    DrinkApi.getIBACocktails()
    .then(json => console.log(json))
  }
  fetchIBACocktails()


  function renderDrink(drink) {
    let drinksWrapper = document.querySelector("#drinks-wrapper")

    // render drink card
    let drinkCard = document.createElement("div") // div.card
        drinkCard.id = `drink-${drink.id}`
        drinkCard.setAttribute("class", "card")

    // render card Img
    let imgDiv = document.createElement("div") // div.image
        imgDiv.setAttribute("class", "image")
      let drinkImg = document.createElement('img') // <img>
          drinkImg.src = drink.image_url
          imgDiv.append(drinkImg)
          drinkCard.append(imgDiv)

    // render card content
    let contentDiv = document.createElement("div") // div.content
        contentDiv.setAttribute("class", "content")

      // render drink name
      let drinkName = document.createElement("div") // div.header
          drinkName.setAttribute("class", "header")
          drinkName.innerText = drink.name
          contentDiv.append(drinkName)

      // render drink description
      let drinkDesc = document.createElement("div") // div.meta
          drinkDesc.setAttribute("class", "meta")
          drinkDesc.innerText = drink.description
          contentDiv.append(drinkDesc)

      // render drink ingredients, garnish, glass, and instructions
      let drinkIngrContainer = document.createElement("div") // div.description
          drinkIngrContainer.setAttribute("class", "description")
          let drinkIngrTitle = document.createElement("h5")
              drinkIngrTitle.setAttribute("class", "drinkIngrTitle")
              drinkIngrTitle.innerText = "Ingredients:"
              drinkIngrContainer.append(drinkIngrTitle)
              let drinkIngrUl = document.createElement("ul")
                  drinkIngrUl.setAttribute("class", "drink-ingr-ul")
                  let drinkIngr1 = document.createElement("li")
                  let drinkIngr2 = document.createElement("li")
                  let drinkIngr3 = document.createElement("li")
                  let drinkIngr4 = document.createElement("li")
                  let drinkIngr5 = document.createElement("li")
                      drinkIngr1.innerText = drink.ingredient1
                      drinkIngr2.innerText = drink.ingredient2
                      drinkIngr3.innerText = drink.ingredient3
                      drinkIngr4.innerText = drink.ingredient4
                      drinkIngr5.innerText = drink.ingredient5
                  drinkIngrUl.append(drinkIngr1, drinkIngr2, drinkIngr3, drinkIngr4, drinkIngr5)
                  drinkIngrContainer.append(drinkIngrUl)
          let drinkGarnish = document.createElement("p")
              drinkGarnish.setAttribute("class", "drink-garnish")
              drinkGarnish.innerHTML = `<span>Garnish:</span> ${drink.garnish}`
              drinkIngrContainer.append(drinkGarnish)
          let drinkGlass = document.createElement("p")
              drinkGlass.setAttribute("class", "drink-glass")
              drinkGlass.innerHTML = `<span>Glass:</span> ${drink.glass}`
              drinkIngrContainer.append(drinkGlass)
          let drinkInstructions = document.createElement("p")
              drinkInstructions.setAttribute("class", "drink-instructions")
              drinkInstructions.innerHTML = `<span>Instructions:</span> ${drink.instructions}`
              drinkIngrContainer.append(drinkInstructions)

        // append ingr, garnsih, glass, and instructions to contentDiv
        contentDiv.append(drinkIngrContainer)
      // append contend div to drink card
      drinkCard.append(contentDiv)

      let drinkOptions = document.createElement("div") // div.extra content
          drinkOptions.setAttribute("class", "extra content")
            let rightSpan = document.createElement("span")
                rightSpan.setAttribute("class", "right floated")
                  let renderDrinkEditFormBtn = document.createElement("button")
                      renderDrinkEditFormBtn.dataset.id = `${drink.id}`
                      renderDrinkEditFormBtn.setAttribute("class", "ui medium blue button")
                      renderDrinkEditFormBtn.innerText = "Edit"
                      rightSpan.append(renderDrinkEditFormBtn)
                drinkOptions.append(rightSpan)
            let leftSpan = document.createElement("span")
                leftSpan.setAttribute("class", "left floated")
                  let drinkDeleteBtn = document.createElement("button")
                      drinkDeleteBtn.dataset.id = `${drink.id}`
                      drinkDeleteBtn.setAttribute("class", "ui medium red button")
                      drinkDeleteBtn.innerText = "Delete"
                      leftSpan.append(drinkDeleteBtn)
                drinkOptions.append(leftSpan)
          drinkCard.append(drinkOptions)


    // //////////// OLD CODE ////////////////


    // add edit-form div
    let editFormDiv = document.createElement("div")
    editFormDiv.setAttribute("class", "ui raised segment edit-form-wrapper")
    editFormDiv.id = `edit-form-${drink.id}`
    editFormDiv.setAttribute("style", "display: none")

    let editForm = document.createElement("form")
    editForm.id = "drink-edit-form"
    editForm.className = "drink-edit-form"
    editForm.dataset.id = drink.id
    editForm.innerHTML = `
      <div class="ui input">
        <input type="text" id="edit-name-${drink.id}" value="${drink.name}">
      </div>
      <div class="ui input">
        <input type="text" id="edit-description-${drink.id}" value="${drink.description}">
      </div>
      <div class="ui  input">
        <input type="text" id="edit-image-url-${drink.id}" value=${drink.image_url}>
      </div>
      <div class="ui input">
        <input type="text" id="edit-ingredient1-${drink.id}" value="${drink.ingredient1}">
      </div>
      <div class="ui input">
        <input type="text" id="edit-ingredient2-${drink.id}" value="${drink.ingredient2}">
      </div>
      <div class="ui input">
        <input type="text" id="edit-ingredient3-${drink.id}" value="${drink.ingredient3}">
      </div>
      <div class="ui input">
        <input type="text" id="edit-ingredient4-${drink.id}" value="${drink.ingredient4}">
      </div>
      <div class="ui input">
        <input type="text" id="edit-ingredient5-${drink.id}" value="${drink.ingredient5}">
      </div>
      <div class="ui input">
        <input type="text" id="edit-garnish-${drink.id}" value=${drink.garnish}>
      </div>
      <div class="ui input">
        <input type="text" id="edit-glass-${drink.id}" value="${drink.glass}">
      </div>
      <div class="ui input">
        <input type="text" id="edit-instructions-${drink.id}" value="${drink.instructions}">
      </div>
      <button class="ui medium blue button" id="submit-edit-button" type="submit">Submit Edit</button>
    `

    editFormDiv.innerHTML = `<h3>Edit Cocktail</h3>`
    editFormDiv.append(editForm)

    // append drinkContainer and Edit form to drink Wrapper
    drinksWrapper.append(drinkCard)
    drinksWrapper.append(editFormDiv)

    // change EditForm visibility on Edit button click
    renderDrinkEditFormBtn.addEventListener("click", function() {
      editFormDiv.setAttribute("style", "display: block")
    })

    // add eventListener to Edit form button
    editForm.addEventListener("submit", editDrink)

    // add eventListener to delete drink button
    drinkDeleteBtn.addEventListener("click", deleteDrink)

  } // end renderDrink

  // ////////////////////////////
  // ///////////////////////////
  // Edit Drink
  // //////////////////////////

  function editDrink(event){
    event.preventDefault()
    console.log("this: ", this);
    console.log("this.dataset.id: ", this.dataset.id) // works

    let formDiv = document.querySelector(`#edit-form-${this.dataset.id}`)

    let arrayInputs = document.querySelectorAll(`#edit-form-${this.dataset.id} > form > .ui.input`)

    let newName = document.querySelector(`#edit-name-${this.dataset.id}`)
    let newDesc = document.querySelector(`#edit-description-${this.dataset.id}`)
    let newImgUrl = document.querySelector(`#edit-image-url-${this.dataset.id}`)
    let newIngredient1 = document.querySelector(`#edit-ingredient1-${this.dataset.id}`)
    let newIngredient2 = document.querySelector(`#edit-ingredient2-${this.dataset.id}`)
    let newIngredient3 = document.querySelector(`#edit-ingredient3-${this.dataset.id}`)
    let newIngredient4 = document.querySelector(`#edit-ingredient4-${this.dataset.id}`)
    let newIngredient5 = document.querySelector(`#edit-ingredient5-${this.dataset.id}`)
    let newGarnish = document.querySelector(`#edit-garnish-${this.dataset.id}`)
    let newGlass = document.querySelector(`#edit-glass-${this.dataset.id}`)
    let newInstructions = document.querySelector(`#edit-instructions-${this.dataset.id}`)


    return fetch(`http:/localhost:3000/api/v1/drinks/${parseInt(this.dataset.id)}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newName.value,
        image_url: newImgUrl.value,
        description: newDesc.value,
        ingredient1: newIngredient1.value,
        ingredient2: newIngredient2.value,
        ingredient3: newIngredient3.value,
        ingredient4: newIngredient4.value,
        ingredient5: newIngredient5.value,
        garnish: newGarnish.value,
        glass: newGlass.value,
        instructions: newInstructions.value
      })
    })
    .then(res => res.json())
    .then(updatedDrink => updateDrink(updatedDrink))

    formDiv.setAttribute("style", "display: none")

  }

  // ////////////////////////////
  // ////////////////////////////
  // Update Drink
  // ///////////////////////////
  function updateDrink(drink) {
    let drinkDiv = document.querySelector(`#drink-${drink.id}`) // div.card
    drinkDiv.innerHTML = `
      <div class="image">
        <img src="${drink.image_url}">
      </div>
      <div class="content">
        <div class="header">${drink.name}</div>
        <div class="meta">${drink.description}</div>
        <div class="description">
          <h5 class="drinkIngrTitle">Ingredients:</h5>
          <ul>
            <li>${drink.ingredient1}</li>
            <li>${drink.ingredient2}</li>
            <li>${drink.ingredient3}</li>
            <li>${drink.ingredient4}</li>
            <li>${drink.ingredient5}</li>
          </ul>
          <p class="drink-garnish"><span>Garnish:</span> ${drink.garnish}</p>
          <p class="drink-glass"><span>Glass:</span> ${drink.glass}</p>
          <p class="drink-instructions"><span>Instructions:</span> ${drink.instructions}</p>
        </div>
      </div>
      <div class="extra content">
        <span class="right floated">
          <button data-id="${drink.id}" class="ui medium blue button">Edit</button>
        </span>
        <span class="left floated">
          <button data-id="${drink.id}" class="ui medium red button">Delete</button>
        </span>
      </div>
    `
  }


  // ////////////////////////////
  // ////////////////////////////
  // DELETE Drink
  // ///////////////////////////

  function deleteDrink(e) {
     fetch(`http:/localhost:3000/api/v1/drinks/${this.dataset.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(json => removeDrink(json))
  }

  function removeDrink(json){
    document.querySelector(`#drink-${json.id}`).remove()
  }


  // ///////////////////////////////
  // ///////////////////////////////
  // create Drink
  // //////////////////////////////

  function createDrink(e){
    e.preventDefault()
    let inputName = document.querySelector("#input-name")
    let inputDesc = document.querySelector("#input-description")
    let inputImgUrl = document.querySelector("#input-image-url")
    let inputIngredient1 = document.querySelector("#input-ingredient1")
    let inputIngredient2 = document.querySelector("#input-ingredient2")
    let inputIngredient3 = document.querySelector("#input-ingredient3")
    let inputIngredient4 = document.querySelector("#input-ingredient4")
    let inputIngredient5 = document.querySelector("#input-ingredient5")
    let inputGarnish = document.querySelector("#input-garnish")
    let inputGlass = document.querySelector("#input-glass")
    let inputInstructions = document.querySelector("#input-instructions")

    postDrink(inputName.value, inputDesc.value, inputImgUrl.value, inputIngredient1.value, inputIngredient2.value, inputIngredient3.value, inputIngredient4.value, inputIngredient5.value, inputGarnish.value, inputGlass.value, inputInstructions.value)

    inputName.value = ""
    inputDesc.value = ""
    inputImgUrl.value = ""
    inputIngredient1.value = ""
    inputIngredient2.value = ""
    inputIngredient3.value = ""
    inputIngredient4.value = ""
    inputIngredient5.value = ""
    inputGarnish.value = ""
    inputGlass.value = ""
    inputInstructions.value = ""
  }


  // ////////////////////////
  // ///////////////////////
  // Post Drink
  // /////////////////////

  function postDrink(inputName, inputDesc, inputImgUrl, inputIngredient1, inputIngredient2, inputIngredient3, inputIngredient4, inputIngredient5, inputGarnish, inputGlass, inputInstructions){
    return fetch(drinkURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: inputName,
        image_url: inputImgUrl,
        description: inputDesc,
        ingredient1: inputIngredient1,
        ingredient2: inputIngredient2,
        ingredient3: inputIngredient3,
        ingredient4: inputIngredient4,
        ingredient5: inputIngredient5,
        garnish: inputGarnish,
        glass: inputGlass,
        instructions: inputInstructions
        })
      }) // end fetch
      .then(res => res.json())
      .then(newDrink => {
        renderDrink(newDrink)
      })
  } // end postDrink
})
