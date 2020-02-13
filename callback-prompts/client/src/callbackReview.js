/**
 * The object squareRooter below contains three methods that each take
 * a callback function as an input. Complete the methods using callback
 * functions appropriately to pass data.
 */
const squareRooter = {
  // callback should be passed along from firstCall
  // input array is generated array of magnitudes and digits.
  // if an element's FIRST digit is even add.
  // invoke moreMath
  arraySum: (arr, callback) => {
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
    // given n, generate an array of values corresponding to each
    // magnitude level and digit n: 7134 -> [7000, 100, 30, 4]
    // If n < 1, invoke callback immediately with 'INVALID INPUT'
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

  moreMath: (sum, callback) => {
    // Invoke original callback with result of triple switch():
    // sqrt % 1 === 0 -> 'perfect square root found!'
    // default: 'decimal square root found!'
    switch (Math.sqrt(sum) % 1 === 0) {
      case true:
        callback("perfect square root found!");
        break;
      default:
        callback("decimal square root found");
    }
  }
};

const createMessage = () => {
  let greet = "Hi, my name is ";
  const a = '"Who?"';
  const b = '"What?"';
  const c = "*chikka chikka* Slim Shady.";

  setTimeout(() => {
    greet += b;
    greet += "\n";
  }, 700);

  setTimeout(() => {
    greet += b;
    greet += "\n";
  }, 800);

  setTimeout(() => {
    greet += b;
    greet += "\n";
  }, 400);

  return greet;
};

createMessage();
