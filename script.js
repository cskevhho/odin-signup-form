document.addEventListener("DOMContentLoaded", function () {
  let password = document.querySelector("#password");
  let confirmPassword = document.querySelector("#confirmPassword");
  let matchError = document.querySelector("#error");

  function validatePassword() {
    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity("Passwords do not match");
      matchError.style.display = "block";
    } else {
      confirmPassword.setCustomValidity("");
      matchError.style.display = "none";
    }
  }

  password.addEventListener("input", validatePassword);
  confirmPassword.addEventListener("input", validatePassword);

  let form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    let passwordValue = password.value;
    let confirmPasswordValue = confirmPassword.value;

    let error = document.querySelector("#error");

    if (passwordValue === "" || confirmPasswordValue === "") {
      error.innerHTML = "*passwords do not match";
      event.preventDefault(); // Prevent form submission
    } else {
      error.innerHTML = "";
    }
  });
});
