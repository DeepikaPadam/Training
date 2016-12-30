var app = angular.module("myApp", []);


app.controller("gameController", function($scope) {

    startGame();

    function startGame() {

        $scope.input = '';
        $scope.display = true;

        var randomNumber = Math.round((Math.random() * 10) * 10);
        console.log(randomNumber);
        $scope.text = "Choose a number between 1 to 100";

        $scope.onClick = function() {

            if ($scope.input == randomNumber) {
                $scope.text = "Great Guessing..! You won";
                $scope.display = false;

            } else if ($scope.input < randomNumber) {
                $scope.text = "The entered number is low";
                $scope.input = "";

            } else if ($scope.input > randomNumber) {
                $scope.text = "The entered number is high";
                $scope.input = "";
            
            } else {
                $scope.text = "Enter the valid Number";
                $scope.input = "";
            }

        };


        $scope.reloadGame = function() {
            startGame();
        }
    };

});