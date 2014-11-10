/**
 * Created by princemukka on 11/9/14.
 */
 var createPostCtrl = function($scope, $location, postData) {
    console.log(postData);
    $scope.data = postData.data;
    postData.loadPosts();
    $scope.formData = {
        newPostTitle: '',
        newPostContents: ''
    };

    $scope.navNewPost = function() {
         $location.url('/post/new');
    };

    $scope.navHome = function() {
         $location.url('/');
    };

    $scope.clearPost = function() {
        $scope.formData.newPostTitle = ''
        $scope.formData.newPostContents = ''
    }
    $scope.createPost = function(){
        postData.createPost($scope.formData)
    };
};