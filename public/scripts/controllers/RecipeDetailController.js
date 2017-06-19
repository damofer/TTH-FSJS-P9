app.controller('RecipeDetailController',function($scope,dataService,$location,$window, $routeParams){

$scope.categories = {};
$scope.recipe ={};
$scope.ingredients={};
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
 	
 	$scope.getAllCategories();
 	$scope.getRecipe($routeParams.id);
});