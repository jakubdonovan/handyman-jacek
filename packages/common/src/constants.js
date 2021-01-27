const yn = require("yn");

if (require.main === module) {
  var { hideBin } = require("yargs/helpers");
  var yargs = require("yargs/yargs");
  var argv = yargs(hideBin(process.argv)).argv;
  var fs = require("fs");

  function buildEnv() {
    addArgstoEnv("dev");
    addArgstoEnv("prod");
    addArgstoEnv("docker");
    addArgstoEnv("heroku");
  }

  function addArgstoEnv(arg) {
    if (argv[arg]) {
      fs.readFile(__dirname + `/../.env.${arg}`, "utf-8", (err, data) => {
        if (err) {
          console.error(err);
        } else {
          fs.writeFile(
            `${__dirname}/../.env`,
            data,
            (err) => err && console.error(err)
          );
        }
      });
    }
  }

  buildEnv(argv);
}

module.exports = {
  DOCKER: yn(process.env.DOCKER),
  PRODUCTION: yn(process.env.PRODUCTION),
};
