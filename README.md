# PhantomLogin

**PhantomLogin** is an ethical phishing simulation designed for cybersecurity learning, visual training, and user awareness.

This version is a **100% static HTML/CSS/JS page**, deployable via GitHub Pages. It simulates a login experience with a custom Red Team style, but **does not capture or transmit any data**.

---

## 🚀 Project Purpose

- Learn how phishing interfaces can look and behave
- Build credible-looking simulations for awareness training
- Test frontend and psychological design tactics safely
- Show the effect of phishing without any backend or real data capture

---

## 🔐 Ethical Disclaimer

> **This project is 100% ethical and educational.**

- ❌ No credentials are captured, logged, or transmitted
- ✅ All behavior is simulated in the browser only
- ❌ This is **not** a clone of real services like Gmail, Discord, etc.
- ✅ The design is intentional and custom-made to avoid any misuse

**Red Team insight** is preserved, but no risk or ambiguity exists.

---

## 🛠️ How It Works

1. The user fills in a fake login form
2. On submit, the form disappears
3. A fullscreen Red Team message appears (terminal-style)
4. After a few seconds, the user is redirected to [HaveIBeenPwned.com](https://haveibeenpwned.com)

This gives a brief moment of awareness and immersion.

---

## 📁 Project Files

```
phishing-demo/
├── index.html           # The simulated login page
├── style.css            # Dark Red Team design
├── script.js            # Simulated logic + message + redirection
├── assets/              # (Optional) Icons or logos
├── .nojekyll            # Needed for GitHub Pages
└── README.md            # You're reading it
```

---

## 🌐 Deploy via GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings > Pages**
3. Choose source: `main` branch, root folder (`/`)
4. ✅ Your site is live at: [https://hyugared.github.io/phishing-demo/](https://hyugared.github.io/phishing-demo/)

---

## 💡 Full Potential

PhantomLogin is designed to be simple but powerful:

- Can be used in **Red Team playbooks** as a non-malicious demo
- Fits in awareness campaigns, trainings, and workshops
- Serves as a base for building more advanced phishing simulators
- Works in browser-only mode, so it's easy to host and share
- Can be coupled with a backend (optional) to explore deeper scenarios

With great responsibility, it becomes a potent awareness weapon.

---

## 🚀 Optional Enhancements

- Add fake loader before showing the message
- Customize the message appearance and timing
- Change redirection target to internal awareness pages

---

## 🎓 License

MIT License — Use it, remix it, share it with proper attribution. 
Keep it ethical. Never misuse.

---

## 💜 Creator

Built by **Hyuga** — Red Team operator in training, cyber tactician, and builder of immersive tools for ethical awareness.

> "We don't fake to steal. We simulate to teach."

