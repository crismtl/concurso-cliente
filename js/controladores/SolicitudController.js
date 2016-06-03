app.controller('SolicitudCtrl', ['$scope', '$state', function ($scope, $state) {

    $scope.nuevaSolicitud = {
      sol_ci: '',
      sol_apellidos: '',
      sol_nombres: '',
      sol_codprov: '',
      sol_codciu: '',
      sol_sexo: '',
      sol_fechanac: '',
      sol_nummiem: '',
      sol_disc: '',
      sol_telefono: '',
      sol_fecha: '',
      sol_estado: '',
      sol_fecha: '',
      sol_estado: ''
    };

    $scope.agregar = function() {
      $scope.nuevaSolicitud.sol_fecha = new Date();
      $scope.nuevaSolicitud.sol_estado = 'S';
      console.log('nuevaSolicitud', $scope.nuevaSolicitud);
    }
    // $scope.agregarNuevoUsuario = function () {
    //     UsuarioFactory.save({
    //         nombre: $scope.nuevoUsuario.nombre,
    //         apellido: $scope.nuevoUsuario.apellido,
    //         fechaDeNacimiento: $scope.nuevoUsuario.fechaDeNacimiento,
    //         email: $scope.nuevoUsuario.email,
    //         password: $scope.nuevoUsuario.password
    //     }).$promise.then(
    //         function success(respuesta) {
    //             toastr.success('Éxito!', 'Se ingresó el Nuevo Usuario');
    //             $cookies.put('UsuarioId', respuesta.id);
    //             $state.go('miperfil');
    //         },
    //         function error(error) {
    //             toastr.error('Error!', 'No se ingresó el Nuevo Usuario');
    //             console.log(error);
    //         });
    // }


}]);
