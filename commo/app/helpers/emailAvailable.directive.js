app.directive("emailAvailable",function($http,$timeout,$q){"use strict";return{restrict:"AE",require:"ngModel",scope:{options:"=",model:"=ngModel"},link:function($scope,$element,$attr,$model){$model.$asyncValidators.emailExists=function(){var defer=$q.defer();var sorgu=document.getElementById("email_sorgu").value;$timeout(function(){$http.get(BASE_URL+"api/CHECK_EMAIL/"+sorgu).then(function(KullaniciAdi){var Sonuc=KullaniciAdi.data.STATUS;$model.$setValidity("emailExists",Sonuc);defer.resolve;});},1000);return defer.promise;};}};})