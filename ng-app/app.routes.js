// inject ngRoute for all our routing needs
angular.module('app.routes', ['ngRoute'])
	// configure our routes
	.config(function ($routeProvider, $locationProvider) {
		$routeProvider

			.when('/', {
				templateUrl : './views/pages/home.html'
			})
			
			.when('/signin', {
				templateUrl : './views/pages/login.html',
				controller  : 'mainController',
				controllerAs: 'login'
			})
			
			.when('/feedback', {
				templateUrl : './views/pages/feedback/all.html',
				controller  : 'feedbackController',
				controllerAs: 'feedback'
			})
			
			.when('/feedback/:fb_id/edit', {
				templateUrl : './views/pages/feedback/edit.html',
				controller  : 'feedbackEditController',
				controllerAs: 'feedback'
			})
			
			// backup 403 display if the server throws the 403 status code
			.when('/forbidden', {
				templateUrl : './views/pages/403.html'
			})
			
			.when('/users', {
				templateUrl : './views/pages/users/all.html',
				controller  : 'userController',
				controllerAs: 'user'
			})

			.when('/users/create', {
				templateUrl : './views/pages/users/create.html',
				controller  : 'userCreateController',
				controllerAs: 'user'
			})

			.when('/users/:user_id', {
				templateUrl : './views/pages/users/edit.html',
				controller  : 'userEditController',
				controllerAs: 'user'
			})
			
			.when('/profile', {
				templateUrl : './views/pages/profile.html',
				controller  : 'userProfileController',
				controllerAs: 'user'
			})
			
			.when('/tickets', {
				templateUrl : './views/pages/tickets/all.html',
				controller  : 'ticketController',
				controllerAs: 'ticket'
			})
			
			.when('/tickets/all', {
				templateUrl : './views/pages/tickets/all.html',
				controller  : 'ticketAllController',
				controllerAs: 'ticket'
			})
			
			.when('/tickets/recent', {
				templateUrl : './views/pages/tickets/recent.html',
				controller  : 'ticketRecentController',
				controllerAs: 'ticket'
			})

			.when('/tickets/create', {
				templateUrl : './views/pages/tickets/create.html',
				controller  : 'ticketCreateController',
				controllerAs: 'ticket'
			})

			.when('/tickets/:ticket_id/edit', {
				templateUrl : './views/pages/tickets/edit.html',
				controller  : 'ticketEditController',
				controllerAs: 'ticket'
			})
			
			.when('/tickets/:ticket_id', {
				templateUrl : './views/pages/tickets/single.html',
				controller  : 'ticketViewController',
				controllerAs: 'ticket'
			})
			
			.when('/events/:event_id/edit', {
				templateUrl : './views/pages/events/edit.html',
				controller  : 'eventEditController',
				controllerAs: 'event'
			})
			
			.otherwise({
				redirectTo: '/'
			});
			
			// set our app up to have pretty URLS
			$locationProvider.html5Mode(true);
	});
	