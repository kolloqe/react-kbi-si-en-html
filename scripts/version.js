const fs = require('fs');
const glob = require("glob");
const path = require("path");
var packageJSON = require('../package.json');

const buildFilePattern = "build/static/js/*.js";
const releaseDirPath = `release/v${packageJSON.version}/`;
const releaseFilePath = `release/v${packageJSON.version}/kolloqe-input-umd-v${packageJSON.version}.js`;

glob(buildFilePattern, function (er, files) {
  if (files.length > 0) {
    const file = files[0];
    const fileExists = fs.existsSync(releaseFilePath);

    if (fileExists) {
      console.error(
        "\x1b[31m",
        "Release already exists! Consider bumping the version up in package.json!",
        "\x1b[0m"
      );
    } else {
      const dirExists = fs.existsSync(releaseDirPath);
      if (!dirExists) {
        fs.mkdir(releaseDirPath, { recursive: true }, (err) => {
          if (err) {
            console.error(
              "\x1b[31m",
              `Failed to initialize the release dir: ${releaseDirPath}`,
              "\x1b[0m"
            );
          } else {
            triggerRelease(file, releaseFilePath);
          }
        });
      } else {
        triggerRelease(file, releaseFilePath);
      }      
    }
  }
});

function triggerRelease(file, releaseFilePath) {
  fs.copyFile(file, releaseFilePath, (err) => {
    if (err) {
      console.error(
        "\x1b[31m",
        "Release Failed",
        "\x1b[0m"
      );
    } else {
      console.log(
        "\x1b[32m",
        `Released a new version (${path.basename(releaseFilePath)}). Find it in the ./release dir.`,
        "\x1b[0m"
      );
    }
  });
}
