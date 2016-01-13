angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.currentListing = $scope.listings[0];

    $scope.addListing = function() {
        
    };
      
    $scope.deleteListing = function(index) {
        $scope.listings.splice(index, 1);
    };
      
    $scope.showDetails = function(index) {
        $scope.currentListing = $scope.listings[index];
    };
  }
]);