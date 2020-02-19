describe("Callback Review", () => {
  describe("makeDigitArray", () => {
    it("should be a function", () => {
      expect(makeDigitArray).to.be.a("function");
    });
  });

  describe("evenArraySum", () => {
    it("should be a function", () => {
      expect(evenArraySum).to.be.a("function");
    });
  });

  describe("primeTester", () => {
    it("should be a function", () => {
      expect(primeTester).to.be.a("function");
    });
  });

  describe("lastMath", () => {
    it("should be a function", () => {
      expect(lastMath).to.be.a("function");
    });
  });

  describe("createMessage", () => {
    it("should invoke a callback function", () => {
      const callback = sinon.spy();
      createMessage(callback);
      expect(callback.called).to.equal(true);
    });

    it("should be a function", () => {
      expect(createMessage).to.be.a("function");
    });

    it("should return the strings in the right order", () => {
      createMessage(result => {
        expect(result).to.equal(
          'Hi, my name is "Who?"\nHi, my name is "What?"\nHi, my name is *chikka chikka* Slim Shady.'
        );
      });
    });
  });
});
