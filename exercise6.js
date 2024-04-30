function isPrime(number) {
	if (number <= 1) {
		return console.log("no es primo")
	}
    for (let i = 2; i < number; i++) {
		if (number % i === 0) {
			return console.log("no es primo")
		}
	}
	return console.log("es primo")
}
isPrime("56")