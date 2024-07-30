import express from "express";
const app = express();

app.use(express.json());
app.use(express.text());

const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
userRouter.post("/create-user", (req, res) => {
  const user = req.body;
  console.log(user);

  res.send({
    success: true,
    message: "user created successfully",
    data: user,
  });
});

courseRouter.post("/create-course", (req, res) => {
  const course = req.body;
  console.log(course);

  res.send({
    success: true,
    message: "course created successfully",
    data: course,
  });
});

const logger = (req, res, next) => {
  console.log(req.url, req.method, req.hostname);
  next();
};

app.get("/", logger, (req, res) => {
  res.send("Hello World!");
});
app.post("/", logger, (req, res) => {
  console.log(req.body);
  res.send("got data");
});

export default app;
