var expect = chai.expect;
var should = chai.should();

// describe('Compare Numbers', function() {

// it('1 should equal 1', function() {
//   expect(1).to.equal(1);
// });

// });



var tests = [
  { description: "commas are rotated properly",          run: generateDummyTest() },
  { description: "exclamation points stand up straight", run: generateDummyTest() },
  { description: "run-on sentences don't run forever",   run: generateDummyTest() },
  { description: "question marks curl down, not up",     run: generateDummyTest() },
  { description: "semicolons are adequately waterproof", run: generateDummyTest() },
  { description: "capital letters can do yoga",          run: generateDummyTest() }
];



describe('Running grammar test, t[0]', function () {
  it("commas are rotated properly", function(done) {
      
     return getResult(tests[0].run).then(function(item){return item}).should.eventually.equal(true);
    
  });
})

describe('Running grammar tests, t[1]', function () {
  it("exclamation points stand up straight", function(done) {
    expect(tests[1].run(function(item){return item;})).should.eventually.equal(true).notify(done);
    
  });
})

describe('Running grammar tests, t[2]', function () {
  it("run-on sentences don't run forever", function(done) {
    expect(tests[2].run(function(item){return item;})).should.eventually.equal(true).notify(done);
    
  });
})

describe('Running grammar tests, t[3]', function () {
  it("question marks curl down, not up", function(done) {
    expect(tests[3].run(function(item){return item;})).should.eventually.equal(true).notify(done);
    
  });
})

describe('Running grammar tests, t[4]', function () {
  it("semicolons are adequately waterproof", function(done) {
    expect(tests[4].run(function(item){return item;})).should.eventually.equal(true).notify(done);
    
  });
})

describe('Running grammar tests, t[5]', function () {
  it("capital letters can do yoga", function(done) {
    expect(tests[5].run(function(item){return item;})).should.eventually.equal(true).notify(done);
    
  });
})