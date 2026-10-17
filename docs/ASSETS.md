# Profile artwork

The profile uses repository-hosted assets rather than an external badge-rendering service.

- `assets/profile-banner.svg` and `assets/profile-banner-mobile.svg`: original vector artwork, with a compact version for narrow viewports.
- `assets/button-*.svg` and `assets/icon-*.svg`: original navigation and section icons. Buttons retain text labels and links have descriptive alternative text in the README.
- `assets/humanitys-last-stand.jpg`: actual project capture from the public [game case study](https://portfolio.michaelrusinek.workers.dev/work/humanitys-last-stand/), not an illustration of hypothetical gameplay.
- `assets/google-play-badge.svg`: unmodified **GetItOnGooglePlay_Badge_Web_color_English.svg**, downloaded on 17 October 2026 from Google's [Partner Marketing Hub](https://partnermarketinghub.withgoogle.com/brands/google-play/google-play/lockups-icons-badges/?folder=86718). Google Play and the Google Play logo are trademarks of Google LLC. The badge links to the published game listing.

Regenerate the original banners, buttons and section icons with Node.js:

```sh
node scripts/build-profile-assets.cjs
```

The generator has no package dependencies. It does not modify the official Google Play badge or the gameplay capture.

README layout uses standard GitHub headings, paragraphs, linked images, `<picture>` and `<details>`. The name, role, project evidence and technology names remain selectable text. The header buttons can wrap naturally, and the body avoids fixed-width columns.
