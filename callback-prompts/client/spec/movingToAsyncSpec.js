window.expect = chai.expect;

describe('Introducing Async Callbacks', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('getAll', () => {
    sinon.replace($, 'ajax', sinon.fake());
    getAll();

    it('should be a function', () => {
      expect(getAll).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(getAll.toString()).to.contain('$.ajax(');
    });
    it('should make a GET request for all messages', () => {
      expect($.ajax.calledWithMatch({ type: 'GET' })).to.equal(true);
    });
    it('should send the request to the correct url', () => {
      expect(
        $.ajax.calledWithMatch({ url: 'http://127.0.0.1:3000/getAll' })
      ).to.equal(true);
    });
    it('should use the correct callback for success', () => {
      expect($.ajax.calledWithMatch({ success: getAllCallback })).to.eql(true);
    });
  });

  describe('getAllCB', () => {
    it('should be a function', () => {
      expect(getAllCallback).to.be.a('function');
    });
    it('should invoke the callback with processed data', () => {
      //
    });
  });

  describe('getOne', () => {
    getOne(0);

    it('should be a function', () => {
      expect(getOne).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(getOne.toString()).to.contain('$.ajax(');
    });
    it('should make a GET request for one message', () => {
      expect($.ajax.calledWithMatch({ type: 'GET' })).to.equal(true);
    });
    it('should send the request to the correct endpoint', () => {
      expect($.ajax.calledWithMatch({ url: 'http://127.0.0.1/getOne' }));
    });
  });

  describe('getOneCB', () => {
    it('should be a function', () => {
      expect(getOneCallback).to.be.a('function');
    });
    it('should accept data and a callback as parameters', () => {
      //
    });
    it('should invoke the callback with processed data', () => {
      //
    });
  });

  describe('sendMessage', () => {
    sendMessage('Hi, my name is Tom.');

    it('should be a function', () => {
      expect(sendMessage).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(sendMessage.toString()).to.contain('$.ajax(');
    });
    it('should make a POST request with a new message', () => {
      expect($.ajax.calledWithMatch({ type: 'POST' })).to.equal(true);
    });
    it('should send the request to the correct endpoint', () => {
      expect(
        $.ajax.calledWithMatch({ url: 'http://127.0.0.1:3000/send' })
      ).to.equal(true);
    });
  });

  describe('sendMessageCB', () => {
    it('should be a function', () => {
      expect(sendCallback).to.be.a('function');
    });
    it('should accept data and a callback as parameters', () => {
      //
    });
    it('should invoke the callback with processed data', () => {
      //
    });
  });

  describe('updateMessage', () => {
    updateMessage(0, 'I fixed it!');

    it('should be a function', () => {
      expect(updateMessage).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(updateMessage.toString()).to.contain('$.ajax(');
    });
    it('makes a PUT request with a new message and target ID', () => {
      expect($.ajax.calledWithMatch({ type: 'PUT' })).to.equal(true);
    });
  });

  describe('updateMessageCB', () => {
    it('should be a function', () => {
      expect(updateCallback).to.be.a('function');
    });
    it('should accept data and a callback as parameters', () => {
      //
    });
    it('should invoke the callback with processed data', () => {
      //
    });
  });

  describe('deleteMessage', () => {
    deleteMessage(0);

    it('should be a function', () => {
      expect(deleteMessage).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(deleteMessage.toString()).to.contain('$.ajax(');
    });
    it('should make a DELETE request for a message at a specific ID', () => {
      expect($.ajax.calledWithMatch({ type: 'DELETE' })).to.equal(true);
    });
    it('should send the request to the correct url', () => {
      expect(
        $.ajax.calledWithMatch({ url: 'http://127.0.0.1:3000/getAll' })
      ).to.equal(true);
    });
    it('should use the correct callback for the success case', () => {
      expect($.ajax.calledWithMatch({ success: getAllCallback })).to.eql(true);
    });
  });

  describe('deleteMessageCB', () => {
    it('should be a function', () => {
      expect(deleteCallback).to.be.a('function');
    });
    it('should accept data and a callback as parameters', () => {
      //
    });
    it('should invoke the callback with processed data', () => {
      //
    });
  });
});
