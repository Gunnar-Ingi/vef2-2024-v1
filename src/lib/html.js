
/**
 * Generate a HTML page with title and content.
 *
 * @param {string} title title of the page
 * @param {object} content HTML content of the page
 * @returns Full HTML page
 */
export function template(title, content) {
  return `<!doctype html>
<html lang="is">
  <head>
    <meta charset="utf-8">
    <title>${title}</title>
    <link rel="stylesheet" href="./public/styles.css">
    <script type="module" src="./public/scripts.js"></script>
  </head>
  <body> <h1>This is the thing<h2>${
    content // todo: make it show up in HTML.
  }</body>
</html>`;
}



/**
 * Generate a HTML string for the index page.
 * @param {Array} gameevents list of dates for games
 * @returns {string} HTML string representing the index page
 */

export function indexTemplate(gameevents) {
  const index = `
    <h1>Leikir</h1>
    <h2>Deildir</h2>
    <h3>
        ${
          gameevents.map((item) =>
          `<li><${item}</li>\n`
          )
          .join('')}
    </h3>`;
  return template('Leikir', index);
}

