app.directive('ahbapReady',function(){"use strict";return{link:function($scope){setTimeout(function(){$scope.$apply(function(){angular.element(document).ready(function(){var swiper=new Swiper('.ahbap-home-slider',{spaceBetween:30,effect:'fade',loop:true,autoplay:{delay:5000,},mousewheel:{invert:false,},pagination:{el:'.ahbap-home-slider__pagination',clickable:true,}});$("#people-may-you-know").owlCarousel({items:4,itemsDesktop:[1350,4],itemsDesktopSmall:[1000,7],itemsTablet:[600,1],itemsMobile:false,pagination:true,autoPlay:8000,slideSpeed:300});var swiper=new Swiper('.ahbap-news-slider',{effect:'coverflow',grabCursor:true,loop:true,autoplay:{delay:3000,},centeredSlides:true,keyboard:true,spaceBetween:0,slidesPerView:'auto',speed:300,coverflowEffect:{rotate:0,stretch:0,depth:0,modifier:3,slideShadows:false},breakpoints:{480:{spaceBetween:0,centeredSlides:true}},simulateTouch:true,navigation:{nextEl:'.ahbap-news-slider-next',prevEl:'.ahbap-news-slider-prev'},pagination:{el:'.ahbap-news-slider__pagination',clickable:true}});});});},1000);}};})