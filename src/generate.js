import { writeFile } from 'fs/promises';
import { join } from 'path';
import {
  createDirIfNotExists,
  readFile,
  readFilesFromDir,
} from './lib/file.js';
import { parseDateJson, parseTeamsJson } from './lib/parse.js';
// import { indexTemplate } from './lib/html.js';
import { indexTemplate, template } from './lib/html.js';



const INPUT_DIR = './data';
const OUTPUT_DIR = './dist';

async function main() {
  await createDirIfNotExists(OUTPUT_DIR);

  const files = await readFilesFromDir(INPUT_DIR);

  const gameDates = [];

  for await (const file of files) {
    if (file.indexOf('gameday') < 0) {
      continue;
    }
    const fileContents = await readFile(file);

    const indexData = parseTeamsJson(fileContents);

    const dateData = parseDateJson(indexData);

    // console.log(typeof indexData);
    // console.log('object :>> ', Object.keys(indexData));
     // console.log('object :>> ', Object.entries(indexData.games));
    /*
    for (let key in indexData.games) {
      console.log('key :>> ', key);
      console.log('indexData.games[key] :>> ', indexData.games[key]);
      console.log('indexData.games[key] :>> ', indexData.games[key].home);
      console.log('indexData.games[key] :>> ', indexData.games[key].away);
    }
    */
    // console.log(file, fileContents?.length);
    console.log('dateData :>> ', typeof dateData);

    gameDates.push(dateData);
     }
     console.log('gameDates :>> ', gameDates);
  await writeFile(join(OUTPUT_DIR, 'index.html'), indexTemplate(gameDates), {
     flag: 'w+',
  });

}

main().catch((error) => {
  console.error('error generating', error);
});
