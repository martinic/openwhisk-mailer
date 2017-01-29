# openwhisk-mailer [![Greenkeeper badge](https://badges.greenkeeper.io/martinic/openwhisk-mailer.svg)](https://greenkeeper.io/)

An OpenWhisk Mailer Action

## Prerequisites
- OpenWhisk command line interface (CLI) called `wsk`
- npm install -g bestzip

## Installation
- npm install
- npm run create
- npm run update (Only for development)
- npm run invoke

## config

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
