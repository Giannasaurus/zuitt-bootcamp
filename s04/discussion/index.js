let numA = -1

if (numA < 0) {
	console.log("hello")
}

let numB = 1

if (numB < 0) {
	console.log("this console message will not be printed because the condition returns false")
}

let numC = 1

if (numC < 0) {
	console.log("numC is less than 0")
}
else if (numC > 0) {
	console.log("numC is greater than 0")
}
else {
	console.log("numC is equal to 0")
}

console.log(numC < 0)
console.log(numC > 0)

let message = 'No message.'

function determineWaterLevel(waterLevel) {
	if (waterLevel === 0) {
		return 'Water level is safe.'
	}
	else if (waterLevel <= 2) {
		return 'Water level is rising. Proceed with caution.'
	}
	else if (waterLevel > 2 && waterLevel <= 4) {
		return 'Water level is critical. Stay inside your homes and keep dry.'
	}
	else if (waterLevel > 4 || waterLevel <= 6) {
		return 'Water level is deadly. Contact your local government for assistance.'
	}
	else {
		return 'Water level is unmeasurable. Evacuate immediately.'
	}
}

message = determineWaterLevel(7)
console.log(message)

if (true) {
	console.log("truthy")
}

if (false) {
	console.log("falsy")
}

if (0) {
	console.log("falsy")
}

if (undefined) {
	console.log("falsy")
}

let resultOfTernaryOperator = (10 < 15) ? "true" : false
console.log("result of ternary operator: " + resultOfTernaryOperator)

function printGenius() {
	return 'You are a genius.'
}

function printNormal() {
	return 'You are a normal human being.'
}

let iq = parseInt(prompt("What is your IQ?"))
console.log(iq)

let iqMessage = (iq > 140) ? printGenius() : printNormal()
console.log("Your IQ is " + iq + ", " + iqMessage)