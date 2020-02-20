const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  return parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) < MODERN_ACTIVITY && typeof sampleActivity === 'string' ? Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) * HALF_LIFE_PERIOD / 0.693) : false
}