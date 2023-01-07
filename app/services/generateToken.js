import jwt from 'jsonwebtoken';

export function generateAccessToken(user) {
    return jwt.sign({ user }, process.env.SALT )
}

export function resetLinkToken (user) {
    return jwt.sign({user: user.email}, process.env.RESET_SECRET, { expiresIn: '10m'});
}