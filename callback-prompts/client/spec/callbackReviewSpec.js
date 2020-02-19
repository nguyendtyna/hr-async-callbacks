describe("Callback Review", () => {
  describe("makeDigitArray", () => {
    it("should be a function", () => {
      expect(makeDigitArray).to.be.a("function");
    });
    it("should invoke a callback function", () => {
      const callback = sinon.spy();
      makeDigitArray(0, callback);
      expect(callback.called).to.equal(true);
    });
    it("should generate the correct digit array", () => {
      expect(JSON.stringify(makeDigitArray(7134, () => {}))).to.equal(
        JSON.stringify([7000, 100, 30, 4])
      );
    });
  });

  describe("evenArraySum", () => {
    it("should be a function", () => {
      expect(evenArraySum).to.be.a("function");
    });
    it("should invoke a callback function", () => {
      const callback = sinon.spy();
      evenArraySum([], callback);
      expect(callback.called).to.equal(true);
    });
    it("should find the sum of numbers with an even first digit", () => {
      const arr = [1, 20, 60, 5000];
      evenArraySum(arr, sum => {
        expect(sum).to.equal(80);
      });
    });
  });

  describe("primeTester", () => {
    it("should be a function", () => {
      expect(primeTester).to.be.a("function");
    });
    it("should invoke a callback function", () => {
      const callback = sinon.spy();
      primeTester(0, callback);
      expect(callback.called).to.equal(true);
    });
    it("should correctly determine perfect square roots", () => {
      const perfectRoots = [4, 9, 16, 25, 49];
      perfectRoots.forEach(num => {
        primeTester(num, output => {
          expect(output).to.equal("perfect square root found!");
        });
      });
    });
    it("should correctly determine decimal square roots", () => {
      const decimalRoots = [2, 5, 10, 99, 123];
      decimalRoots.forEach(num => {
        primeTester(num, output => {
          expect(output).to.equal("decimal square root found");
        });
      });
    });
  });

  describe("lastMath", () => {
    it("should be a function", () => {
      expect(lastMath).to.be.a("function");
    });
    it("should invoke a callback function", () => {
      const callback = sinon.spy();
      lastMath(0, "", callback);
      expect(callback.called).to.equal(true);
    });
    it("should format the final output correctly", () => {
      lastMath("", "", result => {
        expect(result).to.equal(": ");
      });
    });
  });

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

  it("should return the strings in the right order", () => {
    createMessage(result => {
      expect(result).to.equal(
        'Hi, my name is "Who?"\nHi, my name is "What?"\nHi, my name is *chikka chikka* Slim Shady.'
      );
    });
  });
});
