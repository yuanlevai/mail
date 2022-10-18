const nodemailer = require('nodemailer')

// init email transporter
const transport = nodemailer.createTransport({
    host: "smtp.google..com",
    port: 465,
    secure: true,
    auth: {
        user: "bena.maharani@gmail.com",
        pass: "password"
    }
})

transport.sendMail({
    from: '"Yuan Levai Leo" <noreply@bena.maharani@gmail.com>', // sender address
    to: "risusanto@outlook.com", // list of receivers
    subject: "Submission: Chapter-9 Challenge# Yuan Levai Leo", // Subject line
    text: "Favorite Song: GNR : November Rain | link github: https://github.com/yuanlevai/mail.git ", // plain text body
    html: "<Favorite Song: GNR : November Rain | link github: https://github.com/yuanlevai/mail.git ", // html body
}).then(res => {
    console.log(
        res.messageId
    )
}).catch(err => {
    console.error(err)
})

console.log('kirim email')

