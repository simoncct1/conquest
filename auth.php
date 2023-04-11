<?php      
    include('db.php');  
    $username = $_POST['user'];  
    $password = $_POST['pass'];  
      
        //to prevent from mysqli injection  
        $username = stripcslashes($username);  
        $password = stripcslashes($password);  
        $username = mysqli_real_escape_string($dbh1, $username);  
        $password = mysqli_real_escape_string($dbh1, $password);  
      
        $sql = "select *from userinfo where username = '$username' and password = '$password'";  
        $result = mysqli_query($dbh1, $sql);  
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
        $count = mysqli_num_rows($result);  
          
        if($count == 1){  
            header("Location: http://localhost/conquest/index.php"); 
        }  
        else{  
            echo "<h1> Login failed. Invalid username or password.</h1>";  
        }     
?>  