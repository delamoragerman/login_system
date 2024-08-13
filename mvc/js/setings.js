$(document).ready(function(){
    $("#form_addDeveloper").submit(function (e) {
        e.preventDefault();

        $.ajax({
            cache: false,
            type: 'POST',
            url: '/multiple/setings/addDeveloper',
            data: $(this).serialize(),
            success: function (resp) {
//                console.log(resp);
                if (resp == 1) {
                    alert("El registro fue un exito!");
                    location.reload();
                } else {
                    alert("Esta persona ya está registrada.");
                }
            }
        });
    });
})