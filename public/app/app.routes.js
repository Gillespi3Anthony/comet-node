// inject ngRoute for all our routing needs
angular.module('app.routes', ['ngRoute'])
	// configure our routes
	.config(function ($routeProvider, $locationProvider) {
		$routeProvider
			// route for the home page
			.when('/', {
				templateUrl: 'app/views/pages/home.html'
			})
			
			// route for the about page
			.when('/signin', {
				templateUrl : 'app/views/pages/login.html',
				controller  : 'mainController',
				controllerAs: 'login'
			})
			
			.when('/feedback', {
				templateUrl : 'app/views/pages/feedback.html'
			})
			
			.when('/forbidden', {
				templateUrl : 'app/views/pages/403.html'
			})
			
			// show all users
			.when('/users', {
				templateUrl : 'app/views/pages/users/all.html',
				controller  : 'userController',
				controllerAs: 'user'
			})

			// form to create a new user
			// same view as edit page
			.when('/users/create', {
				templateUrl : 'app/views/pages/users/create.html',
				controller  : 'userCreateController',
				controllerAs: 'user'
			})

			// page to edit a ticket
			.when('/users/:user_id', {
				templateUrl : 'app/views/pages/users/edit.html',
				controller  : 'userEditController',
				controllerAs: 'user'
			})
			
			.when('/profile', {
				templateUrl : 'app/views/pages/profile.html',
				controller  : 'userProfileController',
				controllerAs: 'user'
			})
			
			// show all tickets
			.when('/tickets', {
				templateUrl : 'app/views/pages/tickets/all.html',
				controller  : 'ticketController',
				controllerAs: 'ticket'
			})
			
			.when('/tickets/all', {
				templateUrl : 'app/views/pages/tickets/all.html',
				controller  : 'ticketAllController',
				controllerAs: 'ticket'
			})

			// form to create a new ticket
			// same view as edit page
			.when('/tickets/create', {
				templateUrl : 'app/views/pages/tickets/create.html',
				controller  : 'ticketCreateController',
				controllerAs: 'ticket'
			})

			// page to edit a ticket
			.when('/tickets/:ticket_id/edit', {
				templateUrl : 'app/views/pages/tickets/edit.html',
				controller  : 'ticketEditController',
				controllerAs: 'ticket'
			})
			
			.when('/tickets/:ticket_id', {
				templateUrl : 'app/views/pages/tickets/single.html',
				controller  : 'ticketViewController',
				controllerAs: 'ticket'
			})
			
			.otherwise({
				redirectTo: '/'
			});
			
			// set our app up to have pretty URLS
			$locationProvider.html5Mode(true);
	});
	