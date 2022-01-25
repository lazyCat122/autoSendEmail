let nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
     service: 'QQ', // no need to set host or port etc.
     auth: {
         user: '58317503@qq.com',
         pass: 'bcnaqwudxvzycbdc'
     }
});

module.exports = transporter