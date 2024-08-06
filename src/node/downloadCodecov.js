const { exec } = require('child_process');
const fs = require('fs');

console.log('Running: exec curl -Os https://cli.codecov.io/linux/v0.7.3/codecov');
exec('curl -Os https://cli.codecov.io/linux/v0.7.3/codecov', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing: ${error}`);
    return;
  }
  console.log('make codecov executable');
  fs.chmodSync('codecov', '755');
});
