function setUpForSendEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  sendEmail(name, email, message);
}

function sendEmail(name, email, message) {
  var emailContent =
    "Đây là nội dung đánh giá của bạn" +
    " " +
    name +
    "," +
    "với email là" +
    " " +
    email +
    " " +
    "như sau :" +
    message;

  Email.send({
    Host: "smtp.gmail.com",
    Username: "testtest344466445554446644@gmail.com", //email để gửi đi testtest344466445554446644
    Password: "Linhlinh125151", //mật khẩu để gửi đi Linhlinh125151
    To: "dinhlinh1701@gmail.com", //email nhận
    From: "testtest344466445554446644@gmail.com", //email gửi
    Subject: "ĐÁNH GIÁ CHO NHÓM BẠN", //subject mail
    Body: emailContent, //body mail
  }).then((message) => checkSuccess(message));
}

function checkSuccess(message) {
  if (message == "OK") {
    Swal.fire("Thành công!", "Bạn đã gửi đánh giá thành công!", "success");
  } else {
    Swal.fire("Oops!", "Có lỗi rồi, vui lòng thử lại nhé.", "error");
  }
}
