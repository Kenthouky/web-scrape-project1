app.factory('SearchService',['$http',function($http){const backendUrl="/api/";function getSearch(){return $http({method:'POST',url:backendUrl+"SEARCH",data:$.param({SEARCH_WORD:localStorage.getItem('SEARCH_WORD')}),headers:{'Content-Type':'application/x-www-form-urlencoded'}});}
return{getSearch:getSearch,};}]);