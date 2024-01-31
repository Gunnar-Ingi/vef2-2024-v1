
/**
 * Generate a HTML page with title and content.
 *
 * @param {string} title title of the page
 * @param {object} content HTML content of the page
 * @returns Full HTML page
 */
export function template(title, content) {

  if(!content || !title) {
    return null;
  }

  return /* html */`<!doctype html>
<html lang="is">
  <head>
    <meta charset="utf-8">
    <title>${title}</title>
    <link rel="stylesheet" href="./public/styles.css">
    <script type="module" src="./public/scripts.js"></script>
  </head>
  <body>
    <div class="container">
    <div class="offset-3 col col-6">
     <h1>${title}</h1>
    </div>
     <div class="offset-3 col col-6">
        <h2>
          ${
          content
          }
        </h2>
      </div>
    </div>
  </body>
</html>`;
}



/**
 * Generate a HTML string for the index page.
 *
 * @returns {string} HTML string representing the index page
 */

export function indexTemplate() {
  const title = 'Boltadeildin-forsíða!'
  const index = /* html */`
  <section>
    <h1>Velkomin í Boltadeildina!</h1>
    <h2>Deildir</h2>
    <ul>
      <li><a href="leikir.html">Seinustu leikir</a></li>
      <li><a href="stada.html">Staðan í deildinni</a></li>
    </ul>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Aliquam consectetur ac ipsum ac placerat. Suspendisse varius sollicitudin rutrum.
      Donec sit amet nunc sed erat sodales aliquet. Aliquam venenatis suscipit volutpat.
      Fusce rhoncus finibus iaculis. </p>
  </section>`;
  return template(title, index);
}
/**
 *
 * @param {*} standings
 * @returns staða html skrá
 */
export function stadaTemplate(standings) {
  if (!standings) {
    return null;
  }
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
  if(!content) {
    return null;
  }
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
          `\n
          &nbsp
           <li>dagsetning: ${item.date}</li>\n
           &nbsp
           ${item.games.map((inner) => `<li>${Object.values(inner.home)} ${Object.values(inner.away)}</li>\n`).join('')}
           `
           )
          .join('')}
      </ul>
  </section>`;
  return template(title, body);
}
