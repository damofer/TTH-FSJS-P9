app.controller('RecipesController',function($scope,dataService){


 dataService.getAllCategories(function(response){
 	$scope.categories = response.data;
 	
 });
 dataService.getAllRecipes(function(response){
 	$scope.recipes = response.data;
 	console.log($scope.recipes)
 });

 //This piece of code allows you to get all the recipes from a selected category.
	var select = document.getElementsByTagName('select')[0];
	select.addEventListener('change',function(evt){
		
		dataService.getRecipesByCategory(evt.target.value,function(response){
			$scope.recipes = response.data;
		});
	});
});