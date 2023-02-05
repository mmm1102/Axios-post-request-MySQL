const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const imePrezime = document.getElementById("imePrezime").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const body = {
    username: username,
    imePrezime: imePrezime,
    email: email,
    password: password,
  };
  console.log(body);
  axios.post("http://localhost:3000/register", body).then(function (res) {

  console.log(res);
}).catch(function (err) {
  console.log(err);
})
});















//   axios.post("http://localhost:3000/register", formData)
//     .then(function (res) {
//       console.log(res);
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// });
// console.log(formData);

// const username = document.getElementById("username").value;
// const imePrezime = document.getElementById("imePrezime").value;
// const password = document.getElementById("password").value;
// const email = document.getElementById("email").value;
// const regBtn = document.getElementById("reg_btn");

// axios.post("http://localhost:3000/register", {
//   username: username,
//   imePrezime: imePrezime,
//   password: password,
//   email: email

// }).then(function (response) {

//   alert(response.data.result);
// }).catch(function (err) {
//   console.log(err);
// })
