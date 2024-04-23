const express = require("express");
const app = express();

app.set("view engine", "ejs");
// app.use(logger);

// Middlewarae to get form data
app.use(express.urlencoded({extended : true}));

// Middleware for rendring static files
app.use(express.static("public"))

app.get("/", (req, res)=>{
    // Default success Status
    // res.json({message: "OK"});
    // res.send("Hello World!");

    // res.sendStatus(500);

    // res.status(500).send("Error");
    // res.status(500).json({ message: "Error"});

    // Sending a file to user to download
    // res.download("server.js");

    // Rendring HTML File
    res.render("index", {text123 : "World"});
})

app.get("/my", logger, (req, res)=>{
    res.render("index");
})

const userRouter = require("./routes/users");
app.use("/users", userRouter);

// const postsRouter = require("./routes/posts");
// app.use("/posts", postsRouter);

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

app.listen(3000);