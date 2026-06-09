/*
1. In the s11 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
3. Copy the activity code from your Instructor. Paste the activity code to your index.js file.
*/

/*
4. Calculate the user's monthly savings and determine if the user is within their budget.
    - Use the given financial details.
    - Calculate all the monthly expenses and save it in a variable called totalMonthlyExpenses.
    - Calculate the savings from the monthly income and total expenses and save it in a variable called monthlySavings.
    - Check if the user's total monthly expenses are within their budget and save the result in a variable called isWithinBudget.
    - Log the total monthly expenses, monthly savings, and budget status to the console.
*/
let monthlyIncome = 4000;
let monthlyRent = 1200;
let monthlyGroceries = 450;
let monthlyTransportation = 300;
let monthlyUtilities = 200;
let monthlyEntertainment = 150;
let monthlyBudget = 2500;

let totalMonthlyExpenses = monthlyRent + monthlyGroceries + monthlyTransportation + monthlyUtilities + monthlyEntertainment
let monthlySavings = monthlyIncome - totalMonthlyExpenses
let isWithinBudget = totalMonthlyExpenses <= monthlyBudget

console.log("Total Monthly Expenses: $" + totalMonthlyExpenses)
console.log("Monthly Savings: $" + monthlySavings)
console.log("Is within budget: " + isWithinBudget)

/*
5. Calculate the Area and Circumference of a Circle
    - Use the given radius of the circle.
    - Use the formulas to find the area and circumference.
    - Save the results in variables called resultArea and resultCircumference and log them to the console.
*/
let radius = 7;
const pi = 3.14159;

const resultArea = pi * (radius ** 2)
const resultCircumference = 2 * pi * radius

console.log("Area of the circle: " + resultArea)
console.log("Circumference of the circle: " + resultCircumference)

/* 
6. Calculate the area and perimeter of a triangle based on the given values for its base, height, and side lengths.
    - Use the given values for the base, height, and lengths of the three sides of the triangle.
    - Find the area of the triangle. Save it in a variable called area.
    - Given the sides, find the perimeter of the triangle. Save it in a variable called perimeter.
    - Log both the calculated area and perimeter to the console.
*/
let base = 10;
let height = 8;
let side1 = 5;
let side2 = 7;
let side3 = 9;

let area = 0.5 * (10 * 8)
let perimeter = side1 + side2 + side3

console.log("Area of the triangle: " + area + " square cm")
console.log("Perimeter of the triangle: " + perimeter + " cm")

/* 
7. Add your changes.
8. Commit your changes with a concise, imperative statement describing the change.Example: Added solution for the s02 activity.
9. Add the link in Boodle for s02.
*/
