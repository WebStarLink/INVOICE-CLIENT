const nodemailer = require("nodemailer")

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }
    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: `Account activation at ${process.env.API_URL}`,
            html:
            `
            <div>
                <h1>Follow to present link for account activation</h1>
                <a href="${link}">Activate my account</a>
            </div>
            `,
        })
    }

}

module.exports = new MailService()