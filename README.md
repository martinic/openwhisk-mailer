# openwhisk-mailer

> An openWhisk Action

npm install -g bestzip

npm run create
npm run update
npm run invoke

# config

transport.js
```
module.exports = {
  transport: 'ses', // loads nodemailer-ses-transport
  accessKeyId: 'ABCDEFGHIJKLMNOPQRST',
  secretAccessKey: 'TUV/XYZabcd8RbnmNxOyb5BsVWeNnK721xytIVwKkGK'
};
```

json input
```
{
  "from": "foo@bar.com",
  "to": "bar@foo.com",
  "subject": "Send Email Using OpenWhisk",
  "text": "OpenWhisk New world for me",
  "html": "<b>OpenWhisk New world for me</b>"
}
```
