describe('Introducing Async Callbacks', () => {
  it('should be testing tests', () => {
    expect(2).to.exist;
    expect(() => {}).to.be.a('function');
  });

  describe('getAll', () => {
    it('should be a function', () => {
      expect(getAll).to.be.a('function');
    });
  });

  describe('getOne', () => {
    it('should be a function', () => {
      expect(getOne).to.be.a('function');
    });
  });

  describe('sendMessage', () => {
    it('should be a function', () => {
      expect(sendMessage).to.be.a('function');
    });
  });

  describe('updateMessage', () => {
    it('should be a function', () => {
      expect(updateMessage).to.be.a('function');
    });
  });

  describe('deleteMessage', () => {
    it('should be a function', () => {
      expect(deleteMessage).to.be.a('function');
    });
  });
});
