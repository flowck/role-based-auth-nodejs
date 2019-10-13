/**
 * Initalize the testing database
*/

process.env.NODE_ENV = "test";

const exec = require("child_process").exec;

async function run(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      console.log(error);
      if (error) {
        reject(error);
      }

      console.log("OUT >>>", stdout);
      console.log("\n\n");
      console.log("ERR >>>", stderr);
      resolve();
    });
  });
}

async function main() {
  // Drop database
  await run("sequelize db:drop");

  // Create database
  await run("sequelize db:create");

  // Migrate tables
  await run("sequelize db:migrate");

  // Apply seeds
  await run("sequelize db:seed:all");
}

main();