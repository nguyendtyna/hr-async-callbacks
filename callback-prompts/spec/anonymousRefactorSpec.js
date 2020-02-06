describe('Anonymous Refactor', () => {

  describe('getAllAnon', () => {
    it('should be a function', () => {
      expect(getAllAnon).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(getAllAnon.toString()).to.contain('$.ajax(');
    });
  });

  describe('getOneAnon', () => {
    it('should be a function', () => {
      expect(getOneAnon).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(getOneAnon.toString()).to.contain('$.ajax(');
    });
  });

  describe('sendMessageAnon', () => {
    it('should be a function', () => {
      expect(sendMessageAnon).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(sendMessageAnon.toString()).to.contain('$.ajax(');
    });
  });

  describe('updateMessageAnon', () => {
    it('should be a function', () => {
      expect(updateMessageAnon).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(updateMessageAnon.toString()).to.contain('$.ajax(');
    });
  });

  describe('deleteMessageAnon', () => {
    it('should be a function', () => {
      expect(deleteMessageAnon).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(deleteMessageAnon.toString()).to.contain('$.ajax(');
    });
  });
});