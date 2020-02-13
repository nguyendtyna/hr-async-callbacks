describe("Callback Review", () => {
  describe("primeTester", () => {
    it("should have a makeDigits function", () => {
      expect(squareRooter.makeDigits).to.be.a("function");
    });
    it("should have an arraySum function", () => {
      expect(squareRooter.arraySum).to.be.a("function");
    });
    it("should have a moreMath function", () => {
      expect(squareRooter.moreMath).to.be.a("function");
    });

    it("should appropriately handle invalid inputs", () => {
      let actual = null;
      squareRooter.makeDigits(0, result => {
        actual = result;
      });
      expect(actual).to.equal("INVALID INPUT");
      actual = null;
      squareRooter.makeDigits(-1, result => {
        actual = result;
      });
      expect(actual).to.equal("INVALID INPUT");
    });

    it("should calculate ending square root correctly", () => {
      let actual = null;
      //
      squareRooter.moreMath(16, result => {
        actual = result;
      });
      expect(actual).to.equal("perfect square root found!");
      //
      // actual = null;
      // squareRooter.makeDigits(7134, result => {
      //   actual = result;
      // });
      // expect(actual).to.equal("no square root found");
      // actual = null;
      // squareRooter.makeDigits(400, result => {
      //   actual = result;
      // });
      // expect(actual).to.equal("perfect square root found!");
      // actual = null;
      // squareRooter.makeDigits(88, result => {
      //   actual = result;
      // });
      // expect(actual).to.equal("decimal square root found!");
    });
  });

  describe("createMessage", () => {
    it("should be a function", () => {
      expect(createMessage).to.be.a("function");
    });
    it("should return the strings in the right order", () => {
      expect(createMessage()).to.equal(
        'Hi, my name is "Who?"\nHi, my name is "What?"\nHi, my name is *chikka chikka* Slim Shady.'
      );
    });
  });

  describe("otherStuff", () => {
    it("should have more tests, Tom, goddamnit", () => {
      expect("Tom").to.equal("better");
    });

    it("step your game up", () => {
      expect("tests").to.equal("here");
    });
  });
});
