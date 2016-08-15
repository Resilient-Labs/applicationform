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
    });
