const FILL_ME_IN = "FILL ME IN!";
/**
 * Callback Review!
 *
 * The following functions contain examples of synchronous callback functions
 * Not all functions end with a return statement!
 * Instead, some functions pass data along to the next function by invoking
 * a callback function with the data as the argument.
 *
 * Consider the following example:
 */
function findHalfWordLength(word, callback) {
  let halfWordLength = Math.floor(word.length / 2);
  callback(halfWordLength);
}

function print(output) {
  console.log(`Your output: ${output}  :)`);
}

findHalfWordLength("output-word", print); // notice that print is NOT invoked when passed as an argument!
/**
 * Instead of telling findHalfWordLength to return a piece of data to us right away,
 * we provide it with a callback function to use with the data it generates.
 * This example may be a little contrived, but the same structure is used for much
 * more complex chains of functions.
 *
 * Fill out the following higher-order functions as specified.
 * Feel free to create any helper functions deemed necessary.
 *
 *  Given n, generate an array of values corresponding to each
 * magnitude level and digit | n: 7134 -> [7000, 100, 30, 4]
 * makeDigitArray should invoke the callback function its provided
 * with the generated array passed as an argument.
 */
function makeDigitArray(n, callback) {
  const digits = [];
  while (n > 0) {
    if (n < 10) {
      digits.push(n * 10 ** digits.length);
      n = -1;
    } else {
      digits.push((n % 10) * 10 ** digits.length);
      n = Math.floor(n / 10);
    }
  }
  // this callback will be arraySummer in the test but they don't gotta know that
  callback(digits.reverse());
}

// Given an input array, find the sum of elements in the following manner:
// ADD elements found at even indices,
// SUBTRACT elements found at odd indices.
// EX: arr = [7000, 100, 30, 4] -> (7000 - 100 + 30 - 4) = 6926
function arraySummer(arr) {
  let sum = arr.reduce((sum, num, i) => {
    return Number(i % 2 ? sum - num : sum + num);
  }, 0);

  /**
   * We can use anonymous functions for callbacks too!
   * The second parameter of primeFactors is a callback function,
   * Instead of explicitly defining it somewhere else to be garbage collected later,
   * Let's just define the function on the fly and pass it in-line!
   */
  primeFactors(sum, array => {
    /**
     * Many common iterators use synchronous callback function as well,
     * Provide the array.map method below with an anonymous callback function
     * that implements the following functionality:
     *
     * The new array entries are strings describing each number and it's square
     * EXAMPLE: array = [2, 3463]
     * --> mappedArray = ['The square of 2 is 4', 'The square of 3463 is 11992369']
     */
    const mappedNums = array.map(prime => {
      return `The square of ${prime} is ${prime ** 2}`;
    });

    // This block of code is strictly used for testing purposes
    // Do not delete!
    window.sum = sum;
    window.mappedNums = mappedNums;
  });
}

/**
 * Generate an array of all prime factors for the given number.
 * EXAMPLE: num = 6926 -> [2, 3463]
 * primeFactors should pass the generated array to the callback
 * function it's provided. If the number given is 0, invoke the callback
 * with [0];
 */
function primeFactors(num, callback) {
  const primeFactors = {};
  if (!num) {
    callback([0]);
    return;
  }
  while (num % 2 === 0) {
    if (!primeFactors[2]) {
      primeFactors[2] = 2;
    }
    num /= 2;
  }
  // n must be odd at this point
  for (let i = 0; i <= Math.sqrt(num); i += 2) {
    while (num % i === 0) {
      if (!primeFactors[i]) {
        primeFactors[i] = i;
      }
      num /= i;
    }
  }
  if (num > 2) {
    primeFactors[num] = num;
  }
  callback(Object.values(primeFactors));
}

const createMessage = callback => {
  let message = "";
  const addGreeting = () => {
    message += "Hi! ";
  };
  const introduceYourself = () => {
    message += "my name is ";
  };
  const iDontKnowThem = () => {
    message += '"Who?"\n';
  };
  const iDidntHearYou = () => {
    message += '"What?"\n';
  };
  const gibberish = () => {
    message += "*chikka chikka* Slim Shady.";
  };

  setTimeout(addGreeting, 0);
  setTimeout(introduceYourself, 500);
  setTimeout(iDontKnowThem, 1000);
  setTimeout(introduceYourself, 1500);
  setTimeout(iDidntHearYou, 2000);
  setTimeout(introduceYourself, 2500);
  setTimeout(gibberish, 3000);
  setTimeout(() => {
    callback(message);
  }, 3500);
};
