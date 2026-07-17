# DollarGames — Studio Website

A simple, static, fully-customizable website for the DollarGames VR studio. No build step, no dependencies — just HTML, CSS, and vanilla JS, ready to push straight to GitHub Pages.

## What's included

```
index.html          → Home page: hero, studio/tools, team, games
contact.html         → Contact page
css/style.css         → All styling + design tokens (colors, fonts)
js/script.js          → Mobile nav, active-link highlighting, scroll reveal
assets/images/        → Logo + placeholder art (swap these out)
```

## Customizing text

Every section in `index.html` and `contact.html` is wrapped in an HTML comment explaining what it is (e.g. `<!-- HERO -->`, `<!-- TEAM / PORTFOLIO -->`). Open the file, find the section, and edit the text directly — headings, paragraphs, and button labels are all plain text in the markup.

- **Add a developer:** copy one `<article class="dev-card">` block in `index.html` (under `TEAM / PORTFOLIO`) and edit the name, role, bio, and tags.
- **Add a game:** copy one `<article class="game-card">` block (under `GAMES`) and edit the title, description, and tags.
- **Coming Soon card:** already set up — just replace `assets/images/coming-soon-bg.svg` and the title/description once you're ready to reveal the project.

## Customizing images

Replace any file in `assets/images/` with your own, **keeping the same filename**, and it'll update everywhere automatically:

| File | Used for |
|---|---|
| `logo.png` | Header, footer, and hero logo |
| `dev-1.svg`, `dev-2.svg`, `dev-3.svg` | Developer avatars (currently simple placeholder illustrations) |
| `game-proximity.svg` | Proximity's cover art |
| `coming-soon-bg.svg` | Background behind the "Coming Soon" badge |

If your replacement has a different filename, update the matching `src="assets/images/..."` in the HTML.

## Customizing colors & fonts

Open `css/style.css` and look at the `:root { ... }` block at the top — every color and font the site uses is a single variable there. Change a value once and it updates across the whole site. For example:

```css
--bill-green: #6fcb84;   /* change this to reskin the primary color everywhere */
```

## The hand-drawn border effect

Cards, buttons, and the nav bar use a `class="wobble"` plus a small SVG filter (defined near the top of each HTML file) to make straight borders look like ink strokes, matching the logo. It's self-contained — you don't need to touch it, but you can adjust the `scale` value on the `feDisplacementMap` in the `<svg>` block if you want the wobble more or less pronounced.

## The contact form

`contact.html` has a working-looking form, but GitHub Pages can only serve static files — there's no server to receive submissions. To make it actually deliver messages:

1. Sign up for a free form backend, e.g. [Formspree](https://formspree.io), [Getform](https://getform.io), or [Web3Forms](https://web3forms.com).
2. They'll give you an endpoint URL.
3. In `contact.html`, change:
   ```html
   <form id="contact-form">
   ```
   to:
   ```html
   <form id="contact-form" action="https://formspree.io/f/yourID" method="POST">
   ```

Until then, submitting the form just shows a confirmation message in the page.

## Deploying to GitHub Pages

1. Create a new GitHub repository and push everything in this folder to it (the `index.html` must be at the repo root, or in a `/docs` folder — either works).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch."
4. Pick your branch (usually `main`) and the folder (`/root` or `/docs`, matching step 1).
5. Save. GitHub will give you a live URL (usually `https://yourusername.github.io/your-repo-name/`) within a minute or two.

That's it — no build tools, no npm install, no compilation step.
