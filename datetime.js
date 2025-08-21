// ********Date and Time complexity********
let date = new Date();
console.log(date); // Current date and time
console.log(date.toISOString()); // ISO format
console.log(date.toJSON()); // JSON format
console.log(date.toLocaleString()); // Localized string
console.log(date.getFullYear()); // Year    
console.log(date.getMonth()+1); // Month (1-11)
console.log(date.getDate()); // Day of the month (1-31)
console.log(date.getDay()); // Day of the week (0-6)
console.log(date.getHours()); // Hour (0-23)
console.log(date.getMinutes()); // Minutes (0-59)
console.log(date.getSeconds()); // Seconds (0-59)
console.log(date.getMilliseconds()); // Milliseconds (0-999)
console.log(date.getTime()); // Time in milliseconds since epoch
console.log(typeof date); // Type of the date object
// months are 0-indexed in JavaScript
let newdate = new Date(2023, 0, 1, 12, 0, 0); // January 1, 2023, at noon
console.log(newdate.toDateString ()   ); // Specific date and time
let anotherdate=new Date("2025-8-21");
console.log(anotherdate.toLocaleString()); // Localized string for another date
// ********for quiz apps we use time complexity********
let timestamp = Date.now(); // Current timestamp in milliseconds
console.log(timestamp); // Print the timestamp
// to convert time in seconds
let seconds = Math.floor(timestamp / 1000); // Convert milliseconds to seconds
console.log(seconds); // Print the seconds since epoch
// more on localestring
let options = new Date();
console.log(options.toLocaleString('en-US', {
    weekday: 'long' // Full name of the day
}));