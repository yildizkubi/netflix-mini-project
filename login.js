function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorDiv = document.getElementById("error");
  
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");
  
    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "videos.html";
    } else {
      errorDiv.textContent = "Invalid email or password.";
    }
  }
  
  // Oturum varsa doğrudan yönlendir
  if (localStorage.getItem("isLoggedIn") === "true") {
    window.location.href = "videos.html";
  }