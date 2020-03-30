const fs = require('fs')
const dotenv = require('dotenv');

const targetPath = './src/environments/environment.ts';
const env = './.env';

const envConfig = dotenv.parse(fs.readFileSync(env));
const envConfigFile = `export const environment =
 ${JSON.stringify(envConfig)}
 ;`;

fs.writeFile(targetPath, envConfigFile, (err) => {
  if (err) {
    throw console.error(err);
  } else {
    console.log(targetPath);
  }
});
