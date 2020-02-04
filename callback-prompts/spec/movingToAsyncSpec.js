const mToA = sinon.spy(mToA);

describe('Introducing Async Callbacks', () => {
  it('should be testing tests', () => {
    expect(2).to.exist;
    expect(() => {}).to.be.a('function');
  });
  
  describe('getAll', () => {
    it('should be a function', () => {
      expect(mToA.getAll).to.be.a('function');
    });
  });
});
