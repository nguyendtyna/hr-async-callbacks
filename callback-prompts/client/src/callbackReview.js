const greet = 'Hi, my name is ';
const a = '"Who?"';
const b = '"What?"';
const c = '*chikka chikka* Slim Shady.';

const createMessage = () => {
  setTimeout(() => {
    console.log(greet + b);
  }, 700);

  setTimeout(() => {
    console.log(greet + c);
  }, 800);

  setTimeout(() => {
    console.log(greet + a);
  }, 400);
};

createMessage();
