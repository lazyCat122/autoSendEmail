let nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
     service: 'QQ', // no need to set host or port etc.
     auth: {
         user: '5833@qq.com',   // ·¢ËÍ·½
         pass: 'bcnaqwcc'   // qqÊÚÈ¨Âë
     }
});

module.exports = transporter