xdescribe("Callback Review", () => {
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
        expect(primes).to.equal([2, 3463]);
      });
      primeFactors(6926, callback);
      expect(callback.calledOnce).to.equal(true);
    });
  });

  describe("createMessage", () => {
    it("should invoke a callback function", () => {
      const callback = sinon.spy();
      createMessage(callback);
      // This setTimeout certainly doesn't feel the right way to do this
      setTimeout(() => {
        expect(callback.called).to.equal(true);
      }, 5000);
    });

    it("should be a function", () => {
      expect(createMessage).to.be.a("function");
    });

    // it("should return the strings in the right order", () => {
    //   createMessage(result => {
    //     expect(result).to.equal(
    //       'Hi, my name is "Who?"\nHi, my name is "What?"\nHi, my name is *chikka chikka* Slim Shady.'
    //     );
    //   });
    // });
  });
});
