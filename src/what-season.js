module.exports = function getSeason(date) {
  // const re = /new Date\(\d+, \d+, \d+, \d+, \d+, \d+, \d+\)/g
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (date instanceof Date && isNaN(date.valueOf())) {
    throw new Error('Упс...')
  }
  const month = date.getMonth()
  const winter = [0, 1, 11],
    spring = [2, 3, 4],
    summer = [5, 6, 7],
    autumn = [8, 9, 10];

  if (winter.includes(month)) return 'winter'
  if (spring.includes(month)) return 'spring'
  if (summer.includes(month)) return 'summer'
  if (autumn.includes(month)) return 'autumn'
}
