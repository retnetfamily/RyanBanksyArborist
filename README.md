
# my-web-project

A modern web starter powered by **Vite + React + TypeScript + TailwindCSS**.

## Quickstart

```bash
# 1) Install deps
npm install

# 2) Run dev server
npm run dev

# 3) Build for production
npm run build
npm run preview
```

## Push to GitHub

```bash
git init
git add -A
git commit -m "feat: bootstrap my-web-project"
# Create a new repo on GitHub first, then:
git branch -M main
git remote add origin https://github.com/YOUR-USER/my-web-project.git
git push -u origin main
```

## What's inside

- React 18 + TypeScript
- TailwindCSS 3
- ESLint + Prettier
- Vite 5

MIT License.


## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1) Push to GitHub (see instructions above).
2) In your repo, go to **Settings → Pages**, ensure **Source: GitHub Actions** is selected (it usually auto-detects).
3) If this is a *project* page (not `username.github.io`), set the base path before building:
   - Either set an env var when building locally: `VITE_BASE=/REPO_NAME/`
   - Or add a step in the workflow before `npm run build`:
     ```yaml
     - name: Set base for project pages
       run: echo "VITE_BASE=/REPO_NAME/" >> $GITHUB_ENV
     ```
4) Merges to `main` will build and deploy to Pages automatically.
