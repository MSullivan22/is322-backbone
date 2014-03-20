/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			completed: false,
			date: new Date().toDateString(),
			day: '',
			month: '',
			year: ''
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		},
		
		saveDate: function (date) {
			this.save({ year: date.substr(0, 4) });
			this.save({ month: date.substr(5, 2) });
			this.save({ day: date.substr(8, 2) });
			this.save({ date: this.get('month')+'/'+this.get('day')+'/'+this.get('year') });
		},
	});
})();
