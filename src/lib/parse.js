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

  return parsed;
}

export function parseGameday(data) {
  let parsed;
  try {
    parsed = JSON.parse(data);
   } catch (e) {
    console.error('error parsing JSON', e);
    return [];
   }

   if (!parsed) {
    console.warn('parsed data is not an object');
    return [];
   }

   if (!parsed.games) {
    console.warn('games array missing');
    return [];
   }

   if (!parsed.date) {
    console.warn('missing date string');
    return [];
   }

   return parsed;
}

export function parseGamesJson(data) {
  if (!data) {
    console.log('NO DATA DETECTED');
    return [];
  }

  if(data.games === null || data.games === undefined) {
    console.log('NO GAMES!');
    return 'No Games';
   }

  return data.games;
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
