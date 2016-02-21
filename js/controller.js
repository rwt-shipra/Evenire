var phonecatApp = angular.module('evenireApp', []);

phonecatApp.controller('evenireController',['$scope', function ($scope) {
  $scope.copy_right="Copyright \u00A9 Evenire-Planner";
}]);
phonecatApp.directive('introHeader', function(){
		return{
			restrict :'E',
			templateUrl :'./intro-header.html'
		};
	});
phonecatApp.directive('aboutUs', function(){
		return{
			restrict :'E',
			templateUrl :'./about-us.html'
		};
	});


phonecatApp.directive('downloadSection', function(){
		return{
			restrict :'E',
			templateUrl :'./download-section.html'
		};
	});

phonecatApp.directive('contactUs', function(){
		return{
			restrict :'E',
			templateUrl :'./contact-us.html'
		};
	});

phonecatApp.controller('evenireGallery',['$scope',function ($scope) {
  
 $scope.images=	[
	{fulls:"images/fulls/01.jpg",thumbs:"images/thumbs/01.jpg",headings:"Wedding In Church"},
	{fulls:"images/fulls/02.jpg",thumbs:"images/thumbs/02.jpg",headings:"Invitation Card"},
	{fulls:"images/fulls/03.jpg",thumbs:"images/thumbs/03.jpg",headings:"Live Concert"},
	{fulls:"images/fulls/04.jpg",thumbs:"images/thumbs/04.jpg",headings:"Official Party"},
	{fulls:"images/fulls/05.jpg",thumbs:"images/thumbs/05.jpg",headings:"Photoshot of newly wedded couple"},
	{fulls:"images/fulls/06.jpg",thumbs:"images/thumbs/06.jpg",headings:"Celebrities Party"},
	{fulls:"images/fulls/07.jpg",thumbs:"images/thumbs/07.jpg",headings:"Wedding With Beach View"},
	{fulls:"images/fulls/08.jpg",thumbs:"images/thumbs/08.jpg",headings:"New Year Party"},
	{fulls:"images/fulls/09.jpg",thumbs:"images/thumbs/09.jpg",headings:"Mandap Decoration"},
	{fulls:"images/fulls/10.jpg",thumbs:"images/thumbs/10.jpg",headings:"Sitting Arrangement In Open in Wedding"},
	{fulls:"images/fulls/11.jpg",thumbs:"images/thumbs/11.jpg",headings:"BirthDay Celebration"},
	{fulls:"images/fulls/12.jpg",thumbs:"images/thumbs/12.jpg",headings:"Loving Couple"},
	];

}]);

