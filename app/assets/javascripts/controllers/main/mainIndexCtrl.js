/**
 * Created by princemukka on 11/8/14.
 */


var indexCtrl = function($scope,$location,$http,postData){
    $scope.data= postData.data
    console.log(postData.data)
    postData.loadPosts();
    console.log(postData.data)

    $scope.viewPost = function(postId){
        $location.url('/post/'+postId);
    }

    $scope.navNewPost = function(){
        $location.url('/post/new')
    }
}