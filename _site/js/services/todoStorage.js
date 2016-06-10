//inject a function->return get/put
angular.module('todolist')
.factory('todoStorage', function () {
	var STORAGE_ID = 'TODO-STORAGE';

	return {
		// remove todos from localStorage, and parsed into a JSON object
		get: function () {
			return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
		},
		// todos object into a JSON string, and stored in localStorage
		put: function (todos) {
			//alert("saving:"+JSON.stringify(todos));
			localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
		}
	};
});