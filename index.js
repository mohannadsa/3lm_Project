function sendEmail() {
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var body = "Sender Name : " + name + ".%0AMessage : " + message;

  if (name === "" || subject === "" || message === "") {
    alert("Please Fill in all the fields");
  } else {
    window.open('mailto:marwan.alghamdi@yahoo.com?subject=' + subject + '&body=' + body);
  }
}
