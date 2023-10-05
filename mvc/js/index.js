// Asegúrate de que el documento esté listo
$(document).ready(function () {
    $("#form_singUp").submit(function (e) {
        e.preventDefault();

        $.ajax({
            cache: false,
            type: 'POST',
            url: '/multiple/index/singUp',
            data: $(this).serialize(),
            success: function (resp) {
//                console.log(resp);
                if (resp == 1) {
                    alert("Tu registro fue un exito!");
                    location.reload();
                } else {
                    alert("El correo electrónico ya existe. Por favor, utiliza otro.");
                }
            }
        });
    });

    $("#form_login").submit(function (e) {
        e.preventDefault();

        $.ajax({
            cache: false,
            type: 'POST',
            url: '/multiple/index/sendLogin',
            data: $(this).serialize() + "&login=1",
            success: function (resp) {
                if (resp == 1) {
                    alert("Bienvenido!");
                    location.reload();
                } else {
                    alert("Tu nombre de usuario o password no coinciden");
                }
            }
        });
    });
});
