/*
1. In the S03 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
3. Copy the activity code from your instructor. Paste the activity code to your index.js file.
*/

//console.log("Hello World");


/*
	4. Create a function named getClientInfo which is able to return an object. 

		The object returned should have the following properties:
		
		- name - String
		- address - String
		- deliverySchedule - String
		- paymentMethod - String

		Note: Property names given is required and should not be changed.

		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		You can also invoke the function in the console to view the returned value of the function.

		Note: This is optional.

*/

const clientInfo = {
		name: "Gianna",
		address: "Pasay City",
		deliverySchedule: "2026-06-11",
		paymentMethod: "COD"
	}

function getClientInfo() {
	return clientInfo
}

/**
 * in browser console, run:
 * getClientInfo()
/*

	5. Create a function named getCountriesArray which is able to return an array with at least 5 names of countries.
		
		- Note: The array returned should have at least 5 elements as strings.
			    Function name given is required and cannot be changed.


		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		You can also invoke the function in the console to view the returned value of the function.

			Note: This part is optional.
	
*/

const countries = ["Myanmar", "Thailand", "Laos", "Vietnam", "Cambodia"]

function getCountriesArray() {
	return countries
}

/*
	6. Create a function named getCapitalCitiesArray which is able to return an array with at least 5 capital cities of different countries.

		- Note: The array returned should have at least 5 elements as strings.
		        Function name given is required and cannot be changed.

		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		You can also invoke the function in the console to view the returned value of the function.

			Note: This part is optional.
*/

const capitals = ["Naypyidaw", "Bangkok", "Vientiane", "Hanoi", "Phnom Penh"]

function getCapitalCitiesArray() {
	return capitals
}

/*
    7. Create a function called "getSum" which will be able to add two numbers.
        - Two Numbers must be provided as arguments.
        - function should return the sum of the two numbers.
       
    8. Create a new variable called "sum".
        - This "sum" variable should be able to receive and store the result of "getSum" function.
        - Log the value of "sum" variable in the console.
*/

function getSum(firstNum, secondNum) {
	return firstNum + secondNum
}

let sum = getSum(6, 7)
console.log(sum)

/*
	9. Create a function called "getDifference" which will be able to subtract two numbers.
        - Two Numbers must be provided as arguments.
        - Function should return the difference of the two numbers.

    10. Create a new variable called difference.
        - This "difference" variable should be able to receive and store the result of "getDifference" function.
        - Log the value of "difference" variable in the console.
*/

function getDifference(firstNum, secondNum) {
	return firstNum - secondNum
}

let difference = getDifference(6, 7)
console.log(difference)

/*
	
    11. Create a function "getStudentAverage" which will be able to get total average of four numbers.
        - Four numbers should be provided as an argument.
        - Look up the formula for calculating the average of numbers.
        - Return the result of the average calculation.
        
    12. Create a new variable called "averageScore".
        - This variable should be able to receive and store the result of the "getStudentAverage" function.
        - Log the value of the "averageScore" variable in the console.
*/

function getStudentAverage(score1, score2, score3, score4) {
	return (score1 + score2 + score3 + score4) / 4
}

let averageScore = getStudentAverage(90, 100, 96, 87)
console.log(averageScore)

/*
	
    13. Create a function called "checkPassingScore" which will be able to check if the student score passed by checking the percentage of the score against the passing percentage.
        - This function should take two numbers as an argument, your score and the total score.
        - First, get the percentage of your score against the total. You can look up the - formula to get percentage.
        - Using a relational operator, check if your score percentage is greater than 75, the passing percentage. Save the value of the comparison in a variable called "isScorePassing".
        - Return the value of the variable "isScorePassing".
        - This function should return a boolean.

    14. Create a new variable called "isScorePassing".
        - This variable should be able to receive and store the boolean result of the "checkPassingScore" function.
        - Log the value of the isPassingScore variable in the console.

*/

function checkPassingScore(score, totalScore) {
	let percentage = (score / totalScore) * 100
	return isScorePassing = percentage > 75
}

let isPassingScore = checkPassingScore(100, 100)
console.log(isPassingScore)

/*
	15. Explore and understand the concept of scope in JavaScript through a series of coding challenges. Use your knowledge of scope to correctly declare and access variables within different scopes.
        - Declare a global variable named dollarExchangeRate and assign it to the number value of 54.
        - Write a function named computeExchangeAmount that returns the value of 5 times the value of the "dollarExchangeRate" variable.
        - Invoke the "computeExchangeAmount" function to get the total amount and store it in the a variable named "totalAmount" and log it in the console.
*/

let dollarExchangeRate = 54

function computeExchangeAmount(rate) {
	return rate * 5
}

let totalAmount = computeExchangeAmount(dollarExchangeRate)
console.log(totalAmount)

/*
	16. Explore and understand the concept of scope in JavaScript through a series of coding challenges. Use your knowledge of scope to correctly declare and access variables within different scopes.
        - Invoke the "computerExchangeAmount" function to get the total amount and store it in the a variable named "totalAmount" and log it in the console.
*/

// answer in activity 15

/*
	17. Explore and understand the concept of scope in JavaScript through a series of coding challenges. Use your knowledge of scope to correctly declare and access variables within different scopes.
	    - Inside the same script, define a function named "printJobDetails".
        - Declare a local variable named "jobListing" inside "printJobDetails", assign it with a string "Accountant" and a local variable named "jobDescription", assign it with a string "Responsible for bookkeeping and delivering financial reports.".
        - Attempt to return the value of "jobListing" and "jobDescription" to return a single line of text "Accountant: Responsible for bookkeeping and delivering financial reports.".
        - Try to access the values of "jobListing" and "jobDescription" variables outside the printJobDetails function. Make a note of the result. Remember to uncomment this line after attempting to access.
*/

function printJobDetails() {
	const jobListing = "Accountant"
	const jobDescription = "Responsible for bookkeeping and delivering financial reports."

	return jobListing + ": " + jobDescription
}

// undefined; outside of function scope
// console.log(jobListing + ": " + jobDescription)

/*
18. Add your changes.
19. Commit your changes with a concise, imperative statement describing the change. Example: "Added solution for the s03 activity".
20. Add the link in Boodle for s03.
*/
