app.controller('RecipesController',function($scope,dataService){
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
		dataService.deleteRecipe(recipe_id);
		if(select.value != ''){
			$scope.getRecipesByCategory(select.value);
		}else{
			$scope.getAllRecipes();
		}
	}
	$scope.addRecipe = function(recipe_id){
		dataService.deleteRecipe(recipe_id);
		if(select.value != ''){
			$scope.getRecipesByCategory(select.value);
		}else{
			$scope.getAllRecipes();
		}
	}


 	$scope.getAllRecipes();
 	$scope.getAllCategories();
});