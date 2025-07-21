# UCC NetSoc Website

This is the new website for [University College Cork](https://ucc.ie)'s [Networking, Technology, and Gaming Society](https://netsoc.co), redesigned in 2025 by [El Egan Morley](https://yakowa.com).

![License: CC BY-SA 4.0](https://img.shields.io/badge/Created-2025-ffee00)
![License: CC BY-SA 4.0](https://img.shields.io/badge/Last_Updated-2025-66ff00)



## For Contributors

Don't forget to run `npm install` after cloning the repo.

### Stylesheets

If changing styles in `base.scss`, run `npm run update-styles` to update the `base.css`.

If you are wanting wanting it to be *watched* and to be refreshed on save, run `npm run watch-styles`.

If you're editing a different scss file other than base, you can just manually run

`node node_modules/sass/sass.js src/assets/scss/base.scss build/assets/css/base.css`, or if you want it to be *watched*, run `node node_modules/sass/sass.js --watch src/assets/scss/base.scss build/assets/css/base.css`, where `base.scss` and `base.css` are the names of your scss and css respectively.