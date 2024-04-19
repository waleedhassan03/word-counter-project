#! /usr/bin/env node


// installed and imported inquirer package from npm 
import inquirer from "inquirer";


const answers: {
    Sentence: string
} = await inquirer.prompt([
    
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the words: "
    }
])

const words = answers.Sentence.trim().split(" ")

console.log(words)

console.log(`Your Senetcne words count is ${words.length}`);



