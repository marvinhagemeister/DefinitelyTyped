/// <reference path="emailjs.d.ts" />

import * as email from "emailjs";

const server = email.server.connect({
  user: "username",
  password: "password",
  host: "smtp.your-email.com",
  ssl: true
});

// send the message and get a callback with an error or details of the message that was sent
server.send({
  text: "i hope this works",
  from: "you <username@your-email.com>",
  to: "someone <someone@your-email.com>, another <another@your-email.com>",
  cc: "else <else@your-email.com>",
  subject: "testing emailjs"
}, function (err, message) { console.log(err || message); });

var message = {
  text: "i hope this works",
  from: "you <username@your-email.com>",
  to: "someone <someone@your-email.com>, another <another@your-email.com>",
  cc: "else <else@your-email.com>",
  subject: "testing emailjs",
  attachment:
  [
    { data: "<html>i <i>hope</i> this works!</html>", alternative: true },
    { path: "path/to/file.zip", type: "application/zip", name: "renamed.zip" }
  ]
};

// send the message and get a callback with an error or details of the message that was sent
server.send(message, (err, message) => { console.log(err || message); });

const server2 = email.server.connect({
  user: "username",
  password: "password",
  host: "smtp-mail.outlook.com",
  tls: { ciphers: "SSLv3" }
});

const message2 = {
  text: "i hope this works",
  from: "you <username@outlook.com>",
  to: "someone <someone@your-email.com>, another <another@your-email.com>",
  cc: "else <else@your-email.com>",
  subject: "testing emailjs",
  attachment:
  [
    { data: "<html>i <i>hope</i> this works! here is an image: <img src='cid:my-image' width='100' height ='50'> </html>" },
    { path: "path/to/file.zip", type: "application/zip", name: "renamed.zip" },
    { path: "path/to/image.jpg", type: "image/jpg", headers: { "Content-ID": "<my-image>" } }
  ]
};

// send the message and get a callback with an error or details of the message that was sent
server2.send(message2, (err, message) => { console.log(err || message); });
