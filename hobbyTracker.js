// Weekly hobby log - tracks how much time I spent on different hobbies
const hobbyLog = [
  { day: "Monday", hobby: "journaling", minutes: 20, mood: "calm" },
  { day: "Tuesday", hobby: "watching documentaries", minutes: 35, mood: "curious" },
  { day: "Wednesday", hobby: "journaling", minutes: 25, mood: "thoughtful" },
  { day: "Thursday", hobby: "cycling", minutes: 45, mood: "energized" },
  { day: "Friday", hobby: "cycling", minutes: 30, mood: "relaxed" }
];

// This function adds up all the time spent on hobbies during the week
// It uses reduce() to go through each entry and total the minutes
function totalTime(log) {
  return log.reduce((sum, session) => sum + session.minutes, 0);
}

// This function gets a list of all the hobbies with no repeats
// map() pulls out the hobby names, and Set removes any duplicates
function uniqueHobbies(log) {
  const names = log.map(entry => entry.hobby);
  return [...new Set(names)];
}

// This gives back all the sessions that were longer than a certain number of minutes
// filter() is used to only keep entries with minutes greater than the input
function longSessions(log, minMinutes) {
  return log.filter(entry => entry.minutes > minMinutes);
}

// This counts how many times a specific mood appears in the log
// It filters by the given mood and returns how many match
function countMood(log, moodType) {
  return log.filter(entry => entry.mood === moodType).length;
}

// Suggestion for improvement:
// The function name longSessions() could be renamed to something like filterByDuration()
// because that sounds clearer and more flexible for reuse in other situations.

// --- Outputs ---

console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));

// New test: how many times I felt curious
console.log("Number of curious sessions:", countMood(hobbyLog, "curious"));
