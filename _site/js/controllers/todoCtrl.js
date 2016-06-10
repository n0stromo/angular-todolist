angular.module( 'todolist')
.controller('TodoCtrl', function TodoCtrl($scope, $location, todoStorage) {
	// Get todos from localStorage
	var todos = $scope.todos = todoStorage.get();
	
	//	### dropdown menu ###
	
	$scope.bgrColor = [{ className: "low", value: 'white', id: 'a' }, { className: "medium", value: 'yellow', id: 'b' }, { className: "high", value: 'red', id: 'c' }];

	//#####  Add new todo 
	$scope.addTodo = function () {
		var newTodo = $scope.newTodo;
		var newInfo = $scope.newInfo;
		var newColor = $scope.newColor;
		var newId = $scope.newId;
		
		if (newTodo.length === 0) {
			return;
		}
		// Add a todo to var-->todos
		todos.push({
			title: newTodo,
			place: newInfo,
			description: newInfo,
			completed: false,
			color: newColor,
			id: newId,
		});
		
		//save in localStorage
		todoStorage.put(todos);
		//input 
		$scope.newTodo = '';
		
	};

	//delete todo
	$scope.deleteTodo = function (todo) {
		//Changes the content of an array, adding new elements while removing old elements.
		todos.splice(todos.indexOf(todo), 1);
		//put all todos into storage
		todoStorage.put(todos);
	};

	//edit todo 
	//call doneEditing with ng-blur-> a blur event fires when an element has lost focus
	$scope.doneEditing = function (todo) {
		//empty
		//$scope.editedTodo = null;
		todo.title = todo.title.trim();
		todo.description = todo.description.trim();
		todo.place = todo.place.trim();
		if (!todo.title) {
			// If todo title empty, then remove todo
			$scope.deleteTodo(todo);
		}
		todoStorage.put(todos);
	};

	if ($location.path() === '') {
		// If the $location.path is empty (), is set to/
		$location.path('/');
	}

	$scope.location = $location;

	$scope.$watch('location.path()', function (path) {
		$scope.statusFilter = { '/active': {completed: false}, '/completed': {completed: true} }[path];
	});

	//Checkbox call todoCompleted with ng-click
	$scope.todoCompleted = function (todo) {
		$scope.remainingCount += todo.completed ? -1 : 1;
		todo.completed = !completed;
	
		todoStorage.put(todos);
	};

	$scope.setColor = function (todo) {
		
		$scope.newColor = $scope.bgrColor[0].className;
		
	}
	
	$scope.update = function (todo) {
		$scope.newId = $scope.bgrColor.id[$index];
		todoStorage.put(todos);
		
	}
	


});
//jQuery wird erst genutzt, wenn alle Elemente für die Website vollständig geladen sind
$(document).ready(function() {});







