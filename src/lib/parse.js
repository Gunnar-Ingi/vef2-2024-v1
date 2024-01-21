export function parseTeamsJson(data) {

  let parsed;

  try {
    parsed = JSON.parse(data);
  } catch (e) {
  console.error('error parsing JSON', e);
  }
  /*
  const items = [];
  for (const item of parsed) {
    if (!item.home || !item.away) {
      console.warn('missing required properties in JSON');
    } else {
      items.push({
        home: item.home,
        away: item.away,
      });
    }
  }
  */
  return parsed;

}
