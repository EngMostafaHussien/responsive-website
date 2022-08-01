window.addEventListener("load", function () {
  let submitbtn = this.document.getElementById("subbtn");

  let userinput = this.document.getElementById("validationServer01");
  let emailinput = this.document.getElementById("validationServer02");

  let usernamevalue = this.document.getElementById("usernamevalue");
  let emailvalue = this.document.getElementById("emailvalue");

  submitbtn.addEventListener("click", function (e) {
    usernamevalue.innerText = `User Name : ${userinput.value}`;
    emailvalue.innerText = `Email : ${emailinput.value}`;
  });
});
