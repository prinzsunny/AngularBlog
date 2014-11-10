
angular.module('Blog').config(['$routeProvider',
    function($routeProvider){
        $routeProvider
            .when('/post/new',{
                templateUrl:'../assets/mainCreatePost.html',
                controller:'createPostCtrl'
            })
            .when('/post/:postId', {
            templateUrl: '../assets/mainPost.html',
            controller: 'postCtrl'})
            .otherwise({
                templateUrl: '../assets/mainIndex.html',
                controller: 'indexCtrl'
            });
}]);

angular.module('Blog').factory('postData', [
    '$http', function($http,$location) {

        var postData;
        postData = {
            data: {
                posts: [
                    {
                        title: 'My first post',
                        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet lobortis vulputate. Ut tempus, orci eu tempor sagittis, mauris orci ultrices arcu, in volutpat elit elit semper turpis. Maecenas id lorem quis magna lacinia tincidunt. In libero magna, pharetra in hendrerit vitae, luctus ac sem. Nulla velit augue, vestibulum a egestas et, imperdiet a lacus. Nam mi est, vulputate eu sollicitudin sed, convallis vel turpis. Cras interdum egestas turpis, ut vestibulum est placerat a. Proin quam tellus, cursus et aliquet ut, adipiscing id lacus. Aenean iaculis nulla justo.'
                    }, {
                        title: 'A walk down memory lane',
                        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo sem, imperdiet in faucibus et, feugiat ultricies tellus. Vivamus pellentesque iaculis dolor, sed pellentesque est dignissim vitae. Donec euismod purus non metus condimentum porttitor suscipit nibh tempor. Etiam malesuada elit in lectus pharetra facilisis. Fusce at nisl augue. Donec at est felis. Sed a gravida diam. Nunc nunc mi, egestas non dignissim et, porta aliquam ante.'
                    }
                ]
            },
            isLoaded : false

    };

        postData.loadPosts = function() {
            if(!postData.isLoaded){
            $http.get('./posts.json').success(function(data) {
                postData.data.posts = data;
                postData.isLoaded = true;
                console.log('Successfully loaded posts.');
            }).error(function() {
                console.error('Failed to load posts.');
            })
            };
        };

        postData.createPost = function(newPost) {
            var data;
            if (newPost.newPostTitle === '' || newPost.newPostContents === '') {
                alert('Neither the Title nor the Body are allowed to be left blank.');
            }
            data = {
                new_post: {
                    title: newPost.newPostTitle,
                    contents: newPost.newPostContents
                }
            };
            $http.post('./posts.json', data).success(function(data) {
                postData.data.posts.push(data);
                $location.url('/')
            }).error(function() {
                console.error('Failed to create new post.');
            });
        };
        console.log("Initialized postData.");
        return postData;
    }
]);
