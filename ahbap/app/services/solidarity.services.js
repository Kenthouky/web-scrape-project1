app.factory('SolidarityService',['$http',function($http){const backendUrl="/api/";function getCategories(){return $http.get(backendUrl+"getSolidarityCategories");}
function getCategory(token){return $http.get(backendUrl+"getSolidarityCategory/"+token);}
function getCampaign(id){return $http.get(backendUrl+"getCampaign/"+id);}
function SubscribeToCampaign(id){return $http.get(backendUrl+"subscribeToCampaign/"+id);}
function createSolidarity(application,files,file_answers){var formData=new FormData();for(item in files){formData.append(item+"-rf",files[item]);}
for(item in file_answers){formData.append(item+"-af",file_answers[item]);}
formData.append("datastr",JSON.stringify(application));return $http({method:'POST',url:backendUrl+"solidarity/apply",headers:{'Content-Type':undefined},data:formData,cache:false,contentType:false,processData:false});}
function getTowns(cityId){return $http({method:'GET',url:backendUrl+"GET_TOWNS_BY_CITY/"+cityId,headers:{'Content-Type':'application/x-www-form-urlencoded'}});}
function getSolidarityContractItems(){return $http.get(backendUrl+"DonationPayment/GetSolidarityContractItems");}
return{getCategories:getCategories,getCategory:getCategory,getCampaign:getCampaign,getTowns:getTowns,createSolidarity:createSolidarity,SubscribeToCampaign:SubscribeToCampaign,getSolidarityContractItems:getSolidarityContractItems,};}]);