#!/usr/bin/env node
// Import necessary libraries
import chalk from "chalk";
import inquirer from "inquirer";

// Define a type for user input
type UserInput = {
  Sentence: string;
};

// Prompt the user for a sentence
const userInput: UserInput = await inquirer.prompt([
  {
    name: "Sentence",
    type: "input",
    message: chalk.bgCyanBright("Enter a sentence to count the words : ")
  }
]);

// Split the sentence into words and remove any leading or trailing whitespace
const words = userInput.Sentence.trim().split(" ");

// Log the words to the console
console.log(words);

// Log the number of words in the sentence to the console
console.log(`your sentence words count are ${words.length}`);

