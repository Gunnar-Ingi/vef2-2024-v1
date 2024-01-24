export function parseTeamsJson(data) {

  let parsed;

  try {
    parsed = JSON.parse(data);
   } catch (e) {
  console.error('error parsing JSON', e);
   }

   console.log('parsed :>> ', typeof parsed);

   if(parsed == null) {
    console.log('IT IS EMPTY');
    return [];
   }

   if(parsed.games == null) {
    console.log('IT IS EMPTY');
    return [];
   }

   // Could use nulish coalescing assignment
   // a.speed ??= 25;


/*
   // stick all games into an array, parse out null and undef somehow.
   for (const games in parsed) {
    if (Object.hasOwnProperty.call(parsed, games)) {
      const element = parsed[games];
      console.log('element :>> ', element);
    }
   }
   */
/*
   const items = [];
   for (const item of parsed.games) {
    if (!item.games || !item.date) {
      console.warn('missing required properties in JSON');
    } else {
      items.push({
        games: item.games,
        date: item.date,

        // html: `${basename(item.csv, '.csv')}.html`,
      });
    }
   }

   */
   // This logs date and games
   // Maybe bring indexData.games
   // and indexData.date
   // in here to parse????
  // console.log('parsed :>> ', parsed);

   console.log('parsed.games :>> ', parsed.games);
  return parsed;
}
