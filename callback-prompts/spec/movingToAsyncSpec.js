describe('Introducing Async Callbacks', () => {
  // var sandbox = sinon.sandbox.create();

  // beforeEach(() => {
  //   sandbox.spy($, 'ajax');
  // });

  // afterEach(() => {
  //   sandbox.restore();
  // });

  describe('getAll', () => {
    const getAllTest = sinon.spy(getAll);
    console.log(getAllTest);
    getAllTest();
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
    it('should have a sucess callback', () => {
      expect(getOne).to.be.a('function');
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
});
