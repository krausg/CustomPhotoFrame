var path    = require("path");


exports.home = function (request, response) {
   //  response.write('Hello');
   response.sendFile(path.join(__dirname+'/../html/index.html'));
//    response.sendFile('/public/html/index.html');
   // response.end();
};  