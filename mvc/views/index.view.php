<div class="container">
    <div class="row">
        <div class="container-login">
            <div class="title-login">
                <h4>Login</h4>
                <div class="sub-title"></div>
            </div>
            <form id="login" method="POST">
                <div class="input-container">
                    <i class="fas fa-user"></i>
                    <input type="text" name="userName" placeholder="User Name" required>
                </div>
                <div class="input-container">
                    <i class="fas fa-lock"></i>
                    <input type="password" name="password" placeholder="Password" required>
                </div>
                <input type="reset" value="Reset" class="btn btn-clear">
                <input type="submit" value="Login" class="btn btn-primary">
                <button type="button" class="btn btn-lg" data-toggle="modal" data-target="#modal_singUp">
                    SingUp
                </button>
            </form>
        </div>
    </div>
</div>
<br>
<br>
<div class="modal fade" id="modal_singUp" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Back Office</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container-login">
                    <div class="title-login">
                        <h4>SingUp</h4>
                        <div class="sub-title"></div>
                    </div>
                    <form id="form_singUp" method="POST">
                        <div class="input-container">
                            <i class="fas fa-user"></i>
                            <input type="text" name="name" placeholder="Name" required>
                        </div>
                        <div class="input-container">
                            <i class="fa fa-users"></i>
                            <input type="text" name="lastName" placeholder="Last name" required>
                        </div>
                        <div class="input-container">
                            <i class="fas fa-phone"></i>
                            <input type="text" name="phone" placeholder="Phone" required>
                        </div>
                        <div class="input-container">
                            <i class="fa fa-at"></i>
                            <input type="text" name="email" placeholder="Email" required>
                        </div>
                        <div class="input-container">
                            <i class="fas fa-user"></i>
                            <input type="text" name="userName" placeholder="User Name" required>
                        </div>
                        <div class="input-container">
                            <i class="fas fa-lock"></i>
                            <input type="password" name="password" id="password" placeholder="Password" required>
                        </div>
                        <input type="reset" value="Reset" class="btn btn-clear">
                        <input type="submit" value="SingUp" class="btn btn-primary">
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>