<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
    <title>JSP - Hello World</title>
</head>
<body>
<div id="container3">
    <div id="section2">
        <div class="sign_in">
            <h3 class="sign">Sign In</h3>
            <div class="txt">
                <form action="login" method="post">
                    <input type="email" id="email" name="email" placeholder="   username or email">
                    <input type="password" id="password" name="password" placeholder="   password">
                    <button class="sign_btn" type="submit">SIGN IN</button>

                </form>
                <p class="or_logn">Or login with</p>
                <div class="im">
                    <img class="img1" src="images/face.png" alt="">
                    <img class="img2" src="images/gg.jpg" alt="">
                </div>
                <p class="last">Sign Up</p>

            </div>

        </div>
    </div>
</div>
</body>
</html>