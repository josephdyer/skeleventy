[![Netlify Status](https://api.netlify.com/api/v1/badges/f4455669-0ce8-40ea-8ff5-5c31f0aadfa5/deploy-status)](https://app.netlify.com/sites/skeleventy/deploys)

# Skeleventy

A skeleton boilerplate built with Eleventy and TailwindCSS. Check out [Skeleventy](https://skeleventy.netlify.com/)!

_Optional_ Gulp 4 upgrade - see this [branch](https://github.com/josephdyer/skeleventy/tree/gulp-upgrade/gulpfile-upgrade).

## Features

- Build sites faster, with the power of Eleventy, TailwindCSS and SCSS
- Gulp build pipeline to watch, concatenate and compile styles and scripts
- HTML minifier
- Purgecss for removing unused CSS
- ES6 support with Babel
- SEO friendly pages (including open graph and twitter meta)
- A simple, elegant blog

## Requirements

Node `>=` v8.9.0

## Installation

```
npm install
```

`cd` into your project folder and type the `npm run dev` command into terminal, to start the development server and Gulp. Eleventy has baked in hot reloading and will files for changes.

_For those of you on Windows, [see Daniel Schildt's potential fix](https://github.com/josephdyer/skeleventy/issues/2#issuecomment-465754702) for the environment helper._

## Folder Structure

The `site` folder contains all the templates, pages and content, which Eleventy will watch and parse into HTML for us.

Within this, lives a `globals` folder, where you'll find a `site.json` file - for general site config stuff e.g name, author, email, social media...etc.

A `navigation.json`, which we loop over in the template, to generate our nav and a `helpers.js` which just contains a simple environment helper.

Uncompiled SCSS and JS reside in the `resources` folder - Gulp will be watching these folders for any changes (you should restart the server when creating new partials).

When in development mode, Skeleventy will use `main.css` as the stylesheet. This will be pretty chunky in filesize, due to it containing all of Tailwind's utility classes. Once you run the build command ready for deployment, Skeleventy will then reference the minified version of the stylesheet `main.min.css`.

Purge will also run via the build command and will cross reference all of Tailwind's utility classes with your templates/HTML and will remove all the unused ones - pretty cool right?

## Ready to deploy?

Type the `npm run build` command to minify scripts, styles and run Purgecss.

Feel free to adapt this as you wish! Go build some cool stuff and put it on Netlify - seriously it's the future!
