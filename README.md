# Shimi Esterkin — Portfolio

A responsive Bento Grid portfolio for **Shimi Esterkin**, Computer Science student at the Open University of Israel, combining systems engineering, full-stack projects, and personal photography.

**Live site:** https://blackhebrewisraeli.github.io/

## Site sections

- Profile introduction, a direct email link, and links to GitHub, LinkedIn, X, and Instagram
- Core Systems projects: C-Assembler-Simulator, eBPF/BCC Tracing Lab, and xv6 Docker Environment
- Product cards for Sprachschule-app and ZeroChart, including demos and repositories
- A "What I bring" card: systems, products, and languages & perspective
- Licenses & certifications shown the way LinkedIn presents them: issuer, issue date, credential ID, skills, and a "Show credential" link to each public verification page
- Personal travel, music, sociology, and lifestyle section

## Photo assets

The hero uses `assets/tbilisi-background.webp`. The personal story card combines a Prague portrait with two travel photographs:
- `assets/prague-background.webp`
- `assets/warsaw-palace.jpeg`
- `assets/munster-streets.jpeg`

The site-wide atmospheric photo layer uses:
- `assets/cave-machpelah.webp`
- `assets/israel-flags.webp`

The two atmospheric photos span the viewport behind the Bento cards as a quiet layer with directional gradient masks and translucent card surfaces. The compact personal collage (sized by the story text, not by the portrait photos) carries the photography, so the background stays in the back. The original photo assets are stored in `assets/`.

## Technology

- Static HTML with responsive CSS; no build step is required
- Google Fonts is the only third-party service loaded
- Accessible link labels, keyboard focus states, and reduced-motion handling

## Social links

- GitHub: https://github.com/blackhebrewisraeli
- LinkedIn: https://www.linkedin.com/in/shimon-esterkin/
- X: https://x.com/hebrewisraeli18
- Instagram: https://www.instagram.com/blackhebrewisraeli/

## Deploy

GitHub Pages publishes the configured source branch according to the repository's Pages settings.
