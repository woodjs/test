fs = require('fs');
describe('File', function(){
  describe('#readFile()', function(){
    it.skip('should read test.l111s without error', function(done){
      fs.readFile('test.ls', function(err){
        if (err) throw err;
        done();
      });
    })
    it('should read test.js without error', function(){
    })
  })
})