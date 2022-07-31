import inquirer from "inquirer";

await inquirer.prompt({
  type: "input",
  name: "username",
  message: "What is your name:",
  default() {
    return "unknown";
  },
});
await inquirer.prompt({
  type: "list",
  name: "question",
  message: "What is your name : ",
  choices: ["plplwlw", "plplwlw", "plplwlw"],
});
