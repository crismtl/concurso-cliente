var app = angular.module('mipanel', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
    // angular.extend(toastrConfig, {
    //     autoDismiss: false,
    //     containerId: 'toast-container',
    //     maxOpened: 0,
    //     newestOnTop: true,
    //     positionClass: 'toast-bottom-right',
    //     preventDuplicates: false,
    //     preventOpenDuplicates: false,
    //     target: 'body'
    // });
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "vistas/inicio.html",
            // data: {
            //     loginRequerido: false
            // }
        })
        // .state('acercade', {
        //     url: "/acercade",
        //     templateUrl: "rutas/acercade.html",
        //     // data: {
        //     //     loginRequerido: false
        //     // }
        // })
        .state('solicitud', {
            url: "/solicitud",
            templateUrl: "vistas/solicitud.html",
            // controller: 'RegistroController',
            // data: {
            //     loginRequerido: false
            // }
        })
        // .state('login', {
        //     url: "/login",
        //     templateUrl: "rutas/login.html",
        //     controller: 'LoginController',
        //     // data: {
        //     //     loginRequerido: false
        //     // }
        // })
        // .state('miperfil', {
        //     url: "/miperfil",
        //     templateUrl: "rutas/miperfil.html",
        //     controller: 'MiPerfilController',
        //     // data: {
        //     //     loginRequerido: true
        //     // }
        // })
        // .state('canvas', {
        //     url: "/canvas",
        //     templateUrl: "rutas/canvas.html",
        //     controller: 'CanvasController',
        //     // data: {
        //     //     loginRequerido: true
        //     // }
        // })
        // .state('chat', {
        //     url: "/chat",
        //     templateUrl: "rutas/chat.html",
        //     controller: 'ChatController',
        //     // data: {
        //     //     loginRequerido: true
        //     // }
        // });
        ;
    $urlRouterProvider.otherwise("/");
});

// app.run(function($rootScope, $cookies, $state, toastr) {
//     $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
//         var requiereLogin = toState.data.loginRequerido;
//
//         if (requiereLogin) {
//             if ($cookies.get('UsuarioId')) {
//                 toastr.success('Felicidades se encuentra logueado', 'Éxito');
//             } else {
//                 toastr.info('Necesita estar logueado para poder acceder a esta vista', 'Información');
//                 event.preventDefault();
//                 return $state.go('login')
//             }
//         }
//     });
// });
