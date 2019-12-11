[![Netlify Status](https://api.netlify.com/api/v1/badges/f4455669-0ce8-40ea-8ff5-5c31f0aadfa5/deploy-status)](https://app.netlify.com/sites/skeleventy/deploys)

# Skeleventy

A skeleton boilerplate built with Eleventy and TailwindCSS. Check out [Skeleventy](https://skeleventy.netlify.com/)!

## Features

- Build sites faster with the power of [Eleventy](https://www.11ty.dev/docs/), [TailwindCSS](https://tailwindcss.com) and SCSS
- [Laravel Mix](https://laravel-mix.com/docs/5.0/basic-example) (Webpack) to watch, concatenate and compile styles and scripts
- HTML minifier
- Purgecss for removing unused CSS
- ES6 support with Babel
- SEO friendly pages (including open graph and twitter meta)
- Image lazyloading
- A simple blog with categories and featured images

## Requirements

Node `>=` v8.9.0

## Installation

```
npm install
```

`cd` into your project folder and type the `npm run dev` command into terminal, to start the development server and Mix. Eleventy has hot reloading baked in and will automatically watch files for changes.

## Folder Structure

The `site` folder contains all the templates, pages and content, which Eleventy will watch and parse into HTML for us.

Within this, lives a `globals` folder, where you'll find a `site.json` file - for general site config stuff e.g name, author, email, social media...etc.

A `navigation.json`, which we loop over in the template, to generate our nav and a `helpers.js` which just contains a simple environment helper.

Uncompiled SCSS and JS reside in the `resources` folder - Mix will be watching these folders for any changes (you should probably restart the server when creating new partials).

When in development mode, Skeleventy will use `main.css` as the stylesheet. This will be pretty chunky in filesize, due to it containing all of Tailwind's utility classes.

## Ready to deploy?

Type the `npm run production` command to minify scripts, styles and run Purgecss.

Purge will cross reference your templates with Tailwind and will remove all the classes you haven't used. Skeleventy will also reference `main.min.css` as the new stylesheet.

## Recommendations

Once you've had a tinker with Skeleventy, hop over to [Netlify](https://www.netlify.com) and host your beautiful creation for free. You can set up continuous deployment, which will watch your repo and deploy when you've pushed new changes - Netlify will take care of all the heavy lifting for you.

Behold the true magic of a modern JAMstack workflow! ;)
