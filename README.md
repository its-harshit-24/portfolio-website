# Developer Portfolio Website

A single-page personal portfolio built with plain HTML, CSS, and JavaScript — styled like a code editor / terminal to reflect a developer's workflow. No frameworks or build tools required.

**[Live Demo](#)** ← add your GitHub Pages link here after deploying

## Features
- Terminal-style hero section with a typing animation
- Editor-tab navigation that highlights the active section on scroll
- Sections for About, Skills, Projects, and Contact
- Fully responsive, works down to mobile
- Zero dependencies — just open `index.html`

## Tech Stack
HTML5 · CSS3 (custom properties, Grid/Flexbox) · Vanilla JavaScript

## Before you push this
Name is already set to **Harshit Raghuwanshi**. Just double-check / update:
1. Open `index.html` and replace:
   - Email, GitHub, LinkedIn links (currently placeholders — set to your real ones)
   - The `role.txt` line with your own role/title
   - The `aboutMe` object in the About section
   - Skills lists with your own tech stack
   - Project cards with your real projects, links, and stack tags
   - Email/GitHub/LinkedIn links in the Contact section
2. Optional: swap fonts/colors in the `:root` block at the top of `style.css`.

## Run locally
Just open `index.html` in your browser — no server needed.

Or use a local server (recommended for smoother development):
```bash
npx serve .
```

## Deploy for free (GitHub Pages)
1. Push this project to a new GitHub repository (see steps below).
2. Go to your repo → **Settings** → **Pages**.
3. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/root`.
4. Save — your site will be live at `https://yourusername.github.io/repo-name/` in a minute or two.

## Push to GitHub
```bash
cd portfolio-website
git init
git add .
git commit -m "Initial commit: developer portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio-website.git
git push -u origin main
```

## License
Free to use and modify for your own portfolio.
