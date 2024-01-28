
/**
 * Generate a HTML page with title and content.
 *
 * @param {string} title title of the page
 * @param {object} content HTML content of the page
 * @returns Full HTML page
 */
export function template(title, content) {
  return /* html */`<!doctype html>
<html lang="is">
  <head>
    <meta charset="utf-8">
    <title>${title}</title>
    <link rel="stylesheet" href="./public/styles.css">
    <script type="module" src="./public/scripts.js"></script>
  </head>
  <body> <h1>This is the thing<h2>${
    content
  }</body>
</html>`;
}



/**
 * Generate a HTML string for the index page.
 * @param {Array} gameevents list of dates for games
 * @returns {string} HTML string representing the index page
 */

export function indexTemplate(gameevents) {
  const title = 'Boltadeildin-forsíða!'
  const index = /* html */`
  <section>
    <h1>Velkomin í Boltadeildina!</h1>
    <h2>Deildir</h2>
    <ul>
      <li><a href="leikir.html">Seinustu leikir</a></li>
      <li><a href="stada.html">Staðan í deildinni</a></li>
    </ul>

    <h3>
        ${
          gameevents.map((item) =>
          `<li>${item}</li>\n`
          )
          .join('')}
    </h3>
  </section>`;
  return template(title, index);
}

export function stadaTemplate(standings) {
  const title = 'Boltadeildin-staðan!'
  const standingHtml = standings.toString();
  const body = /* html */`
  <section>
    <h1>Staðan í deildinni!</h1>
    ${standingHtml}
  </section>`;
  return template(title, body);
}

/**
 *
 * @param {Array} content list of games
 * @returns HTML string representing the game page.
 */
export function leikirTemplate(content) {
  const title = 'Boltadeildin-leikir!'
  // const gamesHtml = content;
  const gameIndex = content;
  /*
  console.warn(typeof gamesHtml);
  console.warn(Object.getOwnPropertyNames(gamesHtml));
  console.warn(Object.getOwnPropertyNames(gamesHtml[0].games));
  console.warn(typeof gamesHtml[0].games);
  */

  const body = /* html */`
  <section>
    <h1>Leikir seinustu vikna</h1>
     <ul>
      ${
          gameIndex
          .map((item) =>
          `<p>results:<p>\n
           <li>${item.date}</li>\n
           <li>${item.games.map((inner) => `<li>${Object.values(inner.home)} ${Object.values(inner.away)}</li>\n`).join('')}</li>\n
           `
           )
          .join('')}
      </ul>
  </section>`;
  return template(title, body);
}
