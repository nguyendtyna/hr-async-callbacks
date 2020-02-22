describe('Introducing Async Callbacks', () => {
  describe('getAll', () => {
    beforeEach(() => {
      sinon.replace($, 'ajax', sinon.fake());
      getAll();
    });
    afterEach(() => {
      sinon.restore();
    });
    it('should be a function', () => {
      expect(getAll).to.be.a('function');
    });
    it('should make an Ajax call', () => {
      expect($.ajax.called).to.equal(true);
    });
    it('should make a GET request', () => {
      expect($.ajax.calledWithMatch({ type: 'GET' })).to.equal(true);
    });
    it('should send the request to the correct endpoint', () => {
      expect(
        $.ajax.calledWithMatch({ url: 'http://127.0.0.1:3000/getAll' }) ||
        $.ajax.calledWithMatch({ url: 'http://localhost:3000/getAll' })
      ).to.equal(true);
    });
    it('should be given the correct success and failure callbacks', () => {
      expect($.ajax.calledWithMatch({ success: getAllCallback })).to.equal(
        true
      );
      expect($.ajax.calledWithMatch({ error: errorLogger })).to.equal(true);
    });
  });

  describe('getAllCB', () => {
    const getAllSpy = sinon.spy();
    getAllCallback(
      JSON.stringify(['Apple', 'pies', 'are', 'delicious']),
      getAllSpy
    );
    it('should invoke the callback', () => {
      expect(getAllCallback).to.be.a('function');
      expect(getAllSpy.called).to.equal(true);
    });
    it('should pass the callback the correctly processed data', () => {
      expect(getAllSpy.args[0][0]).to.be.an('array');
      expect(getAllSpy.args[0][0][0]).to.be.a('string');
    });
  });

  describe('getOne', () => {
    beforeEach(() => {
      sinon.replace($, 'ajax', sinon.fake());
      getOne(0);
    });
    afterEach(() => {
      sinon.restore();
    });
    it('should be a function', () => {
      expect(getOne).to.be.a('function');
    });
    it('should make an Ajax call', () => {
      expect($.ajax.called).to.equal(true);
    });
    it('should make a GET request', () => {
      expect($.ajax.calledWithMatch({ type: 'GET' })).to.equal(true);
    });
    it('should send the request to the correct endpoint', () => {
      expect(
        $.ajax.calledWithMatch({ url: 'http://localhost:3000/getOne' }) ||
        $.ajax.calledWithMatch({ url: 'http://127.0.0.1:3000/getOne' })
      ).to.equal(true);
    });
    it('should send the Ajax request using the input data', () => {
      expect($.ajax.calledWithMatch({ data: { id: 0 } })).to.equal(true);
    });
    it('should use the correct callbacks for success and failure', () => {
      expect($.ajax.calledWithMatch({ success: getOneCallback })).to.equal(
        true
      );
      expect($.ajax.calledWithMatch({ error: errorLogger })).to.equal(true);
    });
  });

  describe('getOneCB', () => {
    const getOneSpy = sinon.spy();
    getOneCallback('{"data":"A message."}', getOneSpy);
    it('should be a function', () => {
      expect(getOneCallback).to.be.a('function');
    });
    it('should invoke the callback', () => {
      expect(getOneSpy.called).to.equal(true);
    });
    it('should pass the callback the correctly processed data', () => {
      expect(getOneSpy.args[0][0]).to.equal('A message.');
    });
  });

  describe('sendMessage', () => {
    beforeEach(() => {
      sinon.replace($, 'ajax', sinon.fake());
      sendMessage('Hi, my name is Tom.');
    });
    afterEach(() => {
      sinon.restore();
    });
    it('should be a function', () => {
      expect(sendMessage).to.be.a('function');
    });
    it('should make an Ajax call', () => {
      expect($.ajax.called).to.equal(true);
    });
    it('should make a POST request with a new message', () => {
      expect($.ajax.calledWithMatch({ type: 'POST' })).to.equal(true);
    });
    it('should send the request to the correct endpoint', () => {
      expect(
        $.ajax.calledWithMatch({ url: 'http:/localhost:3000/send' }) ||
        $.ajax.calledWithMatch({ url: 'http://127.0.0.1:3000/send' })
      ).to.equal(true);
    });
    it('should send the Ajax request using the input data', () => {
      expect($.ajax.args[0][0].data).to.eql({ message: "Hi, my name is Tom." });
    });
    it('should use the correct callbacks for success and failure', () => {
      expect($.ajax.calledWithMatch({ success: sendCallback })).to.equal(true);
      expect($.ajax.calledWithMatch({ error: errorLogger })).to.equal(true);
    });
  });

  describe('sendMessageCB', () => {
    const sendSpy = sinon.spy();
    sendCallback('{"data":{"id":5}}', sendSpy);
    it('should be a function', () => {
      expect(sendCallback).to.be.a('function');
    });
    it('should invoke the callback', () => {
      expect(sendSpy.called).to.equal(true);
    });
    it('should pass the callback the correctly processed data', () => {
      expect(sendSpy.args[0][0]).to.equal(5);
    });
  });

  describe('updateMessage', () => {
    beforeEach(() => {
      sinon.replace($, 'ajax', sinon.fake());
      updateMessage(0, 'I fixed it!');
    });
    afterEach(() => {
      sinon.restore();
    });
    it('should be a function', () => {
      expect(updateMessage).to.be.a('function');
    });
    it('should make an Ajax call', () => {
      expect($.ajax.called).to.equal(true);
    });
    it('should make a PUT request', () => {
      expect($.ajax.calledWithMatch({ type: 'PUT' })).to.equal(true);
    });
    it('should send the request to the correct endpoint', () => {
      expect(
        $.ajax.calledWithMatch({ url: 'http:/localhost:3000/change' }) ||
        $.ajax.calledWithMatch({ url: 'http://127.0.0.1:3000/change' })
      ).to.equal(true);
    });
    it('should send the Ajax request using the input data', () => {
      expect($.ajax.args[0][0].data).to.eql({ id: 0, message: "I fixed it!" });
    });
    it('should use the correct callbacks for success and failure', () => {
      expect($.ajax.calledWithMatch({ success: updateCallback })).to.equal(
        true
      );
      expect($.ajax.calledWithMatch({ error: errorLogger })).to.equal(true);
    });
  });

  describe('updateMessageCB', () => {
    const updateSpy = sinon.spy();
    updateCallback(JSON.stringify({ data: { success: 'Done.' }}), updateSpy);
    it('should be a function', () => {
      expect(updateCallback).to.be.a('function');
    });
    it('should invoke the callback', () => {
      expect(updateSpy.called).to.equal(true);
    });
    it('should pass the callback the correctly processed data', () => {
      expect(updateSpy.args[0][0]).to.equal('Done.');
    });
  });

  describe('deleteMessage', () => {
    beforeEach(() => {
      sinon.replace($, 'ajax', sinon.fake());
      deleteMessage(0);
    });
    afterEach(() => {
      sinon.restore();
    });
    it('should be a function', () => {
      expect(deleteMessage).to.be.a('function');
    });
    it('should make an Ajax call', () => {
      expect($.ajax.called).to.equal(true);
    });
    it('should make a DELETE request for a message', () => {
      expect($.ajax.calledWithMatch({ type: 'DELETE' })).to.equal(true);
    });
    it('should send the request to the correct url', () => {
      expect(
        $.ajax.calledWithMatch({ url: 'http://127.0.0.1:3000/remove' })
      ).to.equal(true);
    });
    it('should send the Ajax request using the input data', () => {
      expect($.ajax.args[0][0].data).to.eql({ id: 0 });
    });
    it('should use the correct callbacks for success and failure', () => {
      expect($.ajax.calledWithMatch({ success: deleteCallback })).to.equal(
        true
      );
      expect($.ajax.calledWithMatch({ error: errorLogger })).to.equal(true);
    });
  });

  describe('deleteMessageCB', () => {
    const deleteSpy = sinon.spy();
    deleteCallback(JSON.stringify({ data: { success: 'Done.' }}), deleteSpy);
    it('should be a function', () => {
      expect(deleteCallback).to.be.a('function');
    });
    it('should invoke the callback', () => {
      expect(deleteSpy.called).to.equal(true);
    });
    it('should pass the callback the correctly processed data', () => {
      expect(deleteSpy.args[0][0]).to.equal('Done.');
    });
  });
});
