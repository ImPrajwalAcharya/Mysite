
const form = document.getElementById("contact-form");

const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();
  let mail = new FormData(form);
  sendMail(mail);
  //using beautiful alert msg sweetalert
  swal({
    title: "Thank You!",
    text: "Your message has been sent.",
    icon: "success",
    button: "Ok 😊",
  });
});


const sendMail = (mail) => {
  fetch("https://nodeprajwal.herokuapp.com/send", {
    method: "post",
    body: mail,
  }).then((response) => {
    return response.json();
  });
};