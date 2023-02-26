app.factory('CommonService',['$http',function($http){const backendUrl="/api/";function listSlider(){return $http.get(backendUrl+"GET_SLIDERS");}
function listAllNews(){return $http.get(backendUrl+"GET_ALL_NEWS");}
function listCountries(){return $http.get(backendUrl+"GET_COUNTRIES");}
function listCities(){return $http.get(backendUrl+"GET_CITIES");}
function listCitiesTr(){return $http.get(backendUrl+"GET_CITIES_BY_COUTRY_CODE/TR");}
function listTowns(){return $http.get(backendUrl+"GET_TOWNS");}
function listTownsByCity(cityId){return $http.get(backendUrl+"GET_TOWNS_BY_CITY/"+cityId);}
function listNodes(){return $http.get(backendUrl+"GET_NODES");}
function listUniversites(){return $http.get(backendUrl+"GET_UNIVERSITIES");}
function listWorkGroups(){return $http.get(backendUrl+"GET_WORK_GROUPS");}
function listHearAboutUs(){return $http.get(backendUrl+"GET_HEAR_ABOUT_US");}
function getSocialMediaConfirmation(){return $http.get(backendUrl+"GET_SOCIAL_MEDIA_CONTENT_CONFIRMATIONS");}
return{listSlider:listSlider,listAllNews:listAllNews,listCountries:listCountries,listCities:listCities,listCitiesTr:listCitiesTr,listTowns:listTowns,listTownsByCity:listTownsByCity,listNodes:listNodes,listUniversites:listUniversites,listWorkGroups:listWorkGroups,listHearAboutUs:listHearAboutUs,getSocialMediaConfirmation:getSocialMediaConfirmation};}]);