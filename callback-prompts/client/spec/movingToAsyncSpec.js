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
      getOne();
      expect(getOne).to.be.a('function');
    });

    it('makes a GET request for todo items', function() {
      sinon.replace(jQuery, 'ajax', sinon.fake());

      getTodos(42, sinon.fake());

      assert(jQuery.ajax.calledWithMatch({ url: '/todo/42/items' }));
    });
  });

  // const nthOccurrence = (str, char, n) => {
  //   let count = 0;
  //   let i = 0;
  //   while (count !== n && i < str.length) {
  //     if (str[i] === char) {
  //       count++;
  //     }
  //     i++;
  //   }

  //   if (count === n) {
  //     return i - 1;
  //   } else {
  //     return null;
  //   }
  // };

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
