$(document).ready(function() {
    // Góc xoay ban đầu
    var rotationDegree = 0;

    // Hàm để xoay hình ảnh
    function rotateImage() {
        rotationDegree += 15;
        $("#rotateImage").css("transform", "rotate(" + rotationDegree + "deg)");
    }

    // Gọi hàm xoay hình ảnh sau mỗi 2 giây
    setInterval(rotateImage, 2000);
});
