/**
 * Created by princemukka on 11/8/14.
 */


var postCtrl = function($scope,$routeParams,postData) {
    console.log(postData);
    $scope.data = postData.data
    console.log($scope.data);
    postData.loadPosts();
    $scope.data.postId = $routeParams.postId;
}