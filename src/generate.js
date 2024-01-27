import { writeFile } from 'fs/promises';
import { join } from 'path';
import {
  createDirIfNotExists,
  readFile,
  readFilesFromDir,
} from './lib/file.js';
import { parseDateJson, parseGames, parseGamesJson, parseTeamsJson } from './lib/parse.js';
// import { indexTemplate } from './lib/html.js';
import { indexTemplate, leikirTemplate, stadaTemplate } from './lib/html.js';
import { calculateStandings } from './lib/score.js';



const INPUT_DIR = './data';
const OUTPUT_DIR = './dist';

async function main() {
  await createDirIfNotExists(OUTPUT_DIR);

  const files = await readFilesFromDir(INPUT_DIR);

  const gameDates = [];

  const gameList = [];

  for await (const file of files) {
    if (file.indexOf('gameday') < 0) {
      continue;
    }
    const fileContents = await readFile(file);

    console.info('parsing:', file);
    if (!fileContents) {
      continue;
    }

    const indexData = parseTeamsJson(fileContents);

    const dateData = parseDateJson(indexData);

    // const gameData = parseGamesJson(indexData);

    const gameData = parseGames(fileContents);


    gameList.push(gameData);

    gameDates.push(dateData);
    }


     const calculatedStandings = 'calculateStandings(data)';

     // console.log('gameDates :>> ', data);

  await writeFile(join(OUTPUT_DIR, 'index.html'), indexTemplate(gameDates), {
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
