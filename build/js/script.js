function pow(base, exponent) {
		var result = 1;
		var exponent;
		var base;
		if (exponent>=0){
			for (var count= 0; count < exponent; count++){
			result*=base;}
			return result;
		}else{
			exponent = exponent*(-1);
			for (var count = 0; count < exponent; count++){			
			result*=base;
			}
			return 1/result;
			
			}

		}
		//var base = prompt("Введите число", "2");
		//var exponent = prompt("Введите степень", "3");
		//console.log(pow(base, exponent));
try{
		module.exports = pow;

	} catch (e){}