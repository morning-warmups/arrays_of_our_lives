var week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log("week was: " + week );
console.log("Made some changes");
week.unshift(week.pop());
console.log("week is now: " + week);


function specialDay(day) {
	var index = week.indexOf(day);
	var newDay = week[index].toUpperCase();
	week.splice(index, 1, newDay);
	console.log(week);
}

specialDay('Friday');

var weekDays = week.slice(1, 6);
var weekEnd = [week.pop(), week.shift()];
newWeekArray = [weekDays, weekEnd];

console.log("The weekdays are: " + weekDays);
console.log("The weekend days are: " + weekEnd);
console.log(newWeekArray);
