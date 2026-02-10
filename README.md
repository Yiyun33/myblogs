# My Blog Space

A simple personal blog website built with plain HTML, CSS, and JavaScript.

## Project structure

- `index.html` – page structure and content
- `styles.css` – visual styles and responsive layout
- `script.js` – posts rendering, filtering, and newsletter form behavior

## Run locally

```bash
python3 -m http.server 4173 --directory .
```

Then open:

- `http://localhost:4173/index.html`

## Publish the website

Because this project is fully static, you can host it on any static hosting provider.

### Option 1: GitHub Pages (recommended)

1. Push this repository to GitHub.
2. Open **Settings → Pages** in your repository.
3. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: your default branch (for example `main`), folder `/ (root)`
4. Save and wait for deployment.
5. Your website URL will be shown in the Pages settings.

### Option 2: Netlify Drop (fastest no-config)

1. Go to `https://app.netlify.com/drop`
2. Drag and drop this project folder.
3. Netlify will publish it immediately and provide a public URL.

### Option 3: Vercel / Cloudflare Pages

- Import the repo.
- Framework preset: `Other` / static site.
- Build command: none.
- Output directory: project root.

## Custom domain (optional)

After deployment, connect your own domain in your hosting provider dashboard and follow DNS instructions from the host.
