$(document).ready(function () {
    // Load user name for welcome message
    $.ajax({
        type: 'POST',
        url: '/multiple/panel/getUser',
        success: function (response) {
            var user = JSON.parse(response);            
            $('#welcomeMessage').text('Welcome  '  + user.name);
        }
    });

    // Function to load team work data
    function loadTeamWork() {
        $.ajax({
            type: 'POST',
            url: '/multiple/panel/showTeamWork',
            success: function (response) {
                var team = JSON.parse(response);
                var developersTable = $('#developersTable tbody');
                developersTable.empty(); // Clear existing data

                team.forEach(function (user) {
                    var row = '<tr>';
                    row += '<td>' + user.name + '</td>';
                    row += '<td>' + user.lastName + '</td>';
                    row += '<td>' + user.dni + '</td>';
                    row += '<td>' + user.description + '</td>';
                    row += '<td>' + user.rol + '</td>';
                    row += '<td>' + user.contribution + '</td>';
                    row += '</tr>';
                    developersTable.append(row);
                });
            }
        });
    }

    // Function to load query data
    function showMessages() {
        $.ajax({
            type: 'POST',
            url: '/multiple/panel/showMessages',
            success: function (response) {
                var messages = JSON.parse(response);
                var messagesTable = $('#messagesTable tbody');
                messagesTable.empty(); // Clear existing data

                messages.forEach(function (message) {
                    var row = '<tr>';
                    row += '<td>' + (message.email || '') + '</td>';
                    row += '<td>' + (message.consulta || '') + '</td>';
                    row += '<td>' + (message.fecha || '') + '</td>';
                    row += '</tr>';
                    messagesTable.append(row);
                });
            }
        });
    }

    // Function to load a specific user data
    function loadUser() {
        $.ajax({
            type: 'POST',
            url: '/multiple/panel/showUser',
            success: function (response) {
                var users = JSON.parse(response);
                var usersTable = $('#userTable tbody');
                usersTable.empty(); // Clear existing data

                users.forEach(function (user) {
                    var row = '<tr>';
                    row += '<td>' + user.id_us + '</td>';
                    row += '<td>' + user.name + '</td>';
                    row += '<td>' + user.lastName + '</td>';
                    row += '<td>' + user.phone + '</td>';
                    row += '<td>' + user.email + '</td>';
                    row += '<td>' + user.userName + '</td>';
                    row += '<td>' + user.date + '</td>';
                    row += '</tr>';
                    usersTable.append(row);
                });
            }
        });
    }

    // Function to load all users data
    function loadUsers() {
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
    }

    // Function to search user by email
    function searchUserByEmail(email) {
        $.ajax({
            type: 'POST',
            url: '/multiple/panel/searchUserByEmail',
            data: { email: email },
            success: function (response) {
                var result = JSON.parse(response);
                var userTable = $('#userTable tbody');
                userTable.empty(); // Clear existing data

                if (result.estado) {
                    var user = result.data;
                    var row = '<tr>';
                    row += '<td>' + user.id_us + '</td>';
                    row += '<td>' + user.name + '</td>';
                    row += '<td>' + user.lastName + '</td>';
                    row += '<td>' + user.phone + '</td>';
                    row += '<td>' + user.email + '</td>';
                    row += '<td>' + user.userName + '</td>';
                    row += '<td>' + user.date + '</td>';
                    row += '</tr>';
                    userTable.append(row);
                } else {
                    alert(result.description);
                }
            }
        });
    }

    // Bind the search form
    $('form').submit(function (e) {
        e.preventDefault();
        var email = $(this).find('input[type="search"]').val();
        searchUserByEmail(email);
    });

    // Load team work data when the page loads
    loadTeamWork();
    $('#_developersTable').show();
    $('#_userTable').hide();
    $('#_usersTable').hide();
    $('#_queryTable').hide();

    // Sidebar navigation
    $('.sidebar-menu li a').click(function (e) {
        e.preventDefault();
        var selectedOption = $(this).text().trim();

        if (selectedOption === "Main-panel") {
            loadTeamWork();
            $('#_developersTable').show();
            $('#_userTable').hide();
            $('#_usersTable').hide();
            $('#_queryTable').hide();
        } else if (selectedOption === "Services") {
            showMessages();
            $('#_queryTable').show();
            $('#_developersTable').hide();
            $('#_userTable').hide();
            $('#_usersTable').hide();
        } else if (selectedOption === "Users") {
            loadUsers();
            $('#_userTable').show();
            $('#_usersTable').show();
            $('#_developersTable').hide();
            $('#_queryTable').hide();
        }
    });
});