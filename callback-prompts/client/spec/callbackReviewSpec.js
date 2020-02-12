describe("Callback Review", () => {
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
