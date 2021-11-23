// src/server/index.js
import express from 'express'
import React from 'react'
import path from 'path'
import { renderToString } from 'react-dom/server'
import { App } from '../App'
const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(express.static("public"))

app.get("*", (_, res) => {
  const app = renderToString(<App/>)
  res.render('index', { app })
});

const port = process.env.PORT || 3000;
app.listen(3000, function listenHandler() {
  console.info(`Running on ${port}`);
});