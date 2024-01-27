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

/**
 * Takes in gameday data and throws out
 * illegal data, returns normalized form.
 * @param {string} data read from disk
 * @returns {Array<string>} data in better format
 */
export function parseGames(data) {
  let parsed;
  try {
    parsed = JSON.parse(data);
  } catch (e) {
    console.error('invalid data', e);
    return [];
  }

  if (!parsed) {
    console.warn('parsed data is not object');
    return [];
  }

  if (!parsed.games) {
    console.warn('missing games array');
    return [];
  }

  if (!parsed.date) {
    console.warn('missing date string');
    return [];
  }

  return parsed;
}

export function parseDateJson(data) {
  if (!data) {
    console.log('NO DATA DETECTED');
    return [];
  }

  if(data.date === null || data.date === undefined) {
    return 'No Date';
   }

  return data.date;
}


