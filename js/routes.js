const Routes = ($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise("/");

    $stateProvider

        .state("login", {
            url: "/",
            templateUrl: "templates/login.html",
            controller: "LoginController as ctrLogin"
        });
}        