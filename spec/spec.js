var app = require('../build/js/script.js');


describe("A suite", function() {
  it("положительная степень", function() {
  	//prepare
  	var res=0;

  	//act
  	res = app(2,3);

  	//assert
	 expect(res).toEqual(8);
  });

  it("отрицательная степень" , function(){
  	//prepare
  	var res;
 
  	//act
  	res = app(2, -3);

  	//assert
  	expect(res).toEqual(0.125);
  });

  it("отрицательная отрицательное число" , function(){
  	//prepare
  	var res;
 
  	//act
  	res = app(-5, 3);

  	//assert
  	expect(res).toEqual(-125);
  });

  it("основание - 0" , function(){
  	//prepare
  	var res;
 
  	//act
  	res = app(0, 3);

  	//assert
  	expect(res).toEqual(0);
  });

  it("граничные значения" , function(){
  	//prepare
  	var res;
 
  	//act
  	res = app(500, 500);

  	//assert
  	expect(res).toEqual(Infinity);
  });
});

