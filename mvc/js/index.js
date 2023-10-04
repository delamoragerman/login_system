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
});
