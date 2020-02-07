describe('Introducing Async Callbacks', () => {
  describe('getAll', () => {
    it('should be a function', () => {
      expect(getAll).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(getAll.toString()).to.contain('$.ajax(');
    });
    it('should have a success callback', () => {
      expect(/* FILL ME IN */).to.be.a('function');
    });

    it('makes a GET request for all messages', function() {
      expect(/* FILL ME IN */).to.equal(false);
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
      expect(/* FILL ME IN */).to.be.a('function');
    });
    it('makes a GET request for one message', function() {
      expect(/* FILL ME IN */).to.equal(false);
    });
  });

  describe('sendMessage', () => {
    it('should be a function', () => {
      expect(sendMessage).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(sendMessage.toString()).to.contain('$.ajax(');
    });
    it('should have a success callback', () => {
      expect(/* FILL ME IN */).to.be.a('function');
    });
    it('makes a POST request with a new message', function() {
      expect(/* FILL ME IN */).to.equal(false);
    });
  });

  describe('updateMessage', () => {
    it('should be a function', () => {
      expect(updateMessage).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(updateMessage.toString()).to.contain('$.ajax(');
    });
    it('should have a success callback', () => {
      expect(/* FILL ME IN */).to.be.a('function');
    });
    it('makes a PUT request with a new message and target ID', function() {
      expect(/* FILL ME IN */).to.equal(false);
    });
  });

  describe('deleteMessage', () => {
    it('should be a function', () => {
      expect(deleteMessage).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(deleteMessage.toString()).to.contain('$.ajax(');
    });
    it('should have a success callback', () => {
      expect(/* FILL ME IN */).to.be.a('function');
    });
    it('makes a DELETE request to remove the message at a specific ID', function() {
      expect(/* FILL ME IN */).to.equal(false);
    });
  });

  describe('Callbacks', () => {
    describe('getAll', () => {
      it('should be a function', () => {
        expect(getAllCallback).to.be.a('function');
      });
      it('should accept a callback as a parameter', () => {
        //
      });
    });

    describe('getOne', () => {
      it('should be a function', () => {
        expect(getOneCallback).to.be.a('function');
      });
      it('should accept a callback as a parameter', () => {
        //
      });
      it('should invoke the callback', () => {
        //
      });
    });

    describe('sendMessage', () => {
      it('should be a function', () => {
        expect(sendCallback).to.be.a('function');
      });
      it('should accept a message and a callback as parameters', () => {
        //
      });
      it('should invoke the callback', () => {
        //
      });
    });

    describe('updateMessage', () => {
      it('should be a function', () => {
        expect(updateCallback).to.be.a('function');
      });
      it('should accept an id, message and callback as parameters', () => {
        //
      });
      it('should invoke the callback', () => {
        //
      });
    });

    describe('deleteMessage', () => {
      it('should be a function', () => {
        expect(deleteCallback).to.be.a('function');
      });
      it('should accept an id and a callback as parameters', () => {
        //
      });
      it('should invoke the callback', () => {
        //
      });
    });
  });
});
