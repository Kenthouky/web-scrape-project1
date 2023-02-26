app.controller('Solidarity',function($scope,SolidarityService,$filter,$window,CommonService){console.log("Solidarity Controller reporting for duty.");$scope.BUSINESS_SECTORS=[{ID:"1",NAME:"Akaryakıt"},{ID:"2",NAME:"Tekstil"},{ID:"3",NAME:"Otomotiv"},{ID:"4",NAME:"Sağlık"},{ID:"5",NAME:"Enerji"},{ID:"6",NAME:"İnternet"},{ID:"7",NAME:"Diş Sağlığı"},{ID:"8",NAME:"Reklamcılık & PR"},{ID:"9",NAME:"Tarım"},{ID:"10",NAME:"TV"},{ID:"11",NAME:"Turizm"},{ID:"12",NAME:"Kitapçılık"},{ID:"13",NAME:"Yiyecek & İçecek"},{ID:"14",NAME:"Eğitim"},{ID:"15",NAME:"Yazılım"},{ID:"16",NAME:"Çiftçilik"},{ID:"17",NAME:"Sigorta"},{ID:"18",NAME:"Finans"},{ID:"19",NAME:"Muhasebe"},{ID:"20",NAME:"Kırtasiye"},{ID:"21",NAME:"Mimarlık"},{ID:"22",NAME:"Hastane / Doktor"},{ID:"23",NAME:"Devlet Dairesi"},{ID:"24",NAME:"Çevrecilik"},{ID:"25",NAME:"Elektrik / Elektronik"},{ID:"26",NAME:"Eğlence"},{ID:"27",NAME:"İnşaat"},{ID:"28",NAME:"İletişim"},{ID:"29",NAME:"Hukuk"},{ID:"30",NAME:"Denizcilik"},{ID:"31",NAME:"Dini Kuruluş"},{ID:"32",NAME:"Emlak"},{ID:"33",NAME:"Sanayi"},{ID:"34",NAME:"İlaç"},{ID:"35",NAME:"Film / Stüdyo"},{ID:"36",NAME:"Habercilik"},{ID:"37",NAME:"Hayvancılık"},{ID:"38",NAME:"Perakende"},{ID:"39",NAME:"Restaurant"},{ID:"40",NAME:"Madencilik"},{ID:"41",NAME:"Medikal Cihaz"},{ID:"42",NAME:"Müzik"},{ID:"43",NAME:"Spor"},{ID:"44",NAME:"Taşımacılık"},{ID:"45",NAME:"Aktivite"}];$scope.APPLICATION_ERR=false;$scope.APPLICATION_SUC=false;$scope.APPLICATION_ERR_RESET=function(){$scope.APPLICATION_ERR=false;};$scope.TO_UPPERCASE=function(WORD){var string=WORD;var letters={"i":"İ","ş":"Ş","ğ":"Ğ","ü":"Ü","ö":"Ö","ç":"Ç","ı":"I"};string=string.replace(/(([iışğüçö]))/g,function(letter){return letters[letter];});return string.toUpperCase();};$scope.GRANTEE={};$scope.GRANTEE.phone=5;var url=location.href;var token=url.split("yardim/")[1];if(token!=undefined&&token!=null&&token!=""){SolidarityService.getCategory(token).then((response)=>showCategories(response));}
else{SolidarityService.getCategories().then((response)=>showCategories(response));}
function showCategories(response){if(response.data){var ahbap_categories=[];var sponsored_categories=[];for(var i=0;i<response.data.data.length;i++){var cat=response.data.data[i];if(cat.sponsor===null){ahbap_categories.push(response.data.data[i]);}
else{sponsored_categories.push(response.data.data[i]);}}
$scope.Solidarity_Categories=ahbap_categories;$scope.Sponsored_Solidarity_Categories=sponsored_categories;}};SolidarityService.getSolidarityContractItems().then(function(response){$scope.SOLIDARITY_CONTRACT_ITEMS=response.data.data;});$scope.CITY_CHANGED=function(cityId){SolidarityService.getTowns(cityId).then(function(response){if(response.data){$scope.towns=response.data.data;}});};$scope.SELECT_CATEGORY=function(category){if(!category){$scope.SELECTED_SOLIDARITY_CATEGORY=null;}else{$scope.SELECTED_SOLIDARITY_CATEGORY=category;}};$scope.ClearSelectedCategory=function(){$scope.SELECTED_SOLIDARITY_CATEGORY=null;};$scope.GET_SOLIDARITY_OPTION=function(option){if(!option){$scope.SELECTED_TYPE_FORM=null;}else{if(!option.isActive)
return;$(".continueToApply").attr("disabled","disabled").attr("title","Lütfen bekleyiniz...").html("Başvuruya Devam Et <img src='/assets/img/loading_avatar.gif' width='20'>");SolidarityService.getCampaign(option.solidaritySubCategoryId).then(function(response){$scope.SELECTED_TYPE_FORM=response.data.data;if($scope.SELECTED_TYPE_FORM){$scope.CLARIFICATIONS=[];for(var i=0;i<$scope.SELECTED_TYPE_FORM.solidaritySubCatsClarifications.length;i++){var clarification={id:$scope.SELECTED_TYPE_FORM.solidaritySubCatsClarifications[i].solidaritySubCatsClarificationId,isChecked:false}
$scope.CLARIFICATIONS.push(clarification);}
$(".continueToApply").removeAttr("disabled").removeAttr("title").html("Başvuruya Devam Et");}});}};$scope.SubscribeToCampaign=function(id){$("#sub_btn_"+id).attr("disabled","disabled");SolidarityService.SubscribeToCampaign(id).then(function(response){if(response.data.data)
Swal.fire({title:"Başarılı!",html:"Mail adresiniz bilgilendirme sistemimize eklenmiştir! Seçili kategori için başvurular tekrardan açıldığında bilgilendirme maili alacaksınız!",icon:"success",showConfirmButton:true,confirmButtonText:"Tamam"}).then(()=>{window.location.reload();});else
Swal.fire({title:"Hata!",html:response.data.message,icon:"error",showConfirmButton:true,confirmButtonText:"Tamam"});$("#sub_btn_"+id).removeAttr("disabled");});};$scope.ClearSelectedOption=function(){$scope.SOLIDARITY_FORM_VIEW=false;$scope.SELECTED_TYPE_FORM=null;$scope.CLARIFICATIONS=null;};$scope.SOLIDARITY_FORM_VIEW=false;$scope.SHOW_SOLIDARITY_FORM=function(option){$scope.SOLIDARITY_FORM_VIEW=true;$("#RESUME_SOLIDAITY_MODAL"+option).modal("hide");$window.scrollTo(0,0);};$scope.toggleCheckboxSelection=function toggleCheckboxSelection(value,property,propertyIndex){if($scope.SELECTED_TYPE_FORM.FORM_FIELDS==undefined){$scope.SELECTED_TYPE_FORM.FORM_FIELDS={};}
if($scope.SELECTED_TYPE_FORM.FORM_FIELDS[propertyIndex]==undefined){$scope.SELECTED_TYPE_FORM.FORM_FIELDS[propertyIndex]={DATA:[]};}
var idx=$scope.SELECTED_TYPE_FORM.FORM_FIELDS[propertyIndex].DATA.indexOf(value);if(idx>-1){$scope.SELECTED_TYPE_FORM.FORM_FIELDS[propertyIndex].DATA.splice(idx,1);}
else{$scope.SELECTED_TYPE_FORM.FORM_FIELDS[propertyIndex].DATA.push(value);}
$scope.OptionChanged(property);};$scope.OptionChanged=function(field){if(field.propertyType==7){var order=field.order-1;var selectedOptionId=$scope.SELECTED_TYPE_FORM.FORM_FIELDS[order].DATA;var selectedOptions=field.solidaritySubCatsPropertyOptions.filter(p=>selectedOptionId.includes(p.optionId));var otherOptions=field.solidaritySubCatsPropertyOptions.filter(p=>!selectedOptionId.includes(p.optionId));hideProps(otherOptions);for(var i=0;i<selectedOptions.length;i++){showProps(selectedOptions[i]);}}
else{var order=field.order-1;var selectedOption=$scope.SELECTED_TYPE_FORM.FORM_FIELDS[order].SELECTED_OPTION;var selectedOptionId=selectedOption.optionId;var otherOptions=field.solidaritySubCatsPropertyOptions.filter(p=>p.optionId!==selectedOptionId);hideProps(otherOptions);showProps(selectedOption);}};$scope.DataSourceOptionChanged=function(field){var order=field.order-1;var selectedOptionId=$scope.SELECTED_TYPE_FORM.FORM_FIELDS[order].DATA;var _nextPropOrders=field.dataSourceNextPropertyOrders.split(",");if(field.dataSourceNextPropertyOrders!==""){for(var i=0;i<_nextPropOrders.length;i++){var prop=$scope.SELECTED_TYPE_FORM.solidaritySubCatsProps.find(p=>p.order===parseInt(_nextPropOrders[i])+1);prop.show=true;if(prop.dataSourceFields!=null){for(var j=0;j<prop.dataSourceFields.length;j++){var dataSourceField=prop.dataSourceFields[j];if(dataSourceField.parentId==selectedOptionId){dataSourceField.show=true;}
else{dataSourceField.show=false;}}}
if(prop.dataSourceNextPropertyOrders!=null&&prop.dataSourceNextPropertyOrders!==""){dataSourceHide(prop);}}}};function dataSourceHide(prop){var _nextPropOrders=prop.dataSourceNextPropertyOrders.split(",");for(var i=0;i<_nextPropOrders.length;i++){var nextProp=$scope.SELECTED_TYPE_FORM.solidaritySubCatsProps.find(p=>p.order===parseInt(_nextPropOrders[i])+1);nextProp.show=false;if(nextProp.dataSourceNextPropertyOrders!=null&&nextProp.dataSourceNextPropertyOrders!==""){dataSourceHide(prop);}}}
$scope.NumericInputChanged=function(field,oldValue){var order=field.order-1;var value=$scope.SELECTED_TYPE_FORM.FORM_FIELDS[order].DATA;var maxValue=field.maxValue;if(maxValue!=null&&(value>maxValue||value<0)){$scope.SELECTED_TYPE_FORM.FORM_FIELDS[order].DATA=parseFloat(oldValue);return;}
var propsShow=[];var propsHide=[];for(var i=0;i<field.solidaritySubCatsPropertyConditions.length;i++){if(field.solidaritySubCatsPropertyConditions[i].conditionType==1){if(value===field.solidaritySubCatsPropertyConditions[i].value){propsShow.push(field.solidaritySubCatsPropertyConditions[i]);continue;}}
else if(field.solidaritySubCatsPropertyConditions[i].conditionType==2){if(value>field.solidaritySubCatsPropertyConditions[i].value){propsShow.push(field.solidaritySubCatsPropertyConditions[i]);continue;}}
else if(field.solidaritySubCatsPropertyConditions[i].conditionType==3){if(value<field.solidaritySubCatsPropertyConditions[i].value){propsShow.push(field.solidaritySubCatsPropertyConditions[i]);continue;}}
else if(field.solidaritySubCatsPropertyConditions[i].conditionType==4){if(value>=field.solidaritySubCatsPropertyConditions[i].value){propsShow.push(field.solidaritySubCatsPropertyConditions[i]);continue;}}
else if(field.solidaritySubCatsPropertyConditions[i].conditionType==5){if(value<=field.solidaritySubCatsPropertyConditions[i].value){propsShow.push(field.solidaritySubCatsPropertyConditions[i]);continue;}}
propsHide.push(field.solidaritySubCatsPropertyConditions[i]);}
hideProps(propsHide);showPropsConditions(propsShow);};function hideProps(options){for(var i=0;i<options.length;i++){var _nextPropIds=options[i].nextPropertyIds.split(",");if(options[i].nextPropertyIds!==""){for(var j=0;j<_nextPropIds.length;j++){var prop=$scope.SELECTED_TYPE_FORM.solidaritySubCatsProps.find(p=>p.order===parseInt(_nextPropIds[j])+1);prop.show=false;if(prop.solidaritySubCatsPropertyOptions!==undefined&&prop.solidaritySubCatsPropertyOptions!==null){hideProps(prop.solidaritySubCatsPropertyOptions);}}}}}
function showProps(selectedOption){if(selectedOption!==undefined&&selectedOption!==null){var nextPropIdsStr=selectedOption.nextPropertyIds;var nextPropIds=nextPropIdsStr.split(",");if(nextPropIdsStr!==""){for(var i=0;i<nextPropIds.length;i++){var prop=$scope.SELECTED_TYPE_FORM.solidaritySubCatsProps.find(p=>p.order===parseInt(nextPropIds[i])+1);prop.show=true;if($scope.SELECTED_TYPE_FORM.FORM_FIELDS[prop.order-1]!==undefined&&$scope.SELECTED_TYPE_FORM.FORM_FIELDS[prop.order-1]!==null){showProps($scope.SELECTED_TYPE_FORM.FORM_FIELDS[prop.order-1].SELECTED_OPTION);}}}}}
function showPropsConditions(selectedOptions){for(var i=0;i<selectedOptions.length;i++){var nextPropIdsStr=selectedOptions[i].nextPropertyIds;var nextPropIds=nextPropIdsStr.split(",");if(nextPropIdsStr!==""){for(var j=0;j<nextPropIds.length;j++){var prop=$scope.SELECTED_TYPE_FORM.solidaritySubCatsProps.find(p=>p.order===parseInt(nextPropIds[j])+1);prop.show=true;if($scope.SELECTED_TYPE_FORM.FORM_FIELDS[prop.order-1]!==undefined&&$scope.SELECTED_TYPE_FORM.FORM_FIELDS[prop.order-1]!==null){showProps($scope.SELECTED_TYPE_FORM.FORM_FIELDS[prop.order-1].SELECTED_OPTION);}}}}}
$scope.SHOW_CLARIFICATION_TEXT=function(CLARIFICATION,index){$scope.SELECTED_CLARIFICATION=CLARIFICATION;$scope.SELECTED_CLARIFICATION_INDEX=index;$('#CLARIFICATION').modal('show');};$scope.APPROVE_CLARIFICATION=function(){$scope.CLARIFICATIONS[$scope.SELECTED_CLARIFICATION_INDEX].isChecked=true;};$scope.REJECT_CLARIFICATION=function(){$scope.CLARIFICATIONS[$scope.SELECTED_CLARIFICATION_INDEX].isChecked=false;};$scope.fileSelected=function(element){var selectedFile=element.files[0];if($scope.SELECTED_TYPE_FORM.FORM_FILES===undefined){$scope.SELECTED_TYPE_FORM.FORM_FILES={};}
$scope.SELECTED_TYPE_FORM.FORM_FILES[element.getAttribute("data-id")]=selectedFile;};$scope.fileAnswerSelected=function(element){var selectedFile=element.files[0];if($scope.SELECTED_TYPE_FORM.FORM_FILE_ANSWERS===undefined){$scope.SELECTED_TYPE_FORM.FORM_FILE_ANSWERS={};}
$scope.SELECTED_TYPE_FORM.FORM_FILE_ANSWERS[element.getAttribute("data-id")]=selectedFile;};$scope.SEND_APPLICATION=function(form){let apply={APPLICATION_TYPE:'individual',CATEGORY:$scope.SELECTED_TYPE_FORM.solidaritySubCategoryId,OPTION:$scope.SELECTED_TYPE_FORM.id,GRANTEE:$scope.GRANTEE,PROPERTIES:$scope.SELECTED_TYPE_FORM.FORM_FIELDS,FILES:$scope.SELECTED_TYPE_FORM.FORM_FILES,FILE_ANSWERS:$scope.SELECTED_TYPE_FORM.FORM_FILE_ANSWERS,CLARIFICATIONS:$scope.CLARIFICATIONS};for(i in $scope.SOLIDARITY_CONTRACT_ITEMS){if($scope.SOLIDARITY_CONTRACT_ITEMS[i].donationCategoryId==$scope.SELECTED_SOLIDARITY_CATEGORY.solidarityCategoryId||($scope.SOLIDARITY_CONTRACT_ITEMS[i].isRequired&&$scope.SOLIDARITY_CONTRACT_ITEMS[i].donationCategoryId==0)){let checkboxIsChecked=$("#checkboxKVKK"+i).is(':checked');if(!checkboxIsChecked){$scope.APPLICATION_ERR=true;$scope.APPLICATION_ERR_MESSAGE="Lütfen, tüm formları/sözleşmeleri, okuduğunuza dair onaylayınız!";return;}}}
$("#applyBtn").attr("disabled","disabled");SolidarityService.createSolidarity(apply,$scope.SELECTED_TYPE_FORM.FORM_FILES,$scope.SELECTED_TYPE_FORM.FORM_FILE_ANSWERS).then(function(response){console.log(response);if(response.data.status){$scope.APPLICATION_SUC=true;$scope.APPLICATION_SUC_MESSAGE=response.data.message;window.location.href=BASE_URL+"belge-yonetimi";}else{$scope.APPLICATION_ERR=true;$scope.APPLICATION_ERR_MESSAGE=response.data.message;}
$("#applyBtn").removeAttr("disabled");},function(response){console.log(response);});};$scope.initPage=async function(){await CommonService.listCitiesTr().then(function(response){$scope.sehirlerTR=response.data.data;});}
$scope.initPage();});