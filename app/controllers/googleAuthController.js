import querystring from 'querystring';
import jwt from "jsonwebtoken";
import { SERVER_ROOT_URI, GOOGLE_CLIENT_ID, JWT_SECRET, GOOGLE_CLIENT_SECRET, COOKIE_NAME, UI_ROOT_URI } from '../services/googleAuthConfig.js';
import axios from "axios";

const redirectURI = 'auth/google'

export const controller = {

    getGoogleAuthURL (req, res)  {
        const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
        const options = {
            redirect_uri: `${SERVER_ROOT_URI}/${redirectURI}`,
            client_id: GOOGLE_CLIENT_ID,
            access_type: 'offline',
            response_type: 'code',
            prompt: 'consent',
            scope: [
                'https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email'
            ].join(' ')
        }
    
        // return `${rootUrl}?${querystring.stringify(options)}`
        res.send(`${rootUrl}?${querystring.stringify(options)}`);
    },

    async getTokens ({ code, clientId, clientSecret, redirectUri }) {
        const url = 'https://oauth2.googleapis.com/token';
        const values = {
            code,
            client_id: clientId,
            client_secret: clientSecret,
            redirect_uri: redirectUri,
            grant_type: "authorization_code",
        };
    
        return await axios
            .post(url, querystring.stringify(values), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            })
            .then((res) => res.data)
            .catch((error) => {
                throw new Error(error.message)
            });
    },

    async redirect (req, res) {

        const code = req.query.code;

        const { id_token, access_token } = await controller.getTokens({
            code, 
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            redirectUri: `${SERVER_ROOT_URI}/${redirectURI}`
        })

        // Fetch the user's profil with the access token and the bearer
        const googleUser = await axios
            .get(
                `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
                {
                    headers: {
                        Authorization: `Bearer ${id_token}`,
                    },
                }
            )
            .then((res) => res.data)
            .catch((error) => {
                console.error(`Failed to fetch user`);
                throw new Error(error.message);
            });
            
        const token = jwt.sign(googleUser, JWT_SECRET);

        res.cookie(COOKIE_NAME, token, {
            maxAge: 900000,
            httpOnly: true,
            secure: false,
        });
            
        res.redirect(UI_ROOT_URI);
    },

    async getAuthMe (req, res) {
        try {
            const decoded = jwt.verify(req.cookies[COOKIE_NAME], JWT_SECRET);
            return res.send(decoded);
        } catch (err) {
            console.log(err);
            res.send(null);
        }
    }
}

export default controller;