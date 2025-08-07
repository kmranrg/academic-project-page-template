# Academic Project Page Template

This repository contains an improved template for academic project webpages. It is designed to be clear, modern and easy to customise. The layout draws inspiration from established research website guidelines that emphasize concise text, logical navigation, and high-quality visuals.

## Features

- **Responsive navigation bar** with links to each section. The burger icon collapses the menu on small screens for better usability.
- **Hero/overview section** for the project title, tagline, author list, and quick links to the paper, code repository, and arXiv abstract.
- **Abstract section** encouraging succinct, jargon-free summaries.
- **Results carousel** built with [Bulma Carousel](https://github.com/Wikiki/bulma-carousel). Use it to showcase figures, diagrams, or examples from your paper.
- **Video section** that can embed a YouTube or locally hosted video demonstrating your method.
- **Poster section** containing an embedded PDF. Replace `pdfs/sample.pdf` with your own poster or supplementary material.
- **Team section** for highlighting collaborators. Add additional cards as needed and include consistent photos and biographies.
- **Citation section** where you can insert your BibTeX entry.
- **Footer** with a simple copyright line. You are free to customise or remove this.

## Getting started

1. **Edit `index.html`:** Replace the placeholder text with your project’s title, authors, and content. Update the links for the paper, code, and arXiv. Add or remove sections as needed.  
2. **Replace images:** The `images/` directory contains placeholder files for carousel slides (`carousel1.jpg`, `carousel2.jpg`, `carousel3.jpg`) and team photos (`team1.jpg`, `team2.jpg`, `team3.jpg`). Swap these with your own images, keeping the same filenames or adjusting the references in the HTML.  
3. **Update the poster:** Put your PDF poster or supplementary material in `pdfs/` and change the `src` attribute of the `<iframe>` in the Poster section.  
4. **Modify the stylesheet:** Custom colours, fonts, and spacing live in `css/style.css`. Adjust these values to suit your branding. Bulma’s utility classes also allow rapid prototyping without writing much CSS.  
5. **Add more team members:** Duplicate one of the team cards in the Team section and update the image and text. Consistency in size and composition of photos helps present a professional image.

## Credits

This template uses the [Bulma CSS framework](https://bulma.io) and its [carousel extension](https://github.com/Wikiki/bulma-carousel). The placeholder images are simple grey blocks included for demonstration purposes. Guidance for structuring research websites was drawn from articles on research communication and website design.
