// // // Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
// // function printNumbersDivisibleByThree() {
// //   var index = 1;
// //   while (index <= 1000) {
// //     if (index % 3 === 0) {
// //       console.log(index);
// //     }
// //     index += 1;
// //   }
// // }
// // printNumbersDivisibleByThree();


// // // Write a method that accepts an array of strings and prints out every other string.
// // function printEveryOtherItem(strings) {
// //   var index = 0;
// //   strings.forEach(function (string) {
// //     if (index % 2 === 0) {
// //       console.log(string);
// //     }
// //     index += 1;
// //   });
// // }
// // printEveryOtherItem(["a", "b", "c", "d", "e"]);


// // // Write a method that accepts an array of numbers and returns the sum.
// // function computeSum(numbers) {
// //   var sum = 0;
// //   numbers.forEach(function (number) {
// //     sum += number;
// //   });
// //   return sum;
// // }
// // console.log(computeSum([2, 4, 5]));

// // // Start with the hash: city_populations = {chi: 2700000}
// // // Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// // // The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
// // var cityPopulations = { chi: 2700000 };
// // cityPopulations["nyc"] = 8400000;
// // cityPopulations.sf = 800000;  // same as cityPopulations["sf"]
// // console.log(cityPopulations);



// // Write a method that prints out every number from 1 to 100. 
// function printOneToOneHundred() {
//   var i = 1;
//   while (i < 101) {
//     console.log(i);
//     i++;
//   }
// }

// printOneToOneHundred();
// // Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).
// function printOddsOneToOneHundred() {
//   var i = 1;
//   while (i < 101) {
//     console.log(i);
//     i += 2;
//   }
// }

// printOddsOneToOneHundred();
// // Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.
// var potatoes = [1, 55, 55, 3];

// function countFiftyFives(numbers) {
//   var count = 0;
//   numbers.forEach(function (number) {
//     if (number === 55) {
//       count++;
//     }
//   });
//   return count;
// }

// countFiftyFives(potatoes);
// // Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string.
// // For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].
// var potatoes = ["a", "b", "c", "d", "e"];

// function addAwesomesauce(array) {
//   var i = 0;
//   var awesome_array = [];
//   while (i < (array.length - 1)) {
//     awesome_array.push(array[i]);
//     awesome_array.push("awesomesauce");
//     i++;
//   }
//   awesome_array.push(array[i]);
//   return awesome_array;
// }

// console.log(addAwesomesauce(potatoes));
// // Start with the hash: itemAmounts = {chair: 5, table: 2}
// // Someone just bought two chairs. Change the hash such that the chair amount is 3.
// // The final result should be: {chair: 3, table: 2}
// var itemAmounts = { chair: 5, table: 2 };
// itemAmounts[chair] = 3;
// console.log(itemAmounts);

// // Start with the hash: itemAmounts = {chair: 5, table: 2}
// // You received 7 desks to sell. Change the hash to include desks.
// // The final result should be: {chair: 5, table: 2, desk: 7}
// var itemAmounts = { chair: 5, table: 2 };
// itemAmounts["desk"] = 7;
// console.log(itemAmounts);

// // Write a method that accepts a number and returns its factorial.
// // For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
// // function factorio(number) {
// //   let i = 0;
// //   let factorial = 1;
// //   while (i < number) {
// //     i++;
// //     factorial *= i;
// //   }
// //   return factorial;
// // }

// function factorio(number) {
//   let factorial = 1;
//   while (0 < number) {
//     factorial *= number;
//     number--;
//   }
//   return factorial;
// }
// console.log(factorio(5));

// // Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// // For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].


// function sumPossibilities(array1, array2) {
//   let possibilities = [];
//   array1.forEach(function (num1) {
//     array2.forEach(function (num2) {
//       possibilities.push(num1 + num2);
//     });
//   });
//   return possibilities;
// }

// console.log(sumPossibilities([1, 5, 10], [100, 500, 1000]));

// Write a function that accepts an array of strings and returns a new array containing every other string from the original array.For example, if the input is["a", "b", "c", "d", "e", "f"], the output should be["a", "c", "e"].
// def select_even_items(strings)
// result = []
// index = 0
// strings.each do | string |
//     if index % 2 == 0
//       result << string
// end
// index = index + 1
// end
// result
// end
// p select_even_items(["a", "b", "c", "d", "e", "f"])

// function selectEvenItems(strings) {
//   let result = [];
//   let index = 0;
//   strings.forEach(function (string) {
//     if (index % 2 === 0) {
//       result.push(string);
//     }
//     index++;
//   });
//   return result;
// }

// console.log(selectEvenItems(["a", "b", "c", "d", "e", "f"]));

// // # Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.
// // def max(numbers)
// //   currentMax = numbers[0]
// //   numbers.each do |number|
// //     if number > currentMax
// //       currentMax = number
// //     end
// //   end
// //   currentMax
// // end
// // p max([5, 4, 8, 1, 2])

// function max(numbers) {
//   let currentMax = 0;
//   numbers.forEach(function (number) {
//     if (number > currentMax) {
//       currentMax = number;
//     }
//   });
//   return currentMax;
// }

// console.log(max([5, 4, 8, 1, 2]));

// // # Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built into Ruby.
// // def descending(numbers)
// //   result = []
// //   index = numbers.length - 1
// //   numbers.length.times do
// //     result << numbers[index]
// //     index = index - 1
// //   end
// //   result
// // end
// // p descending([1, 3, 5, 7])

// function descending(numbers) {
//   let result = [];
//   let index = numbers.length - 1;
//   while (index > -1) {
//     result.push(numbers[index]);
//     index--;
//   }
//   return result;
// }

// console.log(descending([1, 3, 5, 7]));

// // # Write a method that accepts two arrays of numbers, and returns an array of every sum of every combination of single numbers from the first and second array. For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should return this array: [101, 501, 1001, 105, 505, 1005, 110, 510, 1010].
// // def sum_combinations(numbers1, numbers2)
// //   result = []
// //   numbers1.each do |number1|
// //     numbers2.each do |number2|
// //       result << number1 + number2
// //     end
// //   end
// //   result
// // end
// // p sum_combinations([1, 5, 10], [100, 500, 1000])

// function sumCombinations(numbers1, numbers2) {
//   let result = [];
//   numbers1.forEach(function (number1) {
//     numbers2.forEach(function (number2) {
//       result.push(number1 + number2);
//     });
//   });
//   return result;
// }

// console.log(sumCombinations([1, 5, 10], [100, 500, 1000]));

// // # Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
// // def factorial(number)
// //   result = 1
// //   current_number = number
// //   number.times do
// //     result = result * current_number
// //     current_number = current_number - 1
// //   end
// //   result
// // end
// // p factorial(5)

// function factorial(number) {
//   let result = 1;
//   while (number > 0) {
//     result *= number;
//     number--;
//   }
//   return result;
// }

// console.log(factorial(5));

// 1. Write a function that takes in an array of numbers and returns its sum.
// function sumArray(numbers) {
//   let sum = 0;
//   let index = 0;
//   while (index < numbers.length) {
//     sum += numbers[index];
//     index++;
//   }
//   return sum;
// }

// console.log(sumArray([1,2,3,4]));
// 2. Write a function that takes in an array of strings and returns the smallest string.
// function smallestString(strings) {
//   let smallest = "";
//   let smallestLength = 3000;
//   strings.forEach(function (string) {
//     if (smallestLength > string.length) {
//       smallestLength = string.length;
//       smallest = string;
//     }
//   });
//   return smallest;
// }

// console.log(smallestString(["potato", "cheese", "ash", "bananananananana", "foot"]));
// 3. Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.
// function reverseNumbers(numbers) {
//   let index = numbers.length - 1;
//   let result = [];
//   while (index >= 0) {
//     result.push(numbers[index]);
//     index--;
//   }
//   return result;
// }

// console.log(reverseNumbers([1,2,3,4,5]));
// 4. Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.
// function countWordsBeginningWithA(strings) {
//   let count = 0;
//   strings.forEach(function (string) {
//     if (string[0] === "a") {
//       count++;
//     }
//   });
//   return count;
// }

// console.log(countWordsBeginningWithA(["apple", "banana", "apricot", "mango", "alfonzo"]));
// 5. Write a function that takes in an array of strings and joins them together to make a single string separated by commas.
// function combineStrings(strings) {
//   let result = strings[0];
//   let index = 1;
//   while (index < strings.length) {
//     result += ", " + strings[index];
//     index++;
//   }
//   return result;
// }

// console.log(combineStrings(["apple", "banana", "apricot", "mango", "alfonzo"]));
// 6. Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other). 
// function product(numbers) {
//   let product = 1;
//   numbers.forEach(function (number) {
//     product *= number;
//   });
//   return product;
// }

// console.log(product([1,2,3,4,5,6]));
// 7. Write a function that takes in an array of numbers and returns the two smallest numbers.
// function twoSmallest(numbers) {
//   if (numbers[0] <= numbers[1]) {
//     var firstSmallest = numbers[0];
//     var secondSmallest = numbers[1];
//   } else {
//     var firstSmallest = numbers[1];
//     var secondSmallest = numbers[0];
//   }
//   let index = 2;
//   while (index < numbers.length) {
//     if (numbers[index] < secondSmallest) {
//       if (numbers[index] < firstSmallest) {
//         secondSmallest = firstSmallest;
//         firstSmallest = numbers[index];
//       } else {
//         secondSmallest = numbers[index];
//       }
//     }
//     index++;
//   }
//   let result = [];
//   result.push(firstSmallest);
//   result.push(secondSmallest);
//   return result;
// }

// console.log(twoSmallest([15,16,3,8,1,19]));
// 8. Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.
// function howManyZeros(numbers) {
//   let count = 0;
//   numbers.forEach(function (number) {
//     if (number === 0) {
//       count++;
//     }
//   });
//   return count;
// }

// console.log(howManyZeros([15,16,3,8,1,19,0,0,0]));
// 9. Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.
// function allBiggerThanTen(numbers) {
//   let result = true;
//   numbers.forEach(function (number) {
//     if (number <= 10) {
//       result = false;
//     }
//   });
//   return result;
// }

// console.log(allBiggerThanTen([15,16,30,80,100,19,1]));
// 10. Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.
// function countA(strings) {
//   let count = 0;
//   strings.forEach(function (string) {
//     let index = 0;
//     while (index < string.length) {
//       if (string[index] === "a") {
//         count++;
//       }
//       index ++;
//     }
//   });
//   return count;
// }

// console.log(countA(["apple", "banana", "apricot", "mango", "alfoaaanzo"]));
// BONUS PROBLEMS
// Write a function that accepts a string and returns whether it’s a palindrome. 
// function palindromeCheck(string) {
//   if (string === string.split("").reverse().join("")) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(palindromeCheck("taquito"));
// console.log(palindromeCheck("god dog"));
// Write a function to generate/print/store the first “n” prime numbers.
// function listPrimes(howMany) {
//   let number = 2;
//   let primes = [];
//   while (primes.length < howMany) {
//     let index = 2;
//     let prime = true;
//     while (index <= Math.sqrt(number)) {
//       if (number % index === 0) {
//         prime = false;
//         break;
//       }
//       index++;
//     }
//     if (prime === true) {
//       primes.push(number);
//     }
//     number++;
//   }
//   return primes;
// }

// console.log(listPrimes(1000000));
// Given a tic-tac-toe board (matrix of 3 x 3), write a function that can check to see whether X or O won. (edited) 

var matrix = [
  ["X", "-", "O"],
  ["-", "O", "O"],
  ["O", "-", "-"]
];

matrix.forEach(function (line) {
  console.log(line);
});

function ticTacToeVictoryCheck(board) {
  let winnerIs = "none";
  for (var i = 0; i < matrix.length; i++) {
    //vertical
    if (matrix[0][i] === "X" && matrix[1][i] === "X" && matrix[2][i] === "X") {
      winnerIs = "X";
      break;
    }
    if (matrix[0][i] === "O" && matrix[1][i] === "O" && matrix[2][i] === "O") {
      winnerIs = "O";
      break;
    }

    //horizontal
    if (matrix[i][0] === "X" && matrix[i][1] === "X" && matrix[i][2] === "X") {
      winnerIs = "X";
      break;
    }
    if (matrix[i][0] === "O" && matrix[i][1] === "O" && matrix[i][2] === "O") {
      winnerIs = "O";
      break;
    }
  }
  //top-left-bot-right
  if (matrix[0][0] === "X" && matrix[1][1] === "X" && matrix[2][2] === "X") {
    winnerIs = "X";
  }
  if (matrix[0][0] === "O" && matrix[1][1] === "O" && matrix[2][2] === "O") {
    winnerIs = "O";
  }
  //top-right-bot-left
  if (matrix[0][2] === "X" && matrix[1][1] === "X" && matrix[2][0] === "X") {
    winnerIs = "X";
  }
  if (matrix[0][2] === "O" && matrix[1][1] === "O" && matrix[2][0] === "O") {
    winnerIs = "O";
  }
  return "Winner is: " + winnerIs;
}

console.log(ticTacToeVictoryCheck(matrix));