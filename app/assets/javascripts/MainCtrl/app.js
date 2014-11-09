Blog = angular.module('Blog', ['ngRoute'])

Blog.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
            when('/post/:postId', {
                templateUrl: '../assets/mainPost.html',
                controller: 'postCtrl'})
            .otherwise({
                templateUrl: '../assets/mainIndex.html',
                controller: 'indexCtrl'
            });
}]);
