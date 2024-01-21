import {
  createDirIfNotExists,
  readFile,
  readFilesFromDir,
} from './lib/file.js';
import { parseTeamsJson } from './lib/parse.js';

const INPUT_DIR = '../data';
const OUTPUT_DIR = './dist';

async function main() {
  await createDirIfNotExists(OUTPUT_DIR);

  const files = await readFilesFromDir(INPUT_DIR);

  for await (const file of files) {
    if (file.indexOf('gameday') < 0) {
      continue;
    }
    const fileContents = await readFile(file);
    const indexData = parseTeamsJson(fileContents);

    //console.log(typeof indexData);
    console.log('object :>> ', Object.keys(indexData));

    //console.log(file, fileContents?.length);
  }
}

main().catch((error) => {
  console.error('error generating', error);
});
