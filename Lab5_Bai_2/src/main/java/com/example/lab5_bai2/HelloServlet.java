package com.example.lab5_bai2;

import javax.servlet.RequestDispatcher;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URL;
import javax.servlet.ServletException;

@WebServlet("/g")
public class HelloServlet extends HttpServlet {
    String url = "/WellCome.jsp";
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Thực hiện chuyển hướng đến trang WellCome.jsp
        RequestDispatcher S = getServletContext().getRequestDispatcher(url);
        S.forward(request, response);
    }




    public void destroy() {
    }
}
