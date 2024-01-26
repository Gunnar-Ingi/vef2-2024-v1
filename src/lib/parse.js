export function parseTeamsJson(data) {

  if (!data) {
    console.log('NO DATA DETECTED');
    return [];
  }

  let parsed;

  try {
    parsed = JSON.parse(data);
   } catch (e) {
  console.error('error parsing JSON', e);
  return [];
   }

   if(parsed === null || parsed === undefined) {
    console.log('IT IS EMPTY');
    return 12;
   }

   if(parsed.games === null || parsed.games === undefined) {
    console.log('NO GAMES!');
    return 12;
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

  return parsed;
}

export function parseDateJson(data) {
  if (!data) {
    console.log('NO DATA DETECTED');
    return [];
  }

  if(data.date === null || data.date === undefined) {
    console.log('NO TIME!');
    return 'No Date';
   }

  return data.date;
}
