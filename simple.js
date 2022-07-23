import readline from "readline";
import https from "https"
export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const categories=['cat1','cat2','cat3']

rl.question("What is your name?", function (name) {
  rl.question(
    `Hi, ${name}, wanna hear some Chuck Norris jokes?`,
    function (answer) {
      if (answer === "Y") {
        const request = https.request(
          "https://api.chucknorris.io/jokes/categories",
          function (response) {
            response.on("data", function (data) {
              const categories = JSON.parse(data.toString());
              categories.forEach(function (c, i) {
                console.log(`${i + 1}.${c}`);
              });
              rl.question(
                "Please select a category(Enter Number):",
                function (number) {
                  const index = number - 1;
                  const selectedCategory = categories[index];
                  const request = https.request(
                    `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`,
                    function (response) {
                        response.on('data',function(data){
                           const joke=(JSON.parse(data.toString()));
                           console.log(joke.value)
                           rl.close();
                        });
                    });
                    request.end();
                });
            });
          });
        request.end();
      } else {
        rl.close();
      }
    }
  );
});
