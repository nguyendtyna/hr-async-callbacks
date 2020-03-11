describe("Callback Review", () => {
  describe("makeDigitArray", () => {
    it("should be a function", () => {
      expect(makeDigitArray).to.be.a("function");
    });
    it("should invoke thek callback function", () => {
      const callback = sinon.spy();
      makeDigitArray(0, callback);
      expect(callback.calledOnce).to.equal(true);
    });
    it("should invoke the callback function with the correctly generated array", () => {
      const callback = sinon.spy(arraySummer);
      makeDigitArray(7134, callback);
      expect(callback.calledOnceWith([7000, 100, 30, 4])).to.equal(true);
    });
  });

  describe("arraySummer", () => {
    it("should be a function", () => {
      expect(arraySummer).to.be.a("function");
    });
    it("should correctly find the alternating sum of the array", () => {
      arraySummer([7000, 100, 30, 4]);
      expect(window.sum).to.equal(6926);
    });
    it("should utilize a callback function to generate the correct output", () => {
      arraySummer([7000, 100, 30, 4]);
      expect(window.mappedNums).to.eql([
        "The square of 2 is 4",
        "The square of 3463 is 11992369"
      ]);
    });
  });

  describe("primeFactors", () => {
    it("should be a function", () => {
      expect(primeFactors).to.be.a("function");
    });
    it("should invoke the callback function", () => {
      const callback = sinon.spy();
      primeFactors(0, callback);
      expect(callback.calledOnce).to.equal(true);
    });
    it("should pass an array of prime numbers to the callback function", () => {
      const callback = sinon.spy(primes => {
        expect(primes).to.eql([2, 3463]);
      });
      primeFactors(6926, callback);
      expect(callback.calledOnce).to.equal(true);
    });
  });

  describe("createMessage", () => {
    it("should invoke a callback function", () => {
      const callback = sinon.spy();
      const clock = sinon.useFakeTimers();
      createMessage(callback);
      clock.tick(5000);
      expect(callback.called).to.equal(true);
      clock.restore();
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
