import sgMail from '@sendgrid/mail';


export default function sendEmail(user, token, subject) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: user.email,
        from: "mlou.eshop@gmail.com", // your email
        subject: subject,
        html: `Hi my sweet love, here is the link to reset your password :<a href="${process.env.CLIENT_URL}/reset-password/${token}">${token}</a>`
        // I'm only going to use an (a tag) to make this easier to
        // understand but feel free to add any email templates 
        // in the `html` property
    };
  
    sgMail.send(msg)
        .then(() => {
            console.log("Email sent");
        }).catch((error) => {
            console.error(error);
        })
}