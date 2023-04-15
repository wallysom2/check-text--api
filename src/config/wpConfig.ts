import WebPurify from 'webpurify';
import dotenv from 'dotenv';

dotenv.config();

const wp = new WebPurify({
    api_key: process.env.WEBPURIFY_API_KEY,
});

export default wp;