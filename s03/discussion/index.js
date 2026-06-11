function printMessage() {
	console.log("this is my first function!")
}
printMessage()

function getProducts() {
	let products = ["keyboard", "monitor", "mouse"]
	console.log(products)
}
getProducts()

function displayBookingInfo() {
	console.log("check-in date: june 14, 2026")
	console.log("origin: philippines")
	console.log("destination: hongkong")
}
displayBookingInfo()

const interest = 0.03
function printInterest() {
	console.log("interest: " + interest)
}
printInterest()
console.log(interest)

function printBalance() {
	const balance = 10000
	console.log("current balance: " + balance)
}
printBalance()

function printUserInput() {
	let usernameInput = prompt("enter your nickname")
	console.log("Hi! " + usernameInput)
}
printUserInput()

function printUserName(name) {
	console.log("my name is: " + name)
}

printUserName("Juana")
printUserName("Luis")
printUserName("Gianna")
printUserName("Erol")
printUserName("Bader")
printUserName("Paolo")
printUserName("Nikee")
printUserName("Ashton")

let characterName = "Mr. Bean"
printUserName(characterName)

function printFullName(firstName, middleName, lastName) {
	console.log(firstName + ' ' + middleName + ' ' + lastName)
}
printFullName("Gianna Darlene", "R.", "Cantor")
printFullName("Bader", "Lorenzo")
printFullName("Luis", "Paulo", "San", "Gabriel")