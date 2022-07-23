import readline from "readline";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
export function question(string) {
  return new Promise(function (resolve) {
    rl.question(string, resolve);
  });
}
