app.factory('PublicProfileService',['$http',function($http){const backendUrl="/api/";function getUserInfo(userId){return $http.get(backendUrl+"GET_USER_INFO_BY_ID/"+userId);}
return{getUserInfo:getUserInfo,};}]);