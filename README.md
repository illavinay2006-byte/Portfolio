# Illa Vinay Kumar — Professional Developer Portfolio

[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Active-brightgreen?logo=github&style=flat-square)](https://illavinay2006-byte.github.io/portfolio/)
[![Status](https://img.shields.io/badge/Status-Interview--Ready-blue?style=flat-square)](#)
[![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-blueviolet?style=flat-square)](#)
[![License](https://img.shields.io/badge/License-MIT-emerald?style=flat-square)](LICENSE)

> **Live Portfolio:** [https://illavinay2006-byte.github.io/portfolio/](https://illavinay2006-byte.github.io/portfolio/)

---

## 👨‍💻 Candidate Profile

* **Name:** Illa Vinay Kumar
* **Role:** B.Tech 3rd Year CSE Student | Aspiring Full Stack Developer
* **Institution:** St. Ann's College of Engineering and Technology, Chirala (JNTUK)
* **Specialization:** Full Stack Web Development (Python, Flask, Java, Node.js, Modern JavaScript, RESTful APIs, Relational DBs)
* **Expected Graduation:** 2026
* **Email:** [illavinay2006@gmail.com](mailto:illavinay2006@gmail.com)
* **Phone / WhatsApp:** [+91 6305034309](tel:+916305034309)
* **LinkedIn:** [linkedin.com/in/vinay-kumar-4ab345424](https://www.linkedin.com/in/vinay-kumar-4ab345424/)
* **GitHub:** [github.com/illavinay2006-byte](https://github.com/illavinay2006-byte)

---

## 📁 Repository Structure (GitHub-Optimized)

The repository follows a clean, standardized static architecture that deploys smoothly across GitHub Pages, GitHub Actions, Vercel, and Netlify:

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions automated Pages deployment workflow
├── assets/
│   ├── images/
│   │   ├── vinay-profile.jpg # Centered 4:3 high-res candidate portrait
│   │   └── *.svg             # Architectural vector graphics for projects
│   ├── certificates/         # Verified certification assets
│   └── resume/
│       └── Illa_Vinay_Kumar_Resume.pdf
├── css/
│   └── style.css             # Unified light/dark theme design system
├── js/
│   ├── portfolio-data.js     # Default portfolio data & local storage engine
│   ├── script.js             # Navigation, theme toggle, lightbox, client sync
│   └── admin.js              # Developer Admin Portal interactions & exports
├── .gitignore                # Excludes OS, editor, and temporary files
├── .nojekyll                 # Bypasses Jekyll parsing on GitHub Pages
├── 404.html                  # Custom fallback & automatic clean URL router
├── index.html                # Main entry point & Executive Overview
├── about.html                # Developer background, education, and philosophies
├── skills.html               # Multi-domain technical proficiency breakdown
├── projects.html             # Engineering project showcase
├── certificates.html         # Credentials with fullscreen lightbox & LinkedIn verification
├── journey.html              # 8-stage academic and engineering timeline
├── resume.html               # Printable interactive CV with PDF download
├── contact.html              # Verified direct communication channels (Email, Phone, WhatsApp)
├── admin.html                # PIN-authenticated developer portal (PIN: vinay2026)
├── package.json              # Standard repository metadata & npm scripts
└── README.md                 # Project documentation
```

---

## 🚀 How to Deploy to GitHub Pages

This repository is pre-configured with two deployment options. Choose whichever method fits your workflow:

### Method 1: Automatic Deployment via GitHub Actions (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for professional portfolio"
   git branch -M main
   git remote add origin https://github.com/illavinay2006-byte/portfolio.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** &rarr; **Pages** (in the left sidebar).
   - Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**.
3. That's it! GitHub Actions will automatically detect `.github/workflows/deploy.yml`, build the static artifacts, and publish your portfolio at:
   `https://illavinay2006-byte.github.io/portfolio/`

---

### Method 2: Classic Branch Deployment
1. Push your code to the `main` branch.
2. In your GitHub repository:
   - Go to **Settings** &rarr; **Pages**.
   - Under **Build and deployment** &rarr; **Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and keep the folder set to `/ (root)`.
   - Click **Save**.
3. Thanks to the root `.nojekyll` file, GitHub Pages will skip Jekyll execution and serve your HTML, CSS, and JS files directly.

---

## 🔐 Developer Admin Portal (`admin.html`)

To add future projects, upload verified certificates, or update social links without modifying code:
1. Navigate to `/admin.html` on your live site or local server.
2. Enter the developer passcode: `vinay2026`.
3. Use the tabs to:
   * **Add Project:** Register project architecture, problem solved, tech stack, and links.
   * **Add Certificate:** Upload certificate photo and link to its LinkedIn post.
   * **Profile & Socials:** Update real contact links across the entire site.
   * **Export Code to File:** Copy generated JavaScript to paste permanently into `js/portfolio-data.js`.

---

## 💻 Local Development

To run and preview the website locally on your computer:

```bash
# Using Python built-in server:
python -m http.server 8000

# OR using Node.js:
npx serve .
```

Then visit [http://localhost:8000](http://localhost:8000) in any browser.

---

## 📄 License

This portfolio codebase is published under the [MIT License](LICENSE).
Feel free to star ⭐ the repository if you find it helpful!
