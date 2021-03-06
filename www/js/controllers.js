angular.module('app.controllers', ['ionic.cloud'])

.controller('cameraTabDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include an y angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('cartTabDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('cloudTabDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', ['$scope', '$state', '$stateParams', '$ionicSideMenuDelegate', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $ionicSideMenuDelegate) {
    //to disableSideMenuDrag
    //$ionicSideMenuDelegate.canDragContent(false);
   console.log("inside loginCtrl");
}])

.controller('signupCtrl', ['$scope','$stateParams', '$ionicSideMenuDelegate',  '$ionicUser', '$ionicAuth', '$state', '$q',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicSideMenuDelegate, $ionicUser, $ionicAuth, $state, $q) {
    
    
    $scope.data = {
        'app_id':'8f2e06a0',
        'name': '',
        'email': '',
        'password': ''

    }
    
    $scope.error='';
         

        $scope.signup = function(){


        $scope.error = '';
        console.log($scope.data);
        
        $ionicAuth.signup($scope.data).then(function() {
            // `$ionicUser` is now registered
            console.log("inside signup");
            $ionicAuth.login('basic', $scope.data).then(function(){
              $state.go('tabsController.cameraTabDefaultPage');
            });
        }, function(err) {
            
            var error_lookup = {
                'required_email': 'Missing email field',
                'required_password': 'Missing password field',
                'conflict_email': 'A user has already signed up with that email',
                'conflict_username': 'A user has already signed up with that username',
                'invalid_email': 'The email did not pass validation'
            }    
        
            $scope.error = error_lookup[err.details[0]];
        });
    }

}])
