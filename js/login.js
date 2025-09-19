const loginForm = document.getElementById("login-form");

console.log(loginForm);

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  let loginData = {
    email: email.value,
    password: password.value,
  };
  console.log(loginData);

  //! get all signup users from local storage
  let signupUsers = JSON.parse(localStorage.getItem("users"));

  //! check user signed up or not
  let authUser = signupUsers.find((ele) => {
    return ele.email === loginData.email && ele.password === loginData.password;
  });

  if (authUser) {
    alert("login success 🚀");
    window.location.href = "Home.html";
    localStorage.setItem("authuser" , JSON.stringify(authUser))
  } else {
    alert("login failed ❌");
  }
});
