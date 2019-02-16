# Skeleventy

A skeleton boilerplate built with Eleventy. Check out [Skeleventy](https://skeleventy.netlify.com/)

## Requirements

Node `>=` v8.9.0

## Installation

```
npm install
```

`cd` into your project folder and `npm run dev` which will start the development server and Gulp. Eleventy has baked in browsersync and watches all files for changes.

## Folder Architecture

The `site` folder contains all our pages and content which Eleventy will watch and compile into HTML for us.

A `globals` folder lives within this, where as the name suggests - globally available files live. There's a `site.json` file for general site stuff (name, author, email etc), `navigation.json` which we use as reference to loop over in our template to generate our nav and a `helpers.js` which just contains an environment helper.

Uncompiled SCSS and JS reside in the `resources` folder - Gulp will be watching these folders for any changes (you should restart the server when creating new partials).

When in development mode, Skeleventy will use `main.css` as the stylesheet. This will be pretty chunky in filesize, due to it containing all of Tailwind's utility classes. Once you run the build command ready for deployment, Skeleventy will then reference the minified version of the stylesheet `main.min.css`.

Purge will also run via the build command and will cross reference all of Tailwind's utility classes with your templates/HTML and will remove all the unused ones - pretty cool right?

## Ready to deploy?

`npm run build` to minify scripts and run Purgecss over your styles.

Feel free to adapt this as you wish! Go build some cool stuff and put it on Netlify - seriously it's the future! :)
