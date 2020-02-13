describe("Callback Review", () => {
  describe("squareRooter", () => {
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
      squareRooter.makeDigits(0, result => {
        expect(result).to.equal("INVALID INPUT");
      });
      squareRooter.makeDigits(-1, result => {
        expect(result).to.equal("INVALID INPUT");
      });
    });

    it("should calculate ending square root correctly", () => {
      squareRooter.makeDigits(7136, result => {
        expect(result).to.equal("decimal square root found");
      });
      squareRooter.makeDigits(400, result => {
        expect(result).to.equal("perfect square root found!");
      });
      squareRooter.makeDigits(88, result => {
        expect(result).to.equal("decimal square root found");
      });
    });
  });

  describe("createMessage", () => {
    it("should be a function", () => {
      expect(createMessage).to.be.a("function");
    });
    it("should return the strings in the right order", () => {
      createMessage(result => {
        expect(result).to.be.equal(
          'Hi! my name is "Who?"\nmy name is "What?"\nmy name is *chikka chikka* Slim Shady.'
        );
      });
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
