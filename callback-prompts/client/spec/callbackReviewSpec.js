describe("Callback Review", () => {
  afterEach(() => {
    sinon.restore();
  });

  describe("findHalfWordLength", () => {
    it("should be a function", () => {
      expect(findHalfWordLength).to.be.a("function");
    });
    it("should accept a callback and invoke it with the result", () => {
      const callback = sinon.spy();
      findHalfWordLength("cheese", callback);
      expect(callback.calledOnce).to.equal(true);
      expect(callback.args[0][0]).to.equal(3);
    });
  });

  describe("createMessage", () => {
    afterEach(() => {
      sinon.restore();
    });

    it("should be a function", () => {
      expect(createMessage).to.be.a("function");
    });

    it("should invoke a callback function", (done) => {
      const callback = sinon.spy();
      createMessage(() => {
        callback();
        try {
          expect(callback.called).to.equal(true);
          done();
        } catch {
          done();
        }
      });
    });

    it("should pass the callback the strings in the right order", (done) => {
      const callback = sinon.spy();
      const expected =
        'Hi! My name is "Who?"\nMy name is "What?"\nMy name is *chikka chikka* Slim Shady.';
      createMessage((message) => {
        callback(message);
        try {
          expect(callback.calledOnceWith(expected)).to.equal(true);
          done();
        } catch {
          done(new Error(`Expected\n"${message}"\nto equal\n"${expected}".`));
        }
      });
    });
  });

  describe("arraySummer", () => {
    it("should be a function", () => {
      expect(arraySummer).to.be.a("function");
    });
    it("should accept and invoke a callback", () => {
      const callback = sinon.spy();
      arraySummer([], callback);
      expect(callback.called).to.equal(true);
    });
    it("should correctly find the alternating sum of the array", () => {
      const callback = sinon.spy();
      arraySummer([7000, 100, 30, 400, -60], callback);
      expect(callback.args[0][0]).to.equal(6470);
    });
  });

  describe("makeDigitArray", () => {
    xit("should be a function", () => {
      expect(makeDigitArray).to.be.a("function");
    });
    xit("should invoke the callback function", () => {
      const callback = sinon.spy();
      makeDigitArray(0, callback);
      expect(callback.calledOnce).to.equal(true);
    });
    xit("should pass the callback function the correctly generated array", () => {
      const callback = sinon.spy();
      makeDigitArray(7134, callback);
      expect(callback.args[0][0]).to.eql([7, 1, 3, 4]);
    });
  });

  describe("pyramidBuilder", () => {
    xit("should be a function", () => {
      expect(pyramidBuilder).to.be.a("function");
    });
    xit("should invoke the callback function", () => {
      const callback = sinon.spy();
      pyramidBuilder(0, callback);
      expect(callback.called).to.equal(true);
    });
    xit("should return an empty string when passed 0", () => {
      const callback = sinon.spy();
      pyramidBuilder(0, callback);
      expect(callback.args[0][0]).to.equal("");
    });
    xit("should handle negative inputs correctly", () => {
      const callback = sinon.spy();
      pyramidBuilder(-5, callback);
      expect(callback.args[0][0]).to.equal("You don't get a pyramid!");
    });
    xit("should pass correctly constructed pyramids to the callback function", () => {
      const callback = sinon.spy();
      pyramidBuilder(5, callback);
      expect(callback.args[0][0]).to.equal("\n0\n00\n000\n0000\n00000");
    });
  });
});
