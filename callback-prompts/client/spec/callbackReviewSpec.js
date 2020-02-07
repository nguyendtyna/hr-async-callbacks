describe('Callback Review', () => {
  describe('createMessage', () => {
    it('should be a function', () => {
      expect(createMessage).to.be.a('function');
    });
  });

  describe('otherStuff', () => {
    it('should have more tests, Tom, goddamnit', () => {
      expect('Tom').to.equal('better');
    });
    
    it('step your game up', () => {
      expect('tests').to.equal('here');
    });
  });
});