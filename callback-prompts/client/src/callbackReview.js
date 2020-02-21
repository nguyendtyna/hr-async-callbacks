// Given n, generate an array of values corresponding to each
// magnitude level and digit | n: 7134 -> [7000, 100, 30, 4]
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
  // this callback will be arraySum
  callback(digits.reverse());
}

function arraySummer(arr) {
  // Given an input array, find the sum of elements in the following manner:
  // ADD elements found at even indices
  // SUBTRACT elements found at odd indices
  // EX: arr = [7000, 100, 30, 4] -> (7000 - 100 + 30 - 4) = 6926
  let sum = arr.reduce((sum, num, i) => {
    return i % 2 ? sum - num : sum + num;
  }, 0);
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
