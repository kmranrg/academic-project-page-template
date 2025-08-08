# Academic Project Page Template

This repository contains a clean, responsive template for academic project pages, ideal for sharing research papers, posters, and team details. It is lightweight, customizable, and mobile-friendly.

## 🌟 Features

- ✅ **Responsive Navbar** — Collapsible burger menu for mobile devices.
- 🎯 **Hero Section** — Title, authors, and quick-access buttons to paper/code/arXiv.
- 📄 **Abstract Section** — Clean area for your project summary.
- 📊 **Results Carousel** — Built using [Bulma Carousel](https://github.com/Wikiki/bulma-carousel), lets you showcase experiment figures.
- 🎥 **Video Section** — Embed a YouTube or local demo video.
- 🧾 **Poster Section** — Displays a full-width embedded PDF using `<iframe>`, responsive and optimized for all screens.
- 👥 **Team Section** — Displays collaborators using consistent cards with photos and text.
- 📚 **Citation Box** — Includes a BibTeX citation with a **copy-to-clipboard** button in the top-right.
- ⚙️ **Fully Customizable** — Easily modify colors, spacing, and layout in `css/style.css`.

---

## 🚀 Getting Started

Follow these steps to create your academic project page:

### 1. **Edit Content in `index.html`**
- Replace the placeholder content (title, abstract, authors, citation, etc.) with your own.
- Update links to paper, code repo, arXiv, and video.

### 2. **Replace Images**
- Located in the `images/` folder:
  - `result1.png`, `result2.png`, `result3.png`: carousel figures.
  - `team1.png`, `team2.png`, `team3.png`: team member photos.
  - `logo.png`: optional logo (e.g., university or lab).

### 3. **Add Your Poster PDF**
- Place your poster in the `pdfs/` folder (e.g., `Sample.pdf`).
- Edit the `<iframe>` `src` in the Poster section to match your file.

### 4. **Customize Style**
- Modify `css/style.css` to change font, colors, margins, or layout.
- Bulma utility classes help you build consistent layouts quickly.

### 5. **Add Team Members**
- Duplicate a team card in the `Team` section and edit the image and text.
- Use square photos for best visual consistency.

---

## 🧪 Advanced Options

- The Results and Poster sections are responsive across screen sizes.
- The Citation section includes a copy button (`<i class="fa fa-copy">`) using `navigator.clipboard.writeText()`.
- You may add animations, transitions, or dark mode based on your branding needs.

## 🛠 Built With

- [Bulma CSS](https://bulma.io)
- [Font Awesome Icons](https://fontawesome.com/)

---

## 📬 Feedback or Contributions

If you find this template useful or want to improve it, feel free to fork or submit a pull request. Academic collaboration FTW! 🤝