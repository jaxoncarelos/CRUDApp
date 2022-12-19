import express from 'express'; 
import sqlite3 from 'sqlite3';
import {handler} from './svelte/build/handler.js'
import cors from 'cors';
import bodyParser from 'body-parser';

const db = new sqlite3.Database('./data.db');
const app = express();
const port = 5000;

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/express", (req, res) => {
    res.send("Hello from Express");
});


const signupCheckSQL = db.prepare("SELECT * FROM users WHERE username = ?");
const signupSQL = db.prepare("INSERT INTO users (username, password, email, creationDate) VALUES (?, ?, ?, datetime('now'))");
app.get("/api/usernameCheck", (req, res) => {
    // check the username on usernameCheck and then if it's available, return json with usernameAvailable: true
    signupCheckSQL.get([req.query.username.toLowerCase()], (err, row) => {
        if (err) {
            console.log(err);
            return
        }
        console.log(row)
        if (row) {
            res.status(200).send({ usernameAvailable: false });
            return;
        }
        res.status(200).send({ usernameAvailable: true });
    });
});

app.post("/api/login", (req, res) => {
    // check the username and password on login and then if it's available, return json with usernameAvailable: true
    signupCheckSQL.get([req.body.username.toLowerCase()], (err, row) => {
        if (err) {
            console.log(err);
            return
        }
        if (row) {
            if (row.password === req.body.password) {
                res.status(200).send({ success: true, username: row.username });
                return;
            }
        }
        res.status(200).send({ success: false });
    });
});

app.post("/api/register", async (req, res) => { 
    console.log("register called")
    // check the username on usernameCheck and then if it's available, insert the user into the database
    const body = req.body;
    console.log(body)
    db.get("SELECT * FROM users WHERE username = ?", [body.username.toLowerCase()], (err, row) => {
        if (err) {
            console.log(err);
            return
        }
        console.log(row)
        if (row) {
            res.status(200).send({ success: false });
            return;
        }
        signupSQL.run([body.username.toLowerCase(), body.password, body.email], (err) => {
            if (err) {
                console.log(err);
                return
            }
            console.log("successfully added user")
            res.status(200).send({ success: true });
            
        });
    });
});
;



app.use(handler);



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});