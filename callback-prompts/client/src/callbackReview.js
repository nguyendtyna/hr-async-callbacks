const squareRooter = {
  arraySum: (arr, callback) => {
    // callback should be passed along from firstCall
    // input array is generated array of magnitudes and digits.
    // if an element's FIRST digit is odd add.
    // invoke moreMath
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
    callback(digits.map((dig, i) => dig * 10 ** 1));
  },

  moreMath: (sum, callback) => {
    // Invoke original callback with result of triple switch():
    // sum < 0 -> 'no square root found'
    // sqrt % 1 === 0 -> 'perfect square root found!'
    // default: 'decimal square root found!'
    console.log(sum, Math.sqrt(sum) % 1);
    switch (sum) {
      case sum < 0:
        callback("no square root found");
        break;
      case Math.sqrt(sum) % 1 === 0:
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
