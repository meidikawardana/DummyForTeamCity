const { exec } = require('child_process');
const fs = require('fs');

exec('curl -Os https://cli.codecov.io/v0.4.4/linux/codecov', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing: ${error}`);
    return;
  }
  fs.chmodSync('codecov', '755');
});
