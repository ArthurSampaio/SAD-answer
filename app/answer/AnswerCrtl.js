'use strict';

angular.module('myApp.answer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/answer', {
    templateUrl: 'answer/answer.html',
    controller: 'AnswerCrtl'
  });
}])



.controller("AnswerCrtl", ['$scope', '$http', 'answerAPI',
	function($scope,$http, answerAPI){

		var begin = function(){
			loadCourses();
		};


		var loadCourses = function() {
			answerAPI.getCourses().then(function(data, status){
				$scope.courses = data;
				console.log(data)
			})
		}

		$scope.loadQuiz = function(course){
			$scope.quiz = answerAPI.getQuiz(course.id, course.courseName)
		}

		$scope.sendAnswer = function () {
			answerAPI.submitAnswers($scope.quiz);
		}

		begin();


	}])