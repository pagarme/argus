import mongoose from 'mongoose';
import chalk from 'chalk';
import Promise from 'bluebird';

import config from '../config.js';

console.log( `mongodb://${config.get('mongo.user')}:${config.get('mongo.password')}@${config.get('mongo.host')}` );

mongoose.connect( `mongodb://${config.get('mongo.host')}`, { useMongoClient: true } );
mongoose.Promise = Promise;

mongoose.connection.on('error', error => {
  console.log( chalk.red('Mongo connection error') + ' ' + error );
});

mongoose.connection.once('open', () => {
  console.log( chalk.green('Mongo successfully connected...') );
});

export default mongoose;
