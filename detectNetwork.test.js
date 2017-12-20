/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail. 
//   // To read more about mocha, visit mochajs.org

//   // Once you've read and understood this section, please comment it out. 
//   // You will not be able to proceed with a failing test. 

//   it('Throws an error so it fails', function() {
//     throw new Error('Delete me!');
//   });

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
   
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      // throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('3934567890123') !== 'Diner\'s Club') {
      // throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = function(actual) {
    if(!actual) {
      throw new Error('Test failed');
    }
  };
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  // var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;

  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011345694325092')).to.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011345793821456909')).to.equal('Discover');
  });

  it('has a prefix of 644 and a length of 16', function() {
    expect(detectNetwork('6441345694325092')).to.equal('Discover');
  });

  it('has a prefix of 645 and a length of 16', function() {
    expect(detectNetwork('6451345694325092')).to.equal('Discover');
  });

  it('has a prefix of 646 and a length of 16', function() {
    expect(detectNetwork('6461345694325092')).to.equal('Discover');
  });

  it('has a prefix of 647 and a length of 16', function() {
    expect(detectNetwork('6471345694325092')).to.equal('Discover');
  });

  it('has a prefix of 648 and a length of 16', function() {
    expect(detectNetwork('6481345694325092')).to.equal('Discover');
  });

  it('has a prefix of 649 and a length of 16', function() {
    expect(detectNetwork('6491345694325092')).to.equal('Discover');
  });

  it('has a prefix of 644 and a length of 19', function() {
    expect(detectNetwork('6441345694325092909')).to.equal('Discover');
  });

  it('has a prefix of 645 and a length of 19', function() {
    expect(detectNetwork('6451345694325092909')).to.equal('Discover');
  });

  it('has a prefix of 646 and a length of 19', function() {
    expect(detectNetwork('6461345694325092909')).to.equal('Discover');
  });

  it('has a prefix of 647 and a length of 19', function() {
    expect(detectNetwork('6471345694325092909')).to.equal('Discover');
  });

  it('has a prefix of 648 and a length of 19', function() {
    expect(detectNetwork('6481345694325092909')).to.equal('Discover');
  });

  it('has a prefix of 649 and a length of 19', function() {
    expect(detectNetwork('6491345694325092909')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6512345397542456')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6512345397542456756')).to.equal('Discover');
  });
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;

  it('has a prefix of 5018 and a length of 12', function() {
    expect(detectNetwork('501884753287')).to.equal('Maestro');
  });
  
  it('has a prefix of 5020 and a length of 12', function() {
    expect(detectNetwork('502084753287')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 12', function() {
    expect(detectNetwork('503884753287')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 12', function() {
    expect(detectNetwork('630484753287')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 13', function() {
    expect(detectNetwork('5018847532871')).to.equal('Maestro');
  });
  
  it('has a prefix of 5020 and a length of 13', function() {
    expect(detectNetwork('5020847532871')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 13', function() {
    expect(detectNetwork('5038847532871')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 13', function() {
    expect(detectNetwork('6304847532871')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 14', function() {
    expect(detectNetwork('50188475328712')).to.equal('Maestro');
  });
  
  it('has a prefix of 5020 and a length of 14', function() {
    expect(detectNetwork('50208475328712')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 14', function() {
    expect(detectNetwork('50388475328712')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 14', function() {
    expect(detectNetwork('63048475328712')).to.equal('Maestro');
  });
  
  it('has a prefix of 5018 and a length of 15', function() {
    expect(detectNetwork('501884753287456')).to.equal('Maestro');
  });
  
  it('has a prefix of 5020 and a length of 15', function() {
    expect(detectNetwork('502084753287456')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 15', function() {
    expect(detectNetwork('503884753287456')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 15', function() {
    expect(detectNetwork('630484753287456')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 16', function() {
    expect(detectNetwork('5018847532874567')).to.equal('Maestro');
  });
  
  it('has a prefix of 5020 and a length of 16', function() {
    expect(detectNetwork('5020847532874567')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 16', function() {
    expect(detectNetwork('5038847532874567')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 16', function() {
    expect(detectNetwork('6304847532874567')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 17', function() {
    expect(detectNetwork('50188475328745678')).to.equal('Maestro');
  });
  
  it('has a prefix of 5020 and a length of 17', function() {
    expect(detectNetwork('50208475328745678')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 17', function() {
    expect(detectNetwork('50388475328745678')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 17', function() {
    expect(detectNetwork('63048475328745678')).to.equal('Maestro');
  });

   it('has a prefix of 5018 and a length of 18', function() {
    expect(detectNetwork('501884753287456789')).to.equal('Maestro');
  });
  
  it('has a prefix of 5020 and a length of 18', function() {
    expect(detectNetwork('502084753287456789')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 18', function() {
    expect(detectNetwork('503884753287456789')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 18', function() {
    expect(detectNetwork('630484753287456789')).to.equal('Maestro');
  });

   it('has a prefix of 5018 and a length of 19', function() {
    expect(detectNetwork('5018847532874567890')).to.equal('Maestro');
  });
  
  it('has a prefix of 5020 and a length of 19', function() {
    expect(detectNetwork('5020847532874567890')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 19', function() {
    expect(detectNetwork('5038847532874567890')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 19', function() {
    expect(detectNetwork('6304847532874567890')).to.equal('Maestro');
  });
});

describe('should support China UnionPay', function() {

  var expect = chai.expect;

  for (var prefix = 622126; prefix <= 622925; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(parseInt(prefix) + '4536743567')).to.equal('China UnionPay');
      });
      
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        expect(detectNetwork(parseInt(prefix) + '45367435678')).to.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        expect(detectNetwork(parseInt(prefix) + '453674356789')).to.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(parseInt(prefix) + '4536743567890')).to.equal('China UnionPay');
      });
    })(prefix)
  }
});

describe('should support China UnionPay', function() {

  var expect = chai.expect;

  for (var prefix = 624; prefix <= 626; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(parseInt(prefix) + '4536743567456')).to.equal('China UnionPay');
      });
      
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        expect(detectNetwork(parseInt(prefix) + '45367435678456')).to.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        expect(detectNetwork(parseInt(prefix) + '453674356784567')).to.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(parseInt(prefix) + '4536743567845678')).to.equal('China UnionPay');
      });
    })(prefix)
  }
});

describe('should support China UnionPay', function() {

  var expect = chai.expect;

  for (var y = 6282; y <= 6288; y++) {
    (function(y) {
      it('has a prefix of ' + y + ' and a length of 16', function() {
        expect(detectNetwork(y + '453674356745')).to.equal('China UnionPay');
      });
      
      it('has a prefix of ' + y + ' and a length of 17', function() {
        expect(detectNetwork(y + '4536743567845')).to.equal('China UnionPay');
      });

      it('has a prefix of ' + y + ' and a length of 18', function() {
        expect(detectNetwork(y + '45367435678456')).to.equal('China UnionPay');
      });

      it('has a prefix of ' + y + ' and a length of 19', function() {
        expect(detectNetwork(y + '453674356784567')).to.equal('China UnionPay');
      });
    })(y)
  }
});

describe('should support Switch', function () {
  var expect = chai.expect;

  it('has a prefix of 4903 and a length of 16', function () {
    expect(detectNetwork('4903345323492345')).to.equal('Switch');
  });

  it('has a prefix of 4903 and a length of 18', function () {
    expect(detectNetwork('490334532349234568')).to.equal('Switch');
  });

  it('has a prefix of 4903 and a length of 19', function () {
    expect(detectNetwork('4903345323492345123')).to.equal('Switch');
  });

   it('has a prefix of 4905 and a length of 16', function () {
    expect(detectNetwork('4905345323492345')).to.equal('Switch');
  });

  it('has a prefix of 4905 and a length of 18', function () {
    expect(detectNetwork('490534532349234568')).to.equal('Switch');
  });

  it('has a prefix of 4905 and a length of 19', function () {
    expect(detectNetwork('4905345323492345123')).to.equal('Switch');
  });

   it('has a prefix of 4911 and a length of 16', function () {
    expect(detectNetwork('4911345323492345')).to.equal('Switch');
  });

  it('has a prefix of 4911 and a length of 18', function () {
    expect(detectNetwork('491134532349234568')).to.equal('Switch');
  });

  it('has a prefix of 4911 and a length of 19', function () {
    expect(detectNetwork('4911345323492345123')).to.equal('Switch');
  });

   it('has a prefix of 564182 and a length of 16', function () {
    expect(detectNetwork('5641825323492345')).to.equal('Switch');
  });

  it('has a prefix of 564182 and a length of 18', function () {
    expect(detectNetwork('564182532349234568')).to.equal('Switch');
  });

  it('has a prefix of 564182 and a length of 19', function () {
    expect(detectNetwork('5641825323492345123')).to.equal('Switch');
  });

  it('has a prefix of 633110 and a length of 16', function () {
    expect(detectNetwork('6331105323492345')).to.equal('Switch');
  });

  it('has a prefix of 633110 and a length of 18', function () {
    expect(detectNetwork('633110532349234568')).to.equal('Switch');
  });

  it('has a prefix of 633110 and a length of 19', function () {
    expect(detectNetwork('6331105323492345123')).to.equal('Switch');
  });

   it('has a prefix of 6333 and a length of 16', function () {
    expect(detectNetwork('6333345323492345')).to.equal('Switch');
  });

  it('has a prefix of 6333 and a length of 18', function () {
    expect(detectNetwork('633334532349234568')).to.equal('Switch');
  });

  it('has a prefix of 6333 and a length of 19', function () {
    expect(detectNetwork('6333345323492345123')).to.equal('Switch');
  });

   it('has a prefix of 6759 and a length of 16', function () {
    expect(detectNetwork('6759345323492345')).to.equal('Switch');
  });

  it('has a prefix of 6759 and a length of 18', function () {
    expect(detectNetwork('675934532349234568')).to.equal('Switch');
  });

  it('has a prefix of 6759 and a length of 19', function () {
    expect(detectNetwork('6759345323492345123')).to.equal('Switch');
  });
});
