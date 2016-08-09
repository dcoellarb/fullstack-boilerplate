import express from 'express';
import { ParseServer } from 'parse-server';
import nconf from 'nconf';

const app = express();
nconf.argv().env().file({ file: './config/default.json' });

// Specify the connection string for your mongodb database
// and the location to your Parse cloud code
const api = new ParseServer({
  databaseURI: process.env.DATABASE_URI || nconf.get('databaseURI'),
  cloud: process.env.CLOUD_CODE_MAIN || nconf.get('cloud'),
  appId: process.env.APP_ID || nconf.get('appId'),
  masterKey: process.env.MASTER_KEY || nconf.get('masterKey'),
  fileKey: process.env.FILE_KEY || nconf.get('fileKey'),
  serverURL: process.env.SERVER_URL || nconf.get('serverURL')
});

// Serve the Parse API on the /parse URL prefix
app.use(nconf.get('parseAPIPrefix'), api);

// Hello world
app.get('/', (req, res) => {
  res.status(200).send('Express is running here.');
});

const port = nconf.get('port');
app.listen(port, () => {
  console.log('parse-server running', port);
  console.log('test comment');
});
