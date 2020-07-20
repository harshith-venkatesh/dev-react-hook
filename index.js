const jsonFile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git");
const FILE_PATH = "./data.json";

const makeCommit = (x, y) => {
  const DATE = moment()
    .subtract(1, "y")
    .add(1, "d")
    .add(x, "w")
    .add(y, "y")
    .format();
  const data = {
    date: DATE,
  };
  jsonFile.writeFile(FILE_PATH, data, () => {
    simpleGit().add([FILE_PATH]).commit(DATE, { "--date": DATE }).push();
  });
};
makeCommit(3, 3);
