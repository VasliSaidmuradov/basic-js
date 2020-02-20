module.exports = function createDreamTeam(members) {
  if (!members || !members.length) {
    return false
  }
  members = members.filter(el => typeof el === 'string').map(el => el.trim().toUpperCase())
  return members.length ? members.map(el => el[0]).sort().join('') : false
};