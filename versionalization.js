const { createInterface } = require('readline');
const { exec } = require("child_process");

const { version } = require("./package.json");

const answerYes = ["YES", "yes", "Yes", "yEs", "yeS", "YeS", "y", "Y"];

const questionVersionalize = createInterface({
  input: process.stdin,
  output: process.stdout
});

questionVersionalize.question('Is your project was changed to Major (changed the project scope) level ? (Yes/No or Skip with Enter): ', (answer) => {
  if (answerYes.includes(answer)) {
    let [majorNum] = version.split(".").map((value) => Number(value));

    const newVersion = `${++majorNum}.0.0`;

    exec(`yarn version --new-version ${newVersion}`, (err, stdout, stderr) => {
      console.log(stdout);
      questionVersionalize.close();
    });

  } else {
    questionVersionalize.question('Is your project was changed to Minor (add or remove funcionality) level ? (Yes/No or Skip with Enter): ', (answer) => {
      if (answerYes.includes(answer)) {
        let [majorNum, minorNum] = version.split(".").map((value) => Number(value));

        const newVersion = `${majorNum}.${++minorNum}.0`;

        exec(`yarn version --new-version ${newVersion}`, (err, stdout, stderr) => {
          console.log(stdout);
          questionVersionalize.close();
        });

      } else {
        questionVersionalize.question('Is your project was changed to Patch (fixing bug) level ? (Yes/No or Skip with Enter): ', (answer) => {
          if (answerYes.includes(answer)) {
            let [majorNum, minorNum, patchNum] = version.split(".").map((value) => Number(value));

            const newVersion = `${majorNum}.${minorNum}.${++patchNum}`;

            exec(`yarn version --new-version ${newVersion}`, (err, stdout, stderr) => {
              console.log(stdout);
              questionVersionalize.close();
            });

          } else {
            questionVersionalize.close();
          }

        });

      }

    });

  }

});

questionVersionalize.on('close', () => {
  process.exit(0);
});
