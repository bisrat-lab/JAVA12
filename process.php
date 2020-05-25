<?php
    
require_once('connect.php');

    if(isset($_POST['btnSubmit'])){
        //echo 'working';
        //mysqli_real_escape_string scape spical caracters
        $username = mysqli_real_escape_string($con, $_POST['username']);
        $email = mysqli_real_escape_string($con, $_POST['email']);
        $password = mysqli_real_escape_string($con, $_POST['password']);
        $password2 = mysqli_real_escape_string($con, $_POST['password2']);
        
        //echo $username,$email,$password,$password2;
        if(empty($username) || empty($email) || empty($password)|| empty($password2))
            {
            echo 'All filds are Required';
            }
            if($password!=$password2)
            {
                echo 'Password Not Mached';
            }
            else {
                $pass = md5($password);
                $sql = "insert into registration (userName,email,password)
                    values ('$username','$email','$pass')";
                $result = mysqli_query($con,$sql);

                if($result)
                {
                    echo 'your record has been in the Database';
                }
                else
                {
                    echo 'Please Check your Query';
                }

            }
                

    }
    ?>