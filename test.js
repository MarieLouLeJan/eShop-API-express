import sgMail from '@sendgrid/mail'
sgMail.setApiKey('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')
const msg = {
    to: 'marielou.lejan@gmail.com', // Change to your recipient
    from: 'mlou.eshop@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })