describe('Introducing Async Callbacks', () => {
  describe('getAll', () => {
    it('should be a function', () => {
      expect(getAll).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(getAll.toString()).to.contain('$.ajax(');
    });
  });

  describe('getOne', () => {
    it('should be a function', () => {
      expect(getOne).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(getOne.toString()).to.contain('$.ajax(');
    });
    it('should have a success callback', () => {
      expect(getOne).to.be.a('function');
    });

    it('makes a GET request for one message', function() {
      sendMessage()
      getOne()
      expect()
    });
  });

  describe('sendMessage', () => {
    it('should be a function', () => {
      expect(sendMessage).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(sendMessage.toString()).to.contain('$.ajax(');
    });
  });

  describe('updateMessage', () => {
    it('should be a function', () => {
      expect(updateMessage).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(updateMessage.toString()).to.contain('$.ajax(');
    });
  });

  describe('deleteMessage', () => {
    it('should be a function', () => {
      expect(deleteMessage).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(deleteMessage.toString()).to.contain('$.ajax(');
    });
  });

  describe('Callbacks', () => {
    describe('getAll', () => {
      it('should be a function', () => {
        expect(getAllCallback).to.be.a('function');
      });
    });

    describe('getOne', () => {
      it('should be a function', () => {
        expect(getOneCallback).to.be.a('function');
      });
    });

    describe('sendMessage', () => {
      it('should be a function', () => {
        expect(sendCallback).to.be.a('function');
      });
    });

    describe('updateMessage', () => {
      it('should be a function', () => {
        expect(updateCallback).to.be.a('function');
      });
    });

    describe('deleteMessage', () => {
      it('should be a function', () => {
        expect(deleteCallback).to.be.a('function');
      });
    });
  });
});
