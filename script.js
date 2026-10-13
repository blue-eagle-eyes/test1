document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");
  const formMessage = document.getElementById("formMessage");
  const toggleBtn = document.getElementById("togglePassword");

  toggleBtn.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    toggleBtn.textContent = isPassword ? "🙈" : "👁";
    toggleBtn.setAttribute("aria-label", isPassword ? "Hide password" : "Show password");
  });

  function clearErrors() {
    usernameInput.classList.remove("invalid");
    passwordInput.classList.remove("invalid");
    usernameError.textContent = "";
    passwordError.textContent = "";
    formMessage.textContent = "";
    formMessage.className = "form-message";
  }

  function validate() {
    let valid = true;

    if (!usernameInput.value.trim()) {
      usernameInput.classList.add("invalid");
      usernameError.textContent = "Username is required.";
      valid = false;
    }

    if (!passwordInput.value) {
      passwordInput.classList.add("invalid");
      passwordError.textContent = "Password is required.";
      valid = false;
    } else if (passwordInput.value.length < 8) {
      passwordInput.classList.add("invalid");
      passwordError.textContent = "Password must be at least 8 characters.";
      valid = false;
    }

    return valid;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();

    if (!validate()) {
      formMessage.textContent = "Please fix the errors above.";
      formMessage.classList.add("error");
      return;
    }

    // Placeholder for real authentication: replace with an API call
    // to your backend, e.g. fetch("/api/login", { method: "POST", ... }).
    formMessage.textContent = "Login successful!";
    formMessage.classList.add("success");
    form.reset();
  });
});
