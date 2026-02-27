# VZN.EAD — Website

## Folder Structure
```
vznead/
├── index.html          ← Home page
├── portfolio.html      ← Portfolio grid page
├── contact.html        ← Contact page
├── pages/
│   └── project.html    ← Project detail template (duplicate for each project)
├── css/
│   └── style.css       ← ALL styling — edit colors/fonts here
├── js/
│   ├── main.js         ← Cursor, scroll reveals, modal — shared
│   └── loader.js       ← Intro loader — only on index.html
├── images/
│   ├── clients/        ← Drop client logo PNGs here
│   ├── gallery/        ← Project gallery images/GIFs
│   └── about.jpg       ← Your photo for the about section
└── videos/
    └── hero.mp4        ← Your hero background video (looping)
```

---

## How to Open in VS Code + Live Preview
1. Open VS Code
2. File → Open Folder → select the `vznead` folder
3. Install the **"Live Server"** extension (by Ritwick Dey)
4. Right-click `index.html` → **"Open with Live Server"**
5. Your site opens at `http://127.0.0.1:5500`

---

## Common Edits

### Change Colors
Open `css/style.css` → edit the `:root` block at the top:
```css
:root {
  --green: #59b280;     /* your accent color */
  --bg: #151414;        /* background */
  --white: #f0ede8;     /* text color */
}
```

### Add Hero Background Video
1. Put your `.mp4` file in `/videos/` and name it `hero.mp4`
2. That's it — the site picks it up automatically
3. Adjust brightness: in `style.css` find `.hero-video-bg video { opacity: 0.45; }`

### Add a Client Logo
1. Put the logo PNG in `/images/clients/`
2. In `index.html`, find the clients section and replace:
   ```html
   <span>Universal Music</span>
   ```
   with:
   ```html
   
   ```

### Add a New Project to Portfolio
1. Duplicate `pages/project.html` → rename it (e.g. `project-nike.html`)
2. Edit the title, video embed URL, details, and gallery images
3. In `portfolio.html`, copy a `.p-item` block and set:
   - `href="pages/project-nike.html"`
   - `data-cat="brand-film"` (or your category)
   - Image and project name

### Add Thumbnail Images to Work Grid
In `index.html` work section, replace:
```html
<div class="work-thumb-placeholder">...</div>
```
with:
```html
<img class="work-thumb" src="images/thumb-01.jpg" alt="Project Name">
```

### Change the Nav Logo to an Image
In each HTML file's `<nav>`, replace the text logo with:
```html
<a href="index.html" class="nav-logo">
  <img src="images/logo.png" alt="VZN.EAD" style="height:36px; width:auto;">
</a>
```

### Add Social Links
Search for `href="#" target="_blank"` in footer sections and replace `#` with your actual URLs.

### Update the Showreel Button
In `index.html`, find:
```html
openModal('https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1')
```
Replace `YOUR_VIDEO_ID` with your YouTube video ID (the part after `v=` in the URL).

---

## Adding More Pages
To add a new project page:
1. Copy `pages/project.html` → e.g. `pages/project-pepsi.html`
2. Change the `<title>` tag
3. Update all the content (video, details, gallery)
4. Link to it from `portfolio.html`

---

## Technologies Used
- **HTML / CSS / JS** — no frameworks needed
- **GSAP** (loaded from CDN) — animations
- **Google Fonts** — Bebas Neue + Syne + DM Mono

No build step. No npm. Just open and edit.
