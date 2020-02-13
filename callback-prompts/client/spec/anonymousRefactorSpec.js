describe('Anonymous Refactor', () => {
  describe('getAllAnon', () => {
    afterEach(() => {
      sinon.restore();
    });

    it('should be a function', () => {
      expect(getAllAnon).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(getAllAnon.toString()).to.contain('$.ajax(');
    });
    it('should invoke the success callback on a successful GET request', () => {
      const getAllSpy = sinon.spy();
      getAllAnon(getAllSpy);
      expect(getAllSpy.called).to.equal(true);
    });
    it('should pass the callback the correctly processed data', () => {
      const getAllSpy = sinon.spy();
      getAllAnon(getAllSpy);
      console.log(getAllSpy.args);
      expect(getAllSpy.args[0]).to.be.an('array');
    });
  });

  describe('getOneAnon', () => {
    afterEach(() => {
      sinon.restore();
    });

    it('should be a function', () => {
      expect(getOneAnon).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(getOneAnon.toString()).to.contain('$.ajax(');
    });
    it('should send an id as a query parameter', () => {
      sinon.replace($, 'ajax', sinon.fake());
      getOneAnon(0, () => {});
      expect($.ajax.calledWithMatch({ data: '{"id":0}' })).to.equal(true);
    });
    it('should invoke the passed in callback on a successful GET request', () => {
      const getOneSpy = sinon.spy();
      getOneAnon(0, getOneSpy);
      expect(getOneSpy.called).to.equal(true);
    });
    it('should pass the callback the correctly processed data', () => {
      const getOneSpy = sinon.spy();
      getOneAnon(0, getOneSpy);
      console.log('The test Args', getOneSpy.args);
      expect(getOneSpy.args[0]).to.be.a('string');
      expect(getOneSpy.args[0]).to.equal(
        'Hey-you-found-me!-Oh-no,-it-seems-the-message-cache-weirdly-manipulates-messages!'
      );
    });
  });

  describe('sendMessageAnon', () => {
    afterEach(() => {
      sinon.restore();
    });

    it('should be a function', () => {
      expect(sendMessageAnon).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(sendMessageAnon.toString()).to.contain('$.ajax(');
    });
    it('should send data containing the new message', () => {
      sinon.replace($, 'ajax', sinon.fake());
      sendMessageAnon('Hi', () => {});
      expect($.ajax.calledWithMatch({ data: '{"message":"Hi"}' })).to.equal(true);
    });
    it('should invoke the passed in callback on a successful POST request', () => {
      const sendSpy = sinon.spy();
      sendMessageAnon("Hey, how's it going?", sendSpy);
      expect(sendSpy.called).to.equal(true);
    });
    it('should pass the callback the correctly processed data', () => {
      const sendSpy = sinon.spy();
      sendMessageAnon("Hey, how's it going?", sendSpy);
      expect(sendSpy.called).to.equal(true);
      expect(sendSpy.args[0].match(/d/)).to.equal(true);
    });
  });

  describe('updateMessageAnon', () => {
    afterEach(() => {
      sinon.restore();
    });

    it('should be a function', () => {
      expect(updateMessageAnon).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(updateMessageAnon.toString()).to.contain('$.ajax(');
    });
    it('should send data containing the id and new message as parameters', () => {
      //
    });
    it('should invoke the passed in callback on a successful PUT request', () => {
      //
    });
    it('should pass the callback the correctly processed data', () => {
      //
    });
  });

  describe('deleteMessageAnon', () => {
    afterEach(() => {
      sinon.restore();
    });

    it('should be a function', () => {
      expect(deleteMessageAnon).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(deleteMessageAnon.toString()).to.contain('$.ajax(');
    });
    it('should send data containing the deletion target id', () => {
      //
    });
    it('should invoke the passed in callback on a successful DELETE request', () => {
      //
    });
    it('should pass the callback the correctly processed data', () => {
      //
    });
  });
});
