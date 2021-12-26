const jwt = require("jsonwebtoken");
const dayjs = require("dayjs");

exports.authController = {
    loginUser(req, res) {
        const { email, password } = req.body;
        // check if user exists in db and get his data
        const user = { 'name': 'Oded', 'id': '123' };

        const token = user.id
        res.cookie("access_token", token, {
            secure: process.env.NODE_ENV !== "development",
            httpOnly: true,
            sameSite: process.env.NODE_ENV !== "development" ? "None" : "Lax",
            expires: dayjs().add(1, "hour").toDate()
        });

        res.status(200).send('Authenticated');
    },
    logupUser(req, res) {
        const { username, email, phone, password } = req.body;

        // create new user here and store in db
        const token = '111';
        res.cookie("access_token", token, {
            secure: process.env.NODE_ENV !== "development",
            httpOnly: true,
            sameSite: process.env.NODE_ENV !== "development" ? "None" : "Lax",
            expires: dayjs().add(1, "hour").toDate()
        });

        res.status(200).redirect('/index');
    },
    logout(req, res) {
        res.clearCookie("access_token");
        res.status(200).redirect('/signIn');
    }
};