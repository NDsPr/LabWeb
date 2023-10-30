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
<div id="container2">
    <div id="section">
        <div class="dr_section">
            <div class="top">
                <h2 class="contact_us">
                    Contact Us
                </h2>
            </div>
            <form action="login" method="post">
                <div class="center">
                    <div class="full_name">
                        <p class="p1">FULL NAME*</p>
                        <input class="p2" name="name" placeholder="Enter Your Name">
                    </div>
                    <div class="email">
                        <p class="p1">EMAIL*</p>
                        <input type="email" class="p2"  name="email" placeholder="Enter Your Email">
                    </div>
                    <div class="phone">
                        <p class="p1">PHONE*</p>
                        <input class="p2" name="number" placeholder="Enter Your Phone">
                    </div>
                    <div class="needed_services">
                        <p class="p1">NEEDED SERVICES*</p>
                        <input class="p2" name="chooses" placeholder="Please chooses">
                        <i class="fa-solid fa-caret-up"></i>
                    </div>
                </div>
                <div class="bootom">
                    <div class="message">
                        <p class="p1">MESSAGE</p>
                        <input class="p2" name="mess" placeholder="Your message here...">
                        <i class="fa-brands fa-stack-overflow"></i>
                    </div>
                    <button class="btn" type="submit">Sumbit -></button>

                </div>
            </form>
        </div>
    </div>
</div>
</body>
</html>