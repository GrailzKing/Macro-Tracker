# Macro Tracker

A small, self-contained diet & macro tracking web app, built from a spreadsheet-based
diet log. No build step, no backend, no dependencies — just static files you can host
on GitHub Pages and use from your phone.

## What it does

- **Targets**: log your bodyweight and it calculates daily calorie/protein/carb
  targets using the same formulas as the original spreadsheet (0.77g protein/lb,
  9 cal/lb, carbs = 40% of the protein target). All three multipliers are editable
  under Settings.
- **Food log**: a searchable database of 59 foods (carried over from the original
  spreadsheet, with calories/protein/carbs per serving). Search, enter a serving
  amount, tap Add — it's logged against today's totals with a progress bar for
  each macro.
- **Foods tab**: add, edit, or delete foods in the database.
- **History**: a simple weight-over-time chart and a list of every day you've
  logged, with daily totals. Tap a day to jump back and review it.
- **Settings**: export/import a JSON backup, edit the target formula, or wipe
  all data on the device.
- **Works offline / installable**: it's a PWA — "Add to Home Screen" on iPhone
  or Android turns it into an app icon that opens full-screen and works without
  a signal once loaded.

## Important: where your data lives

This is a static site with no server or database. Everything you log (weight,
food entries, custom foods) is saved in your **phone's browser storage only**
(`localStorage`). That means:

- It's private to you — nothing is uploaded anywhere.
- It does **not** sync between devices (your phone and laptop each have their
  own separate data).
- Clearing your browser's site data, or uninstalling/reinstalling as a home
  screen app in some browsers, can erase it.
- Use **Settings → Export backup** every so often, especially before switching
  phones or browsers. Import restores from that file.

If you later want the same log to follow you across devices, that needs a
small backend (e.g. Firebase, Supabase) — happy to help add that if you want it.

## Deploying to GitHub Pages (no command line needed)

1. Go to [github.com/new](https://github.com/new) and create a new repository
   (e.g. `macro-tracker`). Public repos get free Pages hosting; it can be
   private too if you're on GitHub Pro/Team.
2. On the new repo's page, click **"uploading an existing file"** (or drag and
   drop) and upload every file from this folder:
   `index.html, style.css, app.js, manifest.json, sw.js, icon-192.png, icon-512.png`.
   Commit the upload.
3. Go to the repo's **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch",
   branch `main`, folder `/ (root)`. Save.
5. GitHub gives you a URL like `https://yourusername.github.io/macro-tracker/`
   after a minute or two — that's your app.
6. Open that URL on your phone, then use your browser's **Share → Add to Home
   Screen** (iPhone/Safari) or **⋮ menu → Install app** (Android/Chrome) to
   get an app icon.

To update the site later, just upload changed files again through the same
"Add file → Upload files" flow — Pages redeploys automatically in about a
minute.

## Running it locally first (optional)

Any static file server works, e.g. from this folder:

```
python3 -m http.server 8000
```

then open `http://localhost:8000`.
