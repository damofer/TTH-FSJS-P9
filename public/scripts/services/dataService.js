(function() {
  'use strict';
    angular
    .module('app')
  .service('dataService', function($http) {
  	  var base_uri = 'http://localhost:5000';
      this.getAllRecipes = function (callback) {
         $http.get(base_uri + '/api/recipes')
         .then(callback);
      };
       this.getAllCategories = function (callback) {
         $http.get(base_uri + '/api/categories')
         .then(callback);
      };
       this.getFoodItems = function (callback) {
         $http.get(base_uri + '/api/fooditems')
         .then(callback);
      };
       this.getRecipesByCategory = function (category,callback) {
         $http.get(base_uri + '/api/recipes?category='+category)
         .then(callback);
      };
      this.getRecipe = function (id,callback) {
         $http.get(base_uri + '/api/recipes/'+id)
         .then(callback);
      };
      this.updateRecipe = function (recipe,callback,err) {
        console.log(recipe);
         $http.put(base_uri + '/api/recipes/'+ recipe._id ,recipe )
         .then(callback,err);
      };
      this.addRecipe = function (recipe,callback,err) {
         $http.post(base_uri + '/api/recipes',recipe )
         .then(callback,err);
      };
      this.deleteRecipe = function (id) {
              $http.delete(base_uri + '/api/recipes/'+id);
          };
  });

})();










/*The base URL for the REST API is http://localhost:5000/.
To your service, add methods to call the following API endpoints:
GET /api/recipes - Gets all of the recipes.
GET /api/categories - Gets all of the categories.
GET /api/fooditems - Gets all of the food items.
GET /api/recipes?category={category} - Gets all of the recipes for the specified category.
GET /api/recipes/{id} - Gets the recipe for the specified ID.
PUT /api/recipes/{id} - Updates the recipe for the specified ID.
POST /api/recipes - Adds a recipe.
DELETE /api/recipes/{id} - Deletes the recipe for the specified ID.*/