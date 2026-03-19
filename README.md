# Starship — Pranav Karthik

A 3D spaceship cockpit portfolio built with React, Three.js, and React Three Fiber.

## Setup

```bash
npm install
npm run dev        # local dev server at http://localhost:5173
```

## Deploy to GitHub Pages

1. Create a repo called `starship` (or whatever you want) on GitHub under your account `pr4nav3`.

2. Update `vite.config.js` — make sure `base` matches your repo name:
   ```js
   base: '/starship/',
   ```

3. Push your code:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin https://github.com/pr4nav3/starship.git
   git push -u origin main
   ```

4. Build and deploy:
   ```bash
   npm run build
   npm run deploy
   ```
   This pushes the `dist` folder to a `gh-pages` branch.

5. In your GitHub repo, go to **Settings → Pages** and set the source to the `gh-pages` branch.

6. Your site will be live at: `https://pr4nav3.github.io/starship/`
