const config = require('config');

const dbConnection = config.get('DBConnection');

const dbConn = {
    iHost: '',
    iUser: '',
    iPort: '',
}

let host = '';

if (config.has('DBConnection.host')) {
   dbConn.iHost = config.get('DBConnection.host');
} else {
   throw new Error('error in config DBConnection.host');
}
if (config.has('DBConnection.user')) {
    dbConn.iUser = config.get('DBConnection.user');
 } else {
    throw new Error('error in config DBConnection.user');
 }

if (config.has('DBConnection.port')) {
   dbConn.iPort = config.get('DBConnection.port');
} else {
   throw new Error('error in config DBConnection.port');
}
console.log("bdname::" + dbConn.iHost + " dbUser:" + dbConn.iUser + " port:" + dbConn.iPort);

