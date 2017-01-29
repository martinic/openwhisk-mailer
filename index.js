var nodemailer = require('nodemailer');

function main(params) {
  return new Promise(function(resolve, reject) {
    var transporter = nodemailer.createTransport(params.transporter);

    transporter.sendMail(params.mail, function(error, info){
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

exports.main = main;

if (require.main === module) {
  var fs = require("fs");
  var contents = fs.readFileSync("params.json");
  var params = JSON.parse(contents);
  main(params);
}
