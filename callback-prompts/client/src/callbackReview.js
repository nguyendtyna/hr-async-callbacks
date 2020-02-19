function makeDigitArray(n, callback) {
  // Given n, generate an array of values corresponding to each
  // magnitude level and digit | n: 7134 -> [7000, 100, 30, 4]
  // THREE methods should be
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
  // big chain of crap?
  evenArraySum(digits, num => {
    primeTester(num, str => {
      lastMath(num, str, result => {
        callback(result);
      });
    });
  });
  // could also just be
  evenArraySum(digits, num => {
    primeTester(num, str => {
      lastMath(num, str, callback);
    });
  });
}

function evenArraySum(arr, callback) {
  // Given an input array, find the sum of all numbers
  // that begin with an even number.
  let sum = arr.reduce((sum, num) => {
    if (parseInt(num.toString()[0]) % 2 === 0) {
      return sum + parseInt(num);
    } else {
      return sum;
    }
  }, 0);
  callback(sum);
}

function primeTester(num, callback) {
  if (Math.sqrt(num) % 1 === 0) {
    callback("perfect square root found!");
  } else {
    callback("decimal square root found");
  }
}

function lastMath(num, str, callback) {
  callback(`${num}: ${str}`);
}

///////////////////////////////////////////////////////////////

// File Reader?
// Apparently fs.readFileSync() doesn't take a callback as its
// second argument..

///////////////////////////////////////////////////////////////

const createMessage = callback => {
  console.log(callback);
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
