<div class="container panel">
    <div class="row">
        <div class="">
            <h3 id="welcomeMessage"></h3>
        </div>
        <!-- Developers Table -->
        <div class="col-sm-12 col-lg-10" id="_developersTable">
            <div class="card-panel">
                <div class="card-body">
                    <h4><i class="fas fa-users"></i>Work team</h4>
                    <div>
                        <table id="developersTable" class="table table-hover table-dark" border="1">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Last Name</th>
                                    <th>DNI</th>
                                    <th>Description</th>
                                    <th>Rol</th>
                                    <th>Contribution</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Developer data will be inserted here -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!-- Querys Table -->
        <div class="col-sm-12 col-lg-10" id="_queryTable" style="display: none;">
            <div class="card-panel">
                <div class="card-body">
                    <h4><i class="fas fa-users"></i>Querys</h4>
                    <div>
                        <table id="messagesTable" class="table table-hover table-dark" border="1">
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>Query</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- User data will be inserted here -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!-- Users Table -->
        <div class="col-sm-12- col-lg-10" id="_userTable">
            <div class="card-panel">
                <div class="card-body">
                    <h4><i class="fas fa-search"></i>Search User</h4>
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Example@gmail.com" aria-label="Search">
                        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                        <input type="reset" class="btn btn-outline-warning my-2 my-sm-0"value="Refresh">
                    </form>
                    <div>
                        <table id="userTable" class="table table-hover table-dark" border="1">
                            <thead>
                                <tr>
                                    <th>Id_user</th>
                                    <th>Name</th>
                                    <th>Last Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>User Name</th>
                                    <th>Registration Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- User data will be inserted here -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-lg-9" id="_usersTable" style="display: none;">
            <div class="card-panel">
                <div class="card-body">
                    <h4><i class="fas fa-users"></i>Users</h4>
                    <div>
                        <table id="usersTable" class="table table-hover table-dark" border="1">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- User data will be inserted here -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
