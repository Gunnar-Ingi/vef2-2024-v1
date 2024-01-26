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
/*
   if(parsed === null || parsed === undefined) {
    console.log('IT IS EMPTY');
    return 12;
   }

   if(parsed.games === null || parsed.games === undefined) {
    console.log('NO GAMES!');
    return 12;
   }
   */

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
