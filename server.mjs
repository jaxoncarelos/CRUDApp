import express from 'express'; 
import sqlite3 from 'sqlite3';
import {handler} from './svelte/build/handler.js'
import cors from 'cors';
import bodyParser from 'body-parser';
const postsDb = new sqlite3.Database("./posts.db");
const db = new sqlite3.Database('./data.db');
const app = express();
const port = 8200;

// count the number of posts in posts.db table posts and return the number
// this is used to assign a postId to a new post

const signupCheckSQL = db.prepare("SELECT * FROM users WHERE username = ?");
const signupSQL = db.prepare("INSERT INTO users (username, password, email, creationDate) VALUES (?, ?, ?, datetime('now'))"); 


let postId = postsDb.get('SELECT * FROM posts ORDER BY postId DESC LIMIT 1', (err, row) => {
    if (err) {
        console.log(err);
        return
    }
    if (row) {
        postId = row.postId + 1;
    } else {
        postId = 1;
    }
})

console.log(postId)
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))




app.post("/api/editPost", (req, res) => {
    const body = req.body;
    const postId = body.postId;
    const content = body.content;

    postsDb.run("UPDATE posts SET content = ? WHERE postId = ?", [content, postId], (err) => { console.log(err) })

    res.status(200).send({ success: true });
});
app.post("/api/deletePost", (req, res) => {
    const body = req.body;
    const postId = body.postId;
    postsDb.run(`DELETE FROM posts WHERE postId = ${postId}`, (err) => {
        if (err) {
            console.log(err);
            return
        }
        console.log("successfully deleted post")
    });
});
app.post("/api/createPost", (req, res) => {
    const body = req.body;
    const username = body.username;
    const content = body.content;
    console.log(body, postId)
    postsDb.run("INSERT INTO posts (postId, username, content) VALUES (?, ?, ?)", [`${postId}`, username, content], (err) => {
        if (err) {
            console.log(err);
            return
        }
        console.log("successfully added post")
    });
    postId++;
    res.status(200).send({ success: true });
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
        res.status(201).send({ success: false });
    });
});

app.post("/api/register", async (req, res) => { 

    // check the username on usernameCheck and then if it's available, insert the user into the database
    const body = req.body;
    db.get("SELECT * FROM users WHERE username = ?", [body.username.toLowerCase()], (err, row) => {
        if (err) {
            console.log(err);
            return
        }

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
app.get("/api/fetchUserPosts", (req, res) => {
    postsDb.all(`SELECT * FROM posts WHERE username = '${req.query.username}' ORDER BY postId DESC`, (err, rows) => {
        if (err) {
            console.log(err);
            return
        }

        res.status(200).send(rows);

    });
});

app.get("/api/fetchPosts", (req, res) => {
    postsDb.all("SELECT * FROM posts ORDER BY postId DESC", (err, rows) => {
        if (err) {
            console.log(err);
            return
        }

        res.status(200).send(rows);

    });
});
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




app.use(handler);

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});
 
module.exports = app;