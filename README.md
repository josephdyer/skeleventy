# Skeleventy

A skeleton boilerplate built with Eleventy. Check out [Skeleventy](https://skeleventy.netlify.com/)

## Requirements

Node `>=` v8.9.0

## Installation

```
npm install
```

`cd` into your project folder and `npm run dev` to start the development server and Gulp. Eleventy has baked in browsersync and watches all files for changes.

## Ready to deploy?

`npm run build` to minify scripts and run Purgecss over your styles.

## Things to mention

When in development mode, Skeleventy will use `main.css` as the stylesheet. This will be pretty chunky in filesize, due to it containing all of Tailwind's utility classes. Once you run the build command ready for deployment, Skeleventy will then reference the minified version of the stylesheet `main.min.css` - this is done with a simple `environment` helper to switch between stylesheets.

Purge will also run via the build command and will cross reference all  of tailwind's utility classes with your templates/HTML and will remove all the unused ones - pretty cool right?

