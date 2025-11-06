function fn_ValForm() {
  var sMsg = "";
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name == "") {
    sMsg += "\n* Anda belum mengisikan nama";
  }
  if (email == "") {
    sMsg += "\n* Anda belum mengisikan email";
  }
  if (message == "") {
    sMsg += "\n* Anda belum mengisikan pesan";
  }

  var emailPattern = /^[a-z0-9][a-z0-9_.-]*[a-z0-9]@[a-z0-9][a-z0-9_.-]*[a-z0-9]\.[a-z0-9]{2,4}$/i;
  if (email !== "" && !emailPattern.test(email)) {
    sMsg += "\n* Format email tidak valid";
  }

  if (sMsg != "") {
    alert("Peringatan:\n" + sMsg);
    return false;
  } else {
    return true;
  }
}
