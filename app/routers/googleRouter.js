import express from 'express';
import querystring from 'querystring';
import axios from "axios";
import jwt from "jsonwebtoken";
import query from '../services/queries/userQueries.js';
import NotFoundError from '../helpers/NotFoundError.js';



const googleRouter = express.Router();


import { SERVER_ROOT_URI, GOOGLE_CLIENT_ID, JWT_SECRET, GOOGLE_CLIENT_SECRET, COOKIE_NAME, UI_ROOT_URI } from '../services/googleAuthConfig.js';

const redirectURI = 'auth/google'

const getGoogleAuthURL = () => {
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
    return `${rootUrl}?${querystring.stringify(options)}`;
}

// Getting login URL
googleRouter.get('/auth/google/url', (req, res) => {
    return res.send(getGoogleAuthURL())
})

const getTokens = async ({ code, clientId, clientSecret, redirectUri }) => {
    const url = 'https://oauth2.googleapis.com/token';
    const values = {
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code'
    };

    return axios
        .post(url, querystring.stringify(values), {
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded',
            },
        })
        .then((res) => res.data)
        .catch((error) => {
            console.error(`Failed to fetch auth tokens`);
            throw new Error(error.message)
        });
}


googleRouter.get(`/${redirectURI}`, async (req, res) => {
    const code = req.query.code;

    const { id_token, access_token } = await getTokens({
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
        
    res.redirect('http://localhost:3000/authGoogle');
});

googleRouter.get("/auth/me", (req, res, next) => {
    console.log("get me");
    console.log(req.cookies[COOKIE_NAME], JWT_SECRET)
    try {
        const decoded = jwt.verify(req.cookies[COOKIE_NAME], JWT_SECRET);
        console.log("decoded", decoded);

        const loginUser = async (req, res, next) => {
            const users = await query.getAll();
            if(users.length === 0) next(new NotFoundError('Data was not found'));
            const userFound = users.find(user => user.email === decoded.email);
            if(!userFound) return res.status(401).send({message :'wrong password or email'});
            const {password, ...user} = userFound.get({ plain: true });
            const token = jwt.sign({ user }, process.env.SALT );
            console.log(user)
            return res.status(200).send({ token, user });
        }
        loginUser(req, res, next);
        // return res.send(decoded);

    } catch (err) {
        console.log(err);
        res.send(null);
    }
});

export default googleRouter;
