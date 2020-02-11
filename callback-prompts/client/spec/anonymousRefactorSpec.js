describe('Anonymous Refactor', () => {
  describe('getAllAnon', () => {
    it('should be a function', () => {
      expect(getAllAnon).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(getAllAnon.toString()).to.contain('$.ajax(');
    });
    it('should accept a callback as a parameter', () => {
      //
    });
    it('should have a success callback', () => {
      //
    });
    it('should invoke the success callback on a successful GET request', () => {
      //
    });
  });

  describe('getOneAnon', () => {
    it('should be a function', () => {
      expect(getOneAnon).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(getOneAnon.toString()).to.contain('$.ajax(');
    });
    it('should accept an id and a callback as parameters', () => {
      //
    });
    it('should have a success callback', () => {
      //
    });
    it('should invoke the success callback on a successful GET request', () => {
      //
    });
  });

  describe('sendMessageAnon', () => {
    it('should be a function', () => {
      expect(sendMessageAnon).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(sendMessageAnon.toString()).to.contain('$.ajax(');
    });
    it('should accept a message and a callback as parameters', () => {
      //
    });
    it('should have a success callback', () => {
      //
    });
    it('should invoke the success callback on a successful POST request', () => {
      //
    });
  });

  describe('updateMessageAnon', () => {
    it('should be a function', () => {
      expect(updateMessageAnon).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(updateMessageAnon.toString()).to.contain('$.ajax(');
    });
    it('should accept an id, message and callback as parameters', () => {
      //
    });
    it('should have a success callback', () => {
      //
    });
    it('should invoke the success callback on a successful PUT request', () => {
      //
    });
  });

  describe('deleteMessageAnon', () => {
    it('should be a function', () => {
      expect(deleteMessageAnon).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(deleteMessageAnon.toString()).to.contain('$.ajax(');
    });
    it('should accept an id and callback as parameters', () => {
      //
    });
    it('should have a success callback', () => {
      //
    });
    it('should invoke the success callback on a successful DELETE request', () => {
      //
    });
  });
});
