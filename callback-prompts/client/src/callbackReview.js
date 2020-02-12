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
  },

  moreMath: (sum, callback) => {
    // Invoke original callback with result of triple switch():
    // sqrt < 0 -> 'no square root found'
    // sqrt % 1 === 0 -> 'perfect square root!'
    // default: 'decimal square found!'
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
