import { writeFile } from 'fs/promises';
import { join } from 'path';
import {
  createDirIfNotExists,
  readFile,
  readFilesFromDir,
} from './lib/file.js';
import { parseDateJson, parseGames, parseTeamsJson } from './lib/parse.js';
import { indexTemplate, leikirTemplate, stadaTemplate } from './lib/html.js';
import { calculateStandings } from './lib/score.js';



const INPUT_DIR = './data';
const OUTPUT_DIR = './dist';

async function main() {
  await createDirIfNotExists(OUTPUT_DIR);

  const files = await readFilesFromDir(INPUT_DIR);

  const gameDates = [];

  const gameList = [];

  const teamsList = [];

  for await (const file of files) {
    if (file.indexOf('teams') < 0) {
      continue;
    }

    const teamFile = await readFile(file);

    if (!teamFile) {
      continue;
    }

    const teamData = parseTeamsJson(teamFile);

    teamsList.push(teamData);
  }

  for await (const file of files) {
    if (file.indexOf('gameday') < 0) {
      continue;
    }
    const fileContents = await readFile(file);

    if (!fileContents) {
      continue;
    }

    const indexData = parseGames(fileContents);

    const dateData = parseDateJson(indexData);

    const gamedresult = indexData;

    // @ts-ignore
    if (gamedresult.games !== undefined){
      gameList.push(gamedresult);
    }

    if (dateData !== undefined){
      gameDates.push(dateData);
    }

    }

    /* small graveyard
          ${
          gamesHtml[0].map((item) =>
          `<li>${item.home.name} ${item.home.score}</li>\n`
          )
          .join('')}
    */

          // console.warn(teamsList);
          // console.warn(typeof teamsList);
          // console.warn(gameList);
          // console.warn(gameList[3].games[1].home.score);


      const calculatedStandings = calculateStandings(0);


  await writeFile(join(OUTPUT_DIR, 'index.html'), indexTemplate(), {
     flag: 'w+',
  });

  const stadaHTML = stadaTemplate(calculatedStandings);
  const stadaFilename = join(OUTPUT_DIR, 'stada.html');
  await writeFile(stadaFilename, stadaHTML);

  const leikirHTML = leikirTemplate(gameList);
  const leikirFilename = join(OUTPUT_DIR, 'leikir.html');
  await writeFile(leikirFilename, leikirHTML);


}

main().catch((error) => {
  console.error('error generating', error);
});
