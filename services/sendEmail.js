const sendgrid = require('@sendgrid/mail')
const keys = require('../config/keys')

class Mailer{
    constructor( {name, email, message} ){
        // console.log(keys.FROM_EMAIL, keys.TO_EMAIL, email, name, message)
        sendgrid.setApiKey(keys.SENDGRID_KEY)
        this.msg = {
            to: keys.TO_EMAIL,
            from: keys.FROM_EMAIL,
            subject: 'Email from Portfolio',
            text: `You have received an email from ${name} with the following message: \n"${message}" \n And the email contact is ${email}`
        }
    }

    async sendEmail() {
        const res = await sendgrid.send(this.msg)
        return res
    }
}

module.exports = Mailer
