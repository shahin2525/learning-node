import { error } from "console";
import express, { Request } from "express";
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

app.get("/", logger, async (req, res, next) => {
  try {
    res.send(something);
  } catch (error) {
    next(error);
  }
});
app.post("/", logger, (req, res) => {
  console.log(req.body);
  res.send("got data");
});

// handle not found route

app.all("*", (req, res) => {
  res.status(400).json({
    success: false,
    message: "route not found",
  });
});

// global error handler

app.use((error, req, res, next) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: "something went wrong",
    });
  }
});

export default app;
