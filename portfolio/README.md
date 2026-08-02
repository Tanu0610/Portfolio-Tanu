# Tanuja D K — Portfolio Website

A single-page portfolio built with plain HTML, CSS and JavaScript (no build step required).

## Structure
```
portfolio/
├── index.html          # All page content
├── css/style.css        # Styling (dark navy theme, amber/teal accents)
├── js/script.js         # Typewriter effect, heatmap, scroll reveal, counters
├── assets/
│   ├── profile.png              # Profile photo
│   └── Tanuja_D_K_Resume.pdf    # Downloadable résumé
└── README.md
```

## How to use
1. Unzip the folder.
2. Open `index.html` directly in any browser — or,
3. For the best experience (fonts load correctly, relative paths work), serve it locally:
   ```bash
   cd portfolio
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000`.

## Deploying for free
- **GitHub Pages**: push this folder to a repo named `Tanu0610.github.io` (or any repo, then enable Pages in Settings → Pages).
- **Netlify / Vercel**: drag-and-drop the folder onto their dashboard, or connect the GitHub repo for auto-deploys.

## Customizing
- **Colors**: edit the CSS variables at the top of `css/style.css` (`:root { ... }`).
- **Projects**: edit the `<article class="project-card">` blocks in `index.html`. Two projects
  currently link to real repos (DeepFake Detection System, Smart Study Assistant, based on the
  GitHub links provided). The Online Hospital Appointment Portal and AI Based Study Task Locker are
  marked "Source on request" — add their real GitHub URLs once the repos are public. The Resume
  Analyzer project is marked "In progress" since no public repo was found for it — swap in a link
  once it exists.
- **LeetCode stats**: pulled from the public profile at the time of writing (467 problems solved,
  Java primary language, 50/100/200-day streak badges). Update the numbers in the `#leetcode`
  section as your stats grow.
- **Résumé**: replace `assets/Tanuja_D_K_Resume.pdf` with an updated version any time — the
  filename is already wired to the "Download Résumé" button.

## Notes
- The hero "Consistency Log" grid is a stylized, illustrative heatmap (not pulled live from
  LeetCode's API, since that requires authentication) — it represents the spirit of your 200+ day
  streak. If you want a live-updating version, LeetCode's GraphQL API can be queried from a small
  serverless function.
