$("#exit").click(function () {

    $.ajax({
        cache: false,
        type: 'POST',
        url: '/multiple/session/destroy',
        success: function (resp) {
            location.reload();
        }
    });
});