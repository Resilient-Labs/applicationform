angular.module('Application', ['ngSanitize'] )
    .controller('AppCtrl', function ($scope) {

        $scope.isValidContact = function() {
            return $scope.name !== undefined && $scope.email !== "" && $scope.telephone !== "" && $scope.organization !== ""
        };

        $scope.isValidExplanation = function() {
            return $scope.whyYou !== undefined;
        };

        $scope.isValidForm = function() {
            var statement = "This returned this boolean: ";
            console.log( statement + $scope.isValidContact() && $scope.isValidExplanation());
            return $scope.isValidContact() && $scope.isValidExplanation();
        }

        $scope.showForm = function() {
            $scope.triggerForm = false;
            console.log($scope.triggerForm);
            $scope.triggerForm = !$scope.triggerForm;
            return $scope.triggerForm;
        }

        $scope.timeline = {
            date: ['Sep 14', 'Oct 5', 'Oct 12', 'Oct 17', 'Nov 1', 'Nov 2', 'Nov 4', 'Dec 16'],
            event: []
        }
    });
