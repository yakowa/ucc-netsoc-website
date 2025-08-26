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

`sass src/lib/assets/scss/base.scss src/lib/assets/css/base.css`, or if you want it to be *watched*, run `sass --watch src/lib/assets/scss/base.scss src/lib/assets/css/base.css`, where `base.scss` and `base.css` are the names of your scss and css respectively.

### Developing

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for the target environment.
