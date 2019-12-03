
const padLeftZeros = (string, zeroCount) => '0'.repeat(zeroCount).concat(string);

const padRightZeros = (string, zeroCount) => string.concat('0'.repeat(zeroCount));

const karatsuba = (x, y) => {

	let xString = x.toString();
	let yString = y.toString();

	let xDigits = xString.length;
	let yDigits = yString.length;

	if(xDigits < yDigits) {
		xString = padLeftZeros(xString, yDigits - xDigits);
		xDigits = xString.length; 
	} else if(yDigits < xDigits) {
		yString = padLeftZeros(yString, xDigits - yDigits);
		yDigits = yString.length; 
	}

	if(xDigits === 1 && yDigits === 1) {
		return parseInt(x) * parseInt(y);
	} else {
		const half = Math.floor(xDigits / 2);

		const a = parseInt(xString.slice(0, half));
		const b = parseInt(xString.slice(half, xDigits));
		const c = parseInt(yString.slice(0, half));
		const d = parseInt(yString.slice(half, yDigits));

		const one = karatsuba(a, c);
		const two = karatsuba(b, d);
		const three = karatsuba(a + b, c + d);
		const four = three - one - two;

		return one * Math.pow(10, xDigits) +
			four * Math.pow(10, half) +
			two;
	}
}

console.log(karatsuba(501, 302));

console.log(karatsuba(
	123456789112345678,
	123456789112345678));

//console.log(karatsuba(
//	3141592653589793238462643383279502884197169399375105820974944592,
//	2718281828459045235360287471352662497757247093699959574966967627
//));
