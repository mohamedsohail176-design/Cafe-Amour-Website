# cafe AMOUR — Website

A 6-page site: Home, Menu, About, Events & Parties, Gallery, Contact.
Plain HTML/CSS/JS — no build step, no dependencies.

## Deploy via GitHub + Netlify

1. **Create a GitHub repo**
   - Go to github.com → New repository → name it e.g. `cafe-amour-website`
   - Choose "Public" or "Private" (either works with Netlify)
   - Don't initialize with a README (you already have this one)

2. **Upload these files**
   - On the repo page, click "uploading an existing file"
   - Drag in ALL files and folders from this package (index.html, menu.html, about.html, events.html, gallery.html, contact.html, styles.css, script.js, the `images/` folder, and the `videos/` folder)
   - Commit the upload

3. **Connect Netlify**
   - Go to netlify.com → sign up / log in (free)
   - "Add new site" → "Import an existing project" → "Deploy with GitHub"
   - Authorize Netlify to access your GitHub, select the `cafe-amour-website` repo
   - Build settings: leave everything blank/default (no build command needed — it's a static site). Set publish directory to `/` (root)
   - Click Deploy

4. **You'll get a live link**, like `cafe-amour-website.netlify.app`
   - Optional: in Netlify → Site settings → Domain management, you can rename the subdomain or add a custom domain later

## Link it to Google Business Profile

Once the site is live:

1. Sign in to the Google account that manages the cafe's Business Profile
2. Search on Google for "cafe AMOUR" — the management panel should appear
3. Click **Edit profile** → **Website**
4. Paste your live Netlify link (e.g. `https://cafe-amour-website.netlify.app`)
5. Click **Save**

Google will review the update, after which a **Website** button appears on the Business Profile listing.

## Updating content later

- **Pizza/menu prices**: edit the `<span class="item-price">` numbers directly in `menu.html`
- **Photos**: replace files in `images/` (keep the same filename, or update the `src=` in the HTML)
- **Videos**: replace files in `videos/` the same way
- After editing, just re-upload the changed files to GitHub — Netlify redeploys automatically within a minute or two

## File structure

```
index.html      Home
menu.html       Menu (with search)
about.html      About
events.html     Events & Parties
gallery.html    Gallery (with video filter)
contact.html    Contact + Google Map
styles.css      Shared styles
script.js       Shared behavior (nav, search, animations)
images/         All photos
videos/         All video clips + poster thumbnails
```
