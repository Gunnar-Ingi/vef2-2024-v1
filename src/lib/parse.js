export function parseTeamsJson(data) {

  let parsed;

  try {
    parsed = JSON.parse(data);
   } catch (e) {
  console.error('error parsing JSON', e);
   }
   // This logs date and games
   // Maybe bring indexData.games
   // and indexData.date
   // in here to parse????
  // console.log('parsed :>> ', parsed);
  return parsed;

}
