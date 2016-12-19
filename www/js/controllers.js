angular.module('app.controllers', ['ionic.cloud'])

.controller('cameraTabDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
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

.controller('signupCtrl', ['$scope', '$state', '$stateParams', '$ionicSideMenuDelegate',  '$ionicAuth', '$ionicUser', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope,$stateParams, $ionicAuth, $ionicUser,$state ) {



console.log("inside signupCtrl");
  //to disableSideMenuDrag
  //  $ionicSideMenuDelegate.canDragContent(false)

  $scope.signup = signup;

   $scope.data = {   'username': '',
                     'email': '',
                     'password': ''
                  }
   $scope.error = '';




   function signup(){
       console.log($ionicAuth);

     var details = {'email': 'bi@ionic.io', 'password': 'puppies123'};

  $ionicAuth.signup(details).then(function() {
  // `$ionicUser` is now registered
  }, function(err) {
  for (var e of err.details) {
  if (e === 'conflict_email') {
  alert('Email already exists.');
  } else {
  // handle other errors
  }
  }
  });
      // $scope.error = '';
      //
      //  $ionicAuth.signup($scope.data).then(function(){
      //     // ionicUser is now registered
      //    $ionicAuth.login('basic', $scope.data).then(function(){
      //        $state.go('tabsController.cameraTabDefaultPage');
      //    });
      //
      //  }, function(err){
      //
      //       var error_lookup = {
      //                 'required_email': 'missing email field',
      //                 'required_password': 'missing password field',
      //                 'conflict_email':'A user has already signed up with that email',
      //                 'conflict_username':' A user has already signed up with that username',
      //                 'invalid_email' : 'the email did not pass validation'
      //               }
      //
      //       $scope.error = error_lookup[err.details[0]]
      //       console.log(err)
      //  });
      //

   }




}])
