const input = "1000\n" +
    "2000\n" +
    "3000\n" +
    "\n" +
    "4000\n" +
    "\n" +
    "5000\n" +
    "6000\n" +
    "\n" +
    "7000\n" +
    "8000\n" +
    "9000\n" +
    "\n" +
    "10000"


// import {input} from "./input";

function getElfWithMostCaloriesCount() {
    const elves = input.split("\n\n");

    const elfCalories = elves.map(elf => elf.split("\n"));
    const caloriesSum = elfCalories.map(calories => calories.reduce((acc, calorie) => parseInt(calorie) + acc, 0));
    return caloriesSum.reduce((ans, value) => value > ans ? value : ans)
}

function getSumOfThreeElvesWithMostCaloriesCount() {
    const elves = input.split("\n\n");

    const elfCalories = elves.map(elf => elf.split("\n"));
    const caloriesSum = elfCalories.map(calories => calories.reduce((acc, calorie) => parseInt(calorie) + acc, 0));
    const sortedSum = caloriesSum.sort((a, b) => a > b ? 1 : -1).reverse();

    return sortedSum.slice(0, 3).reduce((acc, value) => value + acc, 0);
}

console.log(getElfWithMostCaloriesCount())
console.log(getSumOfThreeElvesWithMostCaloriesCount())
