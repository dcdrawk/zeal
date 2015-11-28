'use strict';

angular.module('zealAppApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User, $state) {
    console.log($state);
    $scope.expanded = false;
    
    
    // Use the User $resource to fetch all users
    $scope.users = User.query();
    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };
    
    $scope.selectUser = function(id){
        // $scope.selectedUser = Auth.getUser(id);
        $scope.expanded = true;
        
        // Simple GET request example:
        $http({
        method: 'GET',
        url: '/api/users/' + id
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.selectedUser = response.data;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    };
    
    $scope.closeInfoPanel = function(){
        $scope.selectedUser = {};
        $scope.expanded = false;
    };
  });
