'use strict';

app.config(
        function ($routeProvider) {
            $routeProvider
                    .when('/items/', {
                        controller: 'itemList',
                        templateUrl: 'views/item/list.html'
                    })
                    .when('/items/create', {
                        controller: 'itemCreate',
                        templateUrl: 'views/item/create.html'
                    })
        }
);
