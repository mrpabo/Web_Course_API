import express, { Application, Request, Response } from "express";

const app: Application = express();
const getProfiles = require("./routes/getProfiles");
const addProfile = require("./routes/addProfile");
const cors = require("cors");

const port = 8081;

// Body parsing Middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/getprofiles", getProfiles);
app.use("/addprofile", addProfile);

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    data: "Hello World it works!",
  });
});

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${error}`);
}

<<<<<<< HEAD
// hello Dan

//Doro
//Raphy: follow me on Github: https://github.com/RaphaellyLargo
//Patric
=======
// hello alldhhfh
>>>>>>> 67a21ba7416f2e32866169faf8c9abd9fe57a7aa
