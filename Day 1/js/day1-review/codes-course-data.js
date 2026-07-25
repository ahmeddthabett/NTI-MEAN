const matches = [
  { title: 'Thursday Night 5v5', capacity: 10, registered: 8, active: true },
  { title: 'Friday Morning Turf', capacity: 14, registered: 14, active: false },
  { title: 'Saturday Evening', capacity: 10, registered: 4, active: true }
];

function getRemainingSpots(match) {
  return match.capacity - match.registered;
}

function formatMatchLabel(match) {
  return `${match.title} — ${getRemainingSpots(match)} spots left`;
}

const openMatches = matches.filter((match) => {
  return match.active && getRemainingSpots(match) > 0;
});

const matchLabels = openMatches.map(formatMatchLabel);

const totalAvailableSpots = openMatches.reduce((total, match) => {
  return total + getRemainingSpots(match);
}, 0);

console.log('Open match labels:', matchLabels);
console.log('Total available spots:', totalAvailableSpots);

module.exports = { matches, getRemainingSpots, formatMatchLabel };