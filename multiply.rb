
def karatsuba (x, y) 
	x_string = x.to_s
	y_string = y.to_s

	x_digits = x_string.length
	y_digits = y_string.length

	if x_digits < y_digits 
		x_string = x_string.rjust(y_digits - x_digits, '0')
		x_digits = x_string.length
	elsif y_digits < x_digits 
		y_string = y_string.rjust(x_digits - y_digits, '0')
		y_digits = y_string.length
	end

	if x_digits == 2 || x_digits == 1 
		return x.to_i * y.to_i
	else 
		half = (x_digits / 2).floor
		
		a = x_string.slice(0..half-1).to_i
		b = x_string.slice(half..x_digits).to_i
		c = y_string.slice(0..half-1).to_i
		d = y_string.slice(half..y_digits).to_i

		one = karatsuba(a, c)
		two = karatsuba(b, d)
		three = karatsuba(a + b, c + d)
		four = three - one - two

		return one * (10 ** x_digits) +
			four * (10 ** half) +
			two;

	end
end

puts(karatsuba(501, 302))

puts(karatsuba(
	123456789112345678,
	123456789112345678))

puts(karatsuba(
	3141592653589793238462643383279502884197169399375105820974944592,
	2718281828459045235360287471352662497757247093699959574966967627
))
