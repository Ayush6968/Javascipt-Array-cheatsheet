['🍎', '🍌'].concat(['🍇', '🥭']); // Joins Two arrays, Output : ["🍎", "🍌", "🍇", "🥭"]  //

['🍎', '🍌', '🍇', '🥭'].copyWithin(2, 0); //copy first 2 array elements to last 2, output: ["🍎", "🍌", "🍎","🍌"] //

[10, 20, 30, 40].filter(num => num > 20); // element in the array that has a value more than 20, output : [30, 40] //

[('🍎', '🍌', '🍇', '🥭')].fill('🍑'); // fill all the array elements with "🍑", Output : ["🍑","🍑","🍑","🍑"] //

['🍎', '🍌'].forEach(emoji => console.log(emoji)); //	Calls a function for each array element output":"🍎","🍌"//

['🍎', '🍌', '🍇'].find(emoji => emoji === '🍎'); // element in the array that has a value of "🍎", output : "🍎" //

['🍎', '🍌', '🍇'].findIndex(emoji => emoji === '🍌'); // get the index of  🍌, output: 1 //

['🍎', '🍌', '🍇'].some(emoji => emoji === "🍎") // Check if every element in the array has a value 🍎, Output : false //

['🍎', '🍌', '🍇'].some(emoji => emoji === "🍎") //	Checks if any of the elements in an array pass a test,output: true //

['🍎', '🍌', '🍇'].includes('🥭'); // Check if the fruit array contains "🥭", output : false //

['🍎', '🍌', '🍇'].join(' + '); // Joins all elements of an array into a string, output : "🍎 + 🍌 + 🍇"//

[4, 8, 12].map(num => num / 2); // Creates a new array by calling a function for each array element, output: [2, 4, 6,] //

['🍎', '🍌', '🍇'].pop(); // Removes and return the last element of an array, output: "🍇" //

['🍎', '🍌', '🍇'].push('🍒'); // Adds new elements to the end of an array and returns length, output: 4 //

[1, -1, 3, 4].reduce((acc, cur) => acc + cur,0); //Reduce the values of an array to a single value, output: 7 //

['🍎', '🍌', '🍇'].reverse(); // Reverses the order of the elements in an array, output: ["🍇", "🍌", "🍎"] //

['🍇', '🍌', '🍎'].shift(); // Removes the first element of an array, and returns that element, output: "🍇" //

['🍇', '🍌', '🍎'].unshift('🍐'); // Adds new elements to the beginning and returns the new length, output: 4 //

['🍎', '🍌', '🍇', '🥭'].splice(1, 3); // 	Adds/Removes elements output: (removed array)["🍌", "🍇"]  (new array) [["🍎", "🥭"]//

['c', 'b', 'a'].sort(); // Sorts the elements of an array, output: ["a", "b", "c"]  d(efault method is ascending/alphabetical) //

['🍎', '🍌', '🍇'].slice(1, 2); // Selects a part of an array, and returns the new array, output: ["🍌"] //

['🍎', '🍌', '🍇'].toString(); // Converts an array to a string, and returns the result, output:"🍎,🍌,🍇" //

Array.from('🍎🍌🍇'); //  Creates an Array from a String, output: ["🍎", "🍌", "🍇"] //

Array.isArray(['🍎', '🍌', '🍇']); // check for an array, output : true //



