import express from 'express'; 
import sqlite3 from 'sqlite3';
import {handler} from './svelte/build/handler.js'
import cors from 'cors';
import bodyParser from 'body-parser';
import file from 'fs';
const postsDb = new sqlite3.Database("./posts.db");
const db = new sqlite3.Database('./data.db');
const app = express();
const port = 5000;

// count the number of posts in posts.db table posts and return the number
// this is used to assign a postId to a new post

function countPosts() {
    return new Promise((resolve, reject) => {
        postsDb.get("SELECT COUNT(*) FROM posts", (err, row) => {
            if (err) {
                console.log(err);
                reject(err);
            }
            console.log(row);
            resolve(row["COUNT(*)"]);
        });
    });

}
let postId = await countPosts().then(result => { return result; });

console.log(postId)
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/express", (req, res) => {
    res.send("Hello from Express");
});


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
        postId++;
        file.writeFile("postid.txt", `${postId}`, (err) => {
            if (err) throw err;
            console.log("postid.txt updated");
        });
    });
    res.status(200).send({ success: true });
});

app.get("/api/fetchPosts", (req, res) => {
    postsDb.all("SELECT * FROM posts ORDER BY postId DESC", (err, rows) => {
        if (err) {
            console.log(err);
            return
        }
        console.log(rows)
        res.status(200).send(rows);

    });
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
            console.log(row)
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
