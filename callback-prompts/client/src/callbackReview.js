/**
 * The object squareRooter below contains three methods that each take
 * a callback function as an input. Complete the methods using callback
 * functions appropriately to pass data.
 */
const squareRooter = {
  arraySum: (arr, callback) => {
    // Given an input array, find the sum of all numbers
    // that begin with an even number. The final sum should be
    // given to a sibling method...
    squareRooter.moreMath(
      arr.reduce((sum, num) => {
        if (parseInt(num.toString()[0]) % 2 === 0) {
          return sum + parseInt(num);
        } else {
          return sum;
        }
      }, 0),
      callback
    );
  },

  makeDigits: (n, callback) => {
    // Given n, generate an array of values corresponding to each
    // magnitude level and digit | n: 7134 -> [7000, 100, 30, 4]
    // The resulting array should be given to a sibling method...
    // If n < 1, 'INVALID INPUT' should be passed to the callback
    // function immediately
    if (n < 1) {
      callback("INVALID INPUT");
      return;
    }
    const digits = [];
    while (n > 0) {
      if (n < 10) {
        digits.push(n);
        n = -1;
      } else {
        digits.push(n % 10);
        n = Math.floor(n / 10);
      }
    }
    squareRooter.arraySum(
      digits.map((dig, i) => dig * 10 ** i).reverse(),
      callback
    );
  },

  moreMath: (num, callback) => {
    // Given a number, use the callback function provided to
    // pass a boolean saying whether or not the number has a
    // perfect square root.
    if (Math.sqrt(num) % 1 === 0) {
      callback("perfect square root found!");
    } else {
      callback("decimal square root found");
    }
  }
};

///////////////////////////////////////////////////////////////

// File Reader?
// Apparently fs.readFileSync() doesn't take a callback as its
// second argument..

///////////////////////////////////////////////////////////////

const createMessage = callback => {
  // I don't really know how to make this a good exercise.
  // Some sort of fill in the blank type thing?
  // The asynchronous nature, of course, destroys any explicit
  // return statements.
  let greet = "Hi! ";
  let name = "my name is ";
  const a = '"Who?"\n';
  const b = '"What?"\n';
  const c = "*chikka chikka* Slim Shady.";
  setTimeout(() => {
    // I
    greet += name;
    setTimeout(() => {
      // L
      greet += a;
      setTimeout(() => {
        // O
        greet += name;
        setTimeout(() => {
          // V
          greet += b;
          setTimeout(() => {
            // E
            greet += name;
            setTimeout(() => {
              // C
              greet += c;
              callback(greet); // A
            }, 000); // L
          }, 000); // L
        }, 000); // B
      }, 000); // A
    }, 000); // C
  }, 000); // K
}; // S

function createMessageCallback(rabbit) {
  console.log(rabbit);
}

createMessage(createMessageCallback);
