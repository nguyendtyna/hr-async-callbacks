const primeTester = {
  makeDigits: (n, callback) => {
    // expect callback to be passed at least TWICE and then
    // given the final data to pass back into the test sweet
    // given n, generate an array of values corresponding to each
    // magnitude level and digit n: 7134 -> [7000, 100, 30, 4]
  },

  arraySum: (arr, callback) => {
    // callback should be passed along from firstCall
    // input array is generated array of magnitudes and digits.
    // if an element's FIRST digit is odd/even add/subtract to sum.
    // invoke final
  },

  moreMath: (sum, callback) => {
    // simply invoke final callback with sum % 7;
    // orrrrrr is it prime or not?
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
