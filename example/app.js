angular.module('slinkapp', ['moment-picker']).controller('demoController', ['$scope', function() {
  var ctrl = this;
  ctrl.maxDateMoment = moment().add(1, 'day');
  ctrl.maxDateString = moment().add(1, 'day').format('MMM YYYY');
  ctrl.minDateString = moment().subtract(17, 'month').format('MMM YYYY');
  ctrl.input = 'Select Month';
}])