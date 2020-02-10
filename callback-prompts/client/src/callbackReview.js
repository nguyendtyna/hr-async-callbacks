
const createMessage = () => {
  let greet = 'Hi, my name is ';
  const a = '"Who?"';
  const b = '"What?"';
  const c = '*chikka chikka* Slim Shady.';
  
  setTimeout(() => {
    greet += b;
    greet += '\n';
  }, 700);

  setTimeout(() => {
    greet += b;
    greet += '\n';
  }, 800);

  setTimeout(() => {
    greet += b;
    greet += '\n';
  }, 400);

  return greet;
};

// setTimeout(() => {
//   console.log(createMessage());
// }, 1000);
