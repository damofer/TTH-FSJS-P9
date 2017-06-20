(function() {
  'use strict';
  angular.module('app')

.controller('RecipesController',function($scope,dataService,$location,$window){

 	$scope.recipes=[];


	$scope.getAllCategories = function(){
		 dataService.getAllCategories(function(response){
		 	$scope.categories = response.data;
		 	
		 });
	 }
	$scope.getAllRecipes = function(){
		 dataService.getAllRecipes(function(response){
		 	$scope.recipes = response.data;
		 	console.log($scope.recipes)
		 });
	}
	$scope.getRecipesByCategory = function(category){
			dataService.getRecipesByCategory(category,function(response){
				$scope.recipes = response.data;
			});
	}
 	//This piece of code allows you to get all the recipes from a selected category.
	var select = document.getElementsByTagName('select')[0];


	select.addEventListener('change',function(evt){
		$scope.getRecipesByCategory(evt.target.value);
		
	});

 

	$scope.deleteRecipe = function(recipe_id){
		var conf = confirm("Are you sure you want to delete this recipe? ");
		if(conf){
			dataService.deleteRecipe(recipe_id);
			if(select.value != ''){
				$scope.getRecipesByCategory(select.value);
			}else{
				$scope.getAllRecipes();
			}
		}
	}
	// $scope.addRecipe = function(){

	// 	dataService.addRecipe({},function(){
	// 		if(select.value != ''){
	// 		$scope.getRecipesByCategory(select.value);
	// 	}else{
	// 		$scope.getAllRecipes();
	// 	}
	// 	},function(error){
	// 		console.log('There has ocurred an error while adding your new recipe' ,error);
	// 	});
		
	// }
	document.getElementById('addRecipe').addEventListener('click',function(){
		$window.location.href = '#!/add';
	});


 	$scope.getAllRecipes();
 	$scope.getAllCategories();
});

})();