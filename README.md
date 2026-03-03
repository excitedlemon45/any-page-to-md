# Any Page to MD — Official Website

![Version](https://img.shields.io/badge/version-v1.0.0-blue?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![GitHub Pages](https://img.shields.io/github/deployments/excitedlemon45/any-page-to-md/github-pages?style=flat-square&label=GitHub%20Pages)

Official website for the **Any Page to MD** Chrome extension — convert any webpage to clean Markdown with one click.

**Live Site:** [https://excitedlemon45.github.io/any-page-to-md/](https://excitedlemon45.github.io/any-page-to-md/)

**Chrome Extension:** [Install from Chrome Web Store](#install)

> **Screenshot:** Add a screenshot of the website here by placing an image in the `images/` directory and updating this section.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic markup and structure |
| **CSS3** | Styling with glassmorphism design, animations, and responsive layout |
| **Vanilla JavaScript** | Interactivity, smooth scrolling, and dynamic UI behavior |
| **GitHub Pages** | Static site hosting and deployment |

---

## Features of the Website

- **Responsive Design** — Fully adaptive layout that works seamlessly across desktop, tablet, and mobile devices
- **Dark Glassmorphism UI** — Modern frosted-glass aesthetic with subtle transparency and backdrop blur effects
- **SEO Optimized** — Structured data (JSON-LD), Open Graph meta tags, sitemap.xml, and robots.txt for maximum search visibility
- **Privacy-First** — No cookies, no tracking scripts, no third-party analytics; a dedicated privacy policy page is included
- **Accessible** — Semantic HTML, proper heading hierarchy, ARIA attributes, keyboard navigation, and sufficient color contrast
- **Fast (Lighthouse 90+)** — Minimal dependencies, no external frameworks, optimized SVG assets, and efficient vanilla JavaScript

---

## File Structure

```
any-page-to-md/
├── .github/
│   └── ISSUE_TEMPLATE/
│       ├── bug_report.md
│       └── feature_request.md
├── css/                    # Stylesheets (if separated from inline)
├── images/
│   ├── favicon.svg         # Browser tab icon
│   └── og-image.svg        # Open Graph social sharing image
├── js/
│   └── main.js             # Interactive behavior and UI logic
├── CNAME                   # Custom domain configuration (GitHub Pages)
├── LICENSE                 # MIT License
├── README.md               # This file
├── index.html              # Main landing page
├── privacy.html            # Privacy policy page
├── robots.txt              # Search engine crawling directives
└── sitemap.xml             # XML sitemap for search engines
```

---

## Local Development

Clone the repository and open the site locally:

```bash
git clone https://github.com/excitedlemon45/any-page-to-md.git
cd any-page-to-md
# Open index.html in browser, or use a local server:
python -m http.server 8000
# Visit http://localhost:8000
```

No build step is required. The site is pure static HTML, CSS, and JavaScript.

---

## Deployment

Push to the `main` branch — GitHub Pages auto-deploys from the root of the main branch.

Every commit to `main` triggers a new deployment. Changes typically go live within 1-2 minutes.

---

## Setup Instructions

Follow these steps to set up your own instance of the website:

1. **Fork or clone the repository**

   ```bash
   git clone https://github.com/excitedlemon45/any-page-to-md.git
   cd any-page-to-md
   ```

2. **Replace the `excitedlemon45` placeholder** with your actual GitHub username

   First, find all occurrences:

   ```bash
   grep -r "excitedlemon45" . --include="*.html" --include="*.xml" --include="*.txt"
   ```

   Then replace every instance of `excitedlemon45` with your GitHub username in the matched files.

3. **Enable GitHub Pages**

   Go to your repository **Settings** > **Pages** > **Source**: select the `main` branch and `/ (root)` folder, then click **Save**.

4. **Submit sitemap to Google Search Console**

   Once your site is live, submit `https://YOUR-excitedlemon45.github.io/any-page-to-md/sitemap.xml` to [Google Search Console](https://search.google.com/search-console/) to accelerate indexing.

---

## Customization

### Update the Chrome Web Store Link

In `index.html`, find all instances of `#install` and replace them with your actual Chrome Web Store listing URL:

```
https://chrome.google.com/webstore/detail/your-extension-id
```

### Update the GitHub Repository Link

In `index.html`, find all instances of `#github` and replace them with your repository URL:

```
https://github.com/excitedlemon45/any-page-to-md
```

---

## SEO

This website is built with search engine optimization in mind:

- **Structured Data (JSON-LD)** — Schema.org markup is embedded in `index.html` to help search engines understand the page content and display rich results.
- **Sitemap** — `sitemap.xml` lists all pages with their last-modified dates and change frequencies for efficient crawling.
- **Robots.txt** — `robots.txt` permits all search engine crawlers and points them to the sitemap location.
- **Open Graph & Twitter Cards** — Meta tags in the HTML `<head>` ensure the site looks great when shared on social media platforms.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Links

| Resource | URL |
|---|---|
| **Website (Live)** | [https://excitedlemon45.github.io/any-page-to-md/](https://excitedlemon45.github.io/any-page-to-md/) |
| **Chrome Extension Repo** | [https://github.com/excitedlemon45/any-page-to-md-extension](https://github.com/excitedlemon45/any-page-to-md-extension) |
| **Privacy Policy** | [https://excitedlemon45.github.io/any-page-to-md/privacy.html](https://excitedlemon45.github.io/any-page-to-md/privacy.html) |
| **Chrome Web Store** | [Install Any Page to MD](#install) |
