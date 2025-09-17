const signupForm = document.querySelector(".signup-form");

console.log(signupForm); // <form></form> || null

signupForm.addEventListener("submit", (e) => {
  e.preventDefault(); // stops page reload

  // get form data
  let username = document.getElementById("username");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  // create new user data
  const newData = {
    id: Date.now(),
    username: username.value,
    email:email.value,
    password:password.value
  };
  console.log(newData);

  // clearing input fields
  username.value = ""
  email.value = ""
  password.value =""
});
