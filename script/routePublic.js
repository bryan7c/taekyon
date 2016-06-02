app.config(function($routeProvider, $locationProvider) {
    // remove o # da url
    $locationProvider.html5Mode(true);

    $routeProvider

    // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
        .when('/certificado-hapkido', {
            templateUrl: 'views/home.html',
            controller: 'homeCtrl',
        })
        .when('/', {
            templateUrl: 'views/certificado.html',
            controller: 'certificadoHapkidoCtrl',
        })

    // caso não seja nenhum desses, redirecione para a rota '/'
    .otherwise({ redirectTo: '/' });
});
