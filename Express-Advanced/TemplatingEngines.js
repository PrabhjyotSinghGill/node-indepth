const express = require("/express");
const app = express();

app.set("view engine", "pug");
//pug is a view engine which looks like html but without html brackets in syntax
app.set("views", "./views");
