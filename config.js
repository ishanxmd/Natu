const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "3hYzkLBZ#dzQQvLpJ8CdXA_j8en6VJKAVWLCepveHaI_zr2llxGI", // ඔයාගේ session id එක දාන්න
MONGODB: process.env.MONGODB || "mongodb+srv://igirathnayake_db_user:vh7YRqw5ROWOPxM9@ishanmadusanke.dobuuxg.mongodb.net/?appName=ishanmadusanke", // ඔයාගේ mongodb url එක දාන්න
LANG: process.env.LANG || "EN",
BUTTON: process.env.BUTTON || "true",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
};
