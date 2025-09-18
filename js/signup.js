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
    email: email.value,
    password: password.value,
  };
  console.log(newData); // {id :1 , u}

  //! check weather data exists or not
  let existingData = localStorage.getItem("users");

  //! if users exist parse it and store , else store empty array
  existingData = existingData ? JSON.parse(existingData) : [];

  //! check user already exists or not
  let existingUser = existingData.find((ele) => ele.email === newData.email);

  if (existingUser) {
    alert("User already exists");
  } else {
    //! add new data
    existingData.push(newData);

    //! store data in localStorage
    localStorage.setItem("users", JSON.stringify(existingData));

    //! redirect to login.html
    window.location.href = "Login.html";
  }

  //! clearing input fields
  username.value = "";
  email.value = "";
  password.value = "";
});
