package com.example.lab5_bai4;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/login")
public class HelloServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        response.setContentType("text/html; charset = UTF-8");
        String names = request.getParameter("name");
        String emails = request.getParameter("email");
        String numbers = request.getParameter("number");
        String cho = request.getParameter("chooses");
        String mes = request.getParameter("mess");


        if (names.isEmpty() || emails.isEmpty() || numbers.isEmpty()
                || cho.isEmpty() || mes.isEmpty()) {
            response.getWriter().append("Không được để một ô nào trống!");

        }
        else {
            try {
                int n = Integer.parseInt(numbers);
                if (n > 10 && !numbers.startsWith("03") || !numbers.startsWith("09") || !numbers.startsWith("07")) {
                        response.getWriter().append("Số điện thoại không hợp lệ");
                }
            } finally {

            }

        }
        if(!names.equals("admin")){
            response.getWriter().append("UserNmae không hợp lệ" + "t/");

        }

        if(names.equals("admin") && emails.equals("Duyendethx2k3@gmail.com") && numbers.equals("0348429274")){
            response.getWriter().append("Bạn đã dăng nhập thành công");
        }




    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
            doGet(request, response);
    }

    }