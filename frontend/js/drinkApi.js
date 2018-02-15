class DrinkApi {

  static fetchDrinks(){
    return fetch("http://localhost:3000/api/v1/drinks")
    .then(res => res.json())
  }

  static getIBACocktails(){
    return fetch("https://raw.githubusercontent.com/teijo/iba-cocktails/master/recipes.json")
    .then(res => res.json())
  }

} // end DrinkApi
