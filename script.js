// script.js - Fake login handler with message overlay + timed redirection

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorMsg");
    const passwordInput = document.querySelector('input[type="password"]');
    const toggle = document.getElementById("showPassword");
  
    // Show/hide password logic
    if (toggle && passwordInput) {
      toggle.addEventListener("change", () => {
        passwordInput.type = toggle.checked ? "text" : "password";
      });
    }
  
    // Fake form submission + redirection
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
  
    // Hide login container
        document.querySelector(".login-container").style.display = "none";
  
    // Create overlay
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = "100vw";
        overlay.style.height = "100vh";
        overlay.style.backgroundColor = "#000";
        overlay.style.color = "#00ff99";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.fontFamily = "monospace";
        overlay.style.fontSize = "1.2rem";
        overlay.style.padding = "20px";
        overlay.style.zIndex = 9999;
        overlay.style.textAlign = "center";
  
        const message = "This was a simulated phishing login.\nNo data was captured.\n\nRed Team says: Stay sharp.";
        const messageEl = document.createElement("p");
        overlay.appendChild(messageEl);
        document.body.appendChild(overlay);
  
    // Typing effect
        let i = 0;
        const type = () => {
          if (i < message.length) {
            messageEl.textContent += message[i] === "\n" ? "\n" : message[i];
            i++;
            setTimeout(type, 30);
          } else {
            setTimeout(() => {
              window.location.href = "https://haveibeenpwned.com/";
            }, 1000); // delay after full message
          }
        };
        type();
      });
    }
  });
  