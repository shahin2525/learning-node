import express from "express";
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.text());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.send("got data");
});

export default app;
