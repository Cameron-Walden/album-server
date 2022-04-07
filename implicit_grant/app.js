/**
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#implicit_grant_flow
 */

const express = require('express'); 
const app = express();

PORT = 8888;

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => console.log(`listening on ${PORT}`));