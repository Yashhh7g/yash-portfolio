# Yash Gupta — Developer Portfolio

React + TypeScript + Vite, Framer Motion, React Three Fiber (lazy-loaded 3D hero), Lucide icons.

## 1. Install Node.js (Windows)
1. Download the **LTS** installer from https://nodejs.org and run it (keep defaults).
2. Close and reopen VS Code, then open a terminal (**Terminal → New Terminal**).
3. Verify: `node -v` and `npm -v` should each print a version number (Node 18 or newer).

## 2. Run the project
Unzip `yash-portfolio.zip`, open the folder in VS Code, then in the terminal:
```
npm install
npm run dev
```
Open the address it prints (usually http://localhost:5173). Stop with `Ctrl + C`.

## 3. Add your resume (required for the button to work)
1. Rename your resume PDF to exactly `resume.pdf`.
2. Put it in the `public` folder: `public/resume.pdf`.
3. Click **Download Resume** — it saves as `Yash_Gupta_Resume.pdf`.
To update later: replace `public/resume.pdf` with the new file (same name), then redeploy.
No resume is included in this ZIP, so until you add one the button will not download a real PDF.

## 4. Customize (all files are plain data)
- `src/config/site.ts` — name, email, GitHub, LinkedIn (prefilled from your resume; check them).
- `src/data/projects.ts` — projects. Fill `github` and `demo` for DocuMind (and others) once you have real URLs; buttons appear automatically. The last card is a placeholder you can edit or delete.
- `src/data/skills.ts` — skills. Java is not listed because it is not on your resume; add it if you want.
- `src/styles/global.css` — colours are at the top (`--lime`, `--bg`, `--ink`).

## 5. Folder structure
```
yash-portfolio/
├─ public/            favicon.svg, (your) resume.pdf
├─ src/
│  ├─ components/     Nav, Hero, HeroScene (3D), Projects, ProjectCard, About, Skills, Contact, Footer, Cursor, Reveal
│  ├─ config/site.ts
│  ├─ data/           projects.ts, skills.ts
│  ├─ styles/global.css
│  ├─ App.tsx, main.tsx
├─ index.html, package.json, vite.config.ts, tsconfig.json
```

## 6. Troubleshooting
- `'npm' is not recognized` → reinstall Node.js, then restart VS Code.
- `npm install` fails → delete `node_modules` and `package-lock.json`, run it again; check your internet.
- PowerShell "running scripts is disabled" → run `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` and retry.
- Port already in use → Vite picks another port; use the one printed.
- Resume button downloads a broken/HTML file → `public/resume.pdf` is missing or misnamed.
- 3D looks missing → it is intentionally off on small screens and with "reduce motion"; a CSS orb shows instead.

## 7. Upload to GitHub
1. Create an empty repository named `yash-portfolio` at https://github.com/new (no README).
2. In the project terminal:
```
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Yashhh7g/yash-portfolio.git
git push -u origin main
```
(`node_modules` and `dist` are ignored automatically.)

## 8. Deploy free (Vercel, recommended)
1. Sign in at https://vercel.com with GitHub → **Add New → Project** → import `yash-portfolio`.
2. Framework preset: **Vite** (auto-detected). Click **Deploy**.
3. `resume.pdf` in `public/` is served at `/resume.pdf` automatically. Every `git push` redeploys.
(Netlify works the same way: build command `npm run build`, publish directory `dist`.)
If hosting under a sub-path (e.g. GitHub Pages `/yash-portfolio/`), set `base: '/yash-portfolio/'` in `vite.config.ts`.

## 9. Final checklist
- [ ] `npm run build` finishes without errors; `npm run preview` opens the built site
- [ ] `public/resume.pdf` added; Download Resume saves `Yash_Gupta_Resume.pdf` and it opens
- [ ] Email, GitHub, LinkedIn links verified
- [ ] DocuMind GitHub / demo URLs added (or left empty)
- [ ] Mobile menu opens/closes; Tab key shows focus rings
- [ ] Live site: resume download works after deployment
