app.controller('RecipeDetailController',function($scope,dataService,$location,$window, $routeParams){

$scope.categories = {};
$scope.recipe ={};
$scope.ingredients={};
$scope.foodItems = {};

$scope.getAllCategories = function(){
	 dataService.getAllCategories(function(response){
	 	$scope.categories = response.data;
	 	
	 });
 }

$scope.getRecipe = function (id) {
    dataService.getRecipe(id,function(response){
			$scope.recipe = response.data;
			console.log($scope.recipe);
			
			$scope.ingredients = $scope.recipe.ingredients;
		});
 }
 	
 $scope.getFoodItems = function(){
 	dataService.getFoodItems(function(response){
			$scope.foodItems = response.data;
			console.log($scope.foodItems);
			
			
		});
 }
 
 $scope.deleteRecipe = function(id){
 	dataService.getFoodItems(function(response){
			$scope.foodItems = response.data;
			console.log($scope.foodItems);
			
			
		});
 }

 $scope.delete= function(item,list) { 
  var index = list.indexOf(item);
  list.splice(index, 1);     
}
$scope.addIngredient=function(){
	var ingredient = {
		"amount":"",
		"condition":"",
		"foodItem":"Select a food Item"
	};
	 $scope.ingredients.push(ingredient);
	
}
$scope.addStep = function(){
	var step = {
		"description":""
	};
	 $scope.recipe.steps.push(step);
}

 	$scope.getAllCategories();
 	$scope.getRecipe($routeParams.id);
 	 $scope.getFoodItems();
});