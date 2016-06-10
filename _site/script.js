angular.module('todolist')
.controller('datepickerCtrl', ['$scope', '$timeout', function($scope, $timeout) {
    var vm = this;
  
    vm.date = new Date();
    vm.options = '{format:"DD.MM.YYYY HH:mm"}'
    
    
  }]);