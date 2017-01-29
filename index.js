var nodemailer = require('nodemailer');
var transport = require('./transport.js');

function myAction(mail) {
  return new Promise(function(resolve, reject) {
    var transporter = nodemailer.createTransport(transport);

    transporter.sendMail(mail, function(error, info){
      transporter.close();
      if(error){
        console.log(error);
        reject({ error: 'interrupted!' });
      }else{
        resolve({ done: true });
      }
    });
  });
}

exports.main = myAction;

if (require.main === module) {
  var fs = require("fs");
  var contents = fs.readFileSync("mail.json");
  var mail = JSON.parse(contents);
  myAction(mail);
}
