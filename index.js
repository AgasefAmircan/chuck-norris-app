// import readline from "readline";
// import https from "https";

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
import { question, rl } from "./question.js";
import { request } from "./request.js";

const name = await question("What is your name");
const answer = await question(
  `Hi, ${name}, wanna hear some Chuck Norris jokes?[Y/N]`
);
if (answer === "Y") {
  const categories=await request("https://api.chucknorris.io/jokes/categories")
  categories.forEach(function (c, i) {
    console.log(`${i + 1}.${c}`);
  });
  const number=await question("Please select a category(Enter Number):")
  const index = number - 1;
  const selectedCategory = categories[index];
  const joke=await request((`https://api.chucknorris.io/jokes/random?category=${selectedCategory}`))
  console.log(joke.value)
  rl.close();
} else {
  rl.close();
}
