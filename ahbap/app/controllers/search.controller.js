app.controller('Search',function($scope,SearchService){console.log("Search Controller reporting for duty.");$scope.SEARCH_WORD=localStorage.getItem('SEARCH_WORD');$scope.GET_SEARCH=function(){SearchService.getSearch().then(function(response){console.log(response);if(response.data){$scope.SEARCH_RESULTS=response.data;}
if(!response.data){console.log(response);}});};$scope.GET_SEARCH()});