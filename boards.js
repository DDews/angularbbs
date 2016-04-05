/**
 * Created by Dan on 4/4/2016.
 */
/**
 * Created by Dan on 4/1/2016.
 */
angular.module('app', ['ngRoute'])
    .factory('BoardService', ['$http', function ($http) {
        var path = '/bbs/rest/hello/test';
        var boards = [];

        $http.get(path).success(function (data) {
            console.log(data);
            data.forEach(function (board) {
                console.log(board);
                boards.push(board);
            });
        });

        return {
            boards: boards,
        };
    }])
    .config(function($routeProvider){
        $routeProvider.when("/",
            {
                templateUrl: "boards.html",
                controller: "BoardCtrl",
                controllerAs: "board"
            }
            )
            .when('/cookies',
                {
                    template: "NOM NOM NOM NOM"
                }
            )
            .otherwise({
                template: "This route isn't set!"
            });
    })
    .controller('BoardCtrl', ['$scope', 'BoardService',
        function ($scope, BoardService) {
            $scope.boards = BoardService.boards;
            $scope.toggleForm = "Off";
            $scope.toggle = function() {
                $scope.toggleForm = $scope.toggleForm == "On" ? "Off" : "On";
            }
        }
    ])
    .controller('Login',function($scope) {
        $scope.loggedIn = "false";
    })
    .controller('LoginForm', function($scope) {
        $scope.loginForm = "login";
        $scope.setForm = function(mode) {
            $scope.loginForm = mode;
        }
        $scope.register = function() {
            console.log("wtf");
        }
    });
