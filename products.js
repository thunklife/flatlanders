/*global angular*/
(function(){
  var app = angular.module('store-products', []);

  app.directive('productTitle', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  });

  app.directive('productGallery', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-gallery.html',
      controller: function(){
        this.current = 0;
        this.setCurrent = function(n){
          this.current = n || 0;
        };
      },
      controllerAs: 'gallery'
    };
  });

  app.directive('productSpecs', function(){
    return {
      restrict: 'A',
      templateUrl: 'product-specs.html'
    };
  });

  app.directive('productPanels', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller: function(){
        this.tab = 1;
        this.selectTab = function(tabNum){
          this.tab = tabNum;
        };
        this.isSelected = function(tabNum){
          return this.tab === tabNum;
        };
      },
      controllerAs: 'panels'
    };
  });
})();
