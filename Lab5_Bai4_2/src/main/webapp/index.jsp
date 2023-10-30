<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <title>JSP - Hello World</title>
</head>
<body>
<div id="container4">
    <div id="section3">
        <div class="Account">
            <div class="count1">
                <h4 class="account">Account</h4>
                <div class="item">
                    <i class="fa-solid fa-user"></i>
                    <input class="p" placeholder="Full name">

                </div>
                <div class="item">
                    <i class="fa-solid fa-envelope"></i>
                    <input type="email" class="p" placeholder="Email Adress">
                </div>
                <div class="item">
                    <i class="fa-solid fa-key"></i>
                    <input type="password" class="p"  placeholder="Password">
                </div>
            </div>
            <div class="count2">
                <div class="date">
                    <h4 class="date_of_birth">Date of Birth</h4>
                    <input class="itemd" placeholder="DD">
                    <input class="itemd" placeholder="MM">
                    <input class="itemd" placeholder="YYYY">

                </div>
                <div class="gender">
                    <h4 class="genders">Gender</h4>
                    <div class="gender_item">
                        <input class="itemss" placeholder="Male">
                        <input class="items" placeholder="Female">
                    </div>
                </div>
            </div>
            <div class="count3s">
                <h4 class="pay">Payment Detalls</h4>
                <div class="cards">
                    <div class="credit">
                        <i class="fa-brands fa-cc-visa"></i>
                        <p class="cr">Credit Card</p>
                    </div>
                    <div class="paypal">
                        <i class="fa-brands fa-cc-paypal"></i>
                        <p class="cr">Paypal</p>
                    </div>
                </div>

                <div class="item">
                    <i class="fa-regular fa-credit-card"></i>
                    <input class="p" placeholder="Card Number">
                </div>
                <div class="last_card">
                    <div class="cvc">
                        <i class="fa-solid fa-user"></i>
                        <input  class="p"  placeholder="Card CVC">
                    </div>
                    <div class="dmy">
                        <div class="dm">
                            <p>01 Jan</p>
                            <i class="fa-solid fa-caret-down"></i>
                        </div>
                        <div class="y">
                            <p>2015</p>
                            <i class="fa-solid fa-caret-down"></i>
                        </div>
                    </div>
                </div>

            </div>
            <div class="count4">
                <h4 class="term">
                    Terms and Conditions
                </h4>
                <input type="checkbox" id="tickBox">
                <label for="tickBox">I accept tems and conditions for signing up to thí service, and hereby confirm i have read privacy policy</label>
            </div>

        </div>
    </div>
</div>

</html>