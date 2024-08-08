$(document).ready(function () {
    // Load user name for welcome message
    $.ajax({
        type: 'POST',
        url: '/multiple/panel/getUser',
        success: function (response) {
            var user = JSON.parse(response);            
            $('#welcomeMessage').text('Bienvenido/a  '  + user.name);
        }
    });
    // Load user data
    $.ajax({
        type: 'POST',
        url: '/multiple/panel/showUsers',
        success: function (response) {
            var users = JSON.parse(response);
            var usersTable = $('#usersTable tbody');
            usersTable.empty(); // Clear existing data

            users.forEach(function (user) {
                var row = '<tr>';
                row += '<td>' + user.name + '</td>';
                row += '<td>' + user.lastName + '</td>';
                row += '<td>' + user.email + '</td>';
                row += '<td>' + user.phone + '</td>';
                row += '</tr>';
                usersTable.append(row);
            });
        }
    });

    // Load consultas data
    $.ajax({
        type: 'POST',
        url: '/multiple/panel/showMessages',
        success: function (response) {
            var consultas = JSON.parse(response);
            var consultasTable = $('#consultasTable tbody');
            consultasTable.empty(); // Clear existing data

            consultas.forEach(function (consulta) {
                var row = '<tr>';
                row += '<td>' + consulta.email + '</td>';
                row += '<td>' + consulta.consulta + '</td>';
                row += '<td>' + consulta.fecha + '</td>';
                row += '</tr>';
                consultasTable.append(row);
            });
        }
    });
});
