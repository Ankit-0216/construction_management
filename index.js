const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const authRoutes = require("./routes/jwtAuth");
const dashboardRoutes = require("./routes/dashboard");
const projectRoutes = require("./routes/projects");
const taskRoutes = require("./routes/tasks");
const sheetsRoutes = require("./routes/sheets");
const userProjectRoutes = require("./routes/userProjects");
const coordinatesRoutes = require("./routes/coordinates");

const cors = require("cors");

const PORT = 5000;

//middleware

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes

//Register and login Routes
app.use("/auth", authRoutes);

//dashboard Routes
app.use("/dashboard", dashboardRoutes);

//Project Management Routes
app.use("/projects", projectRoutes);

//Task Management Routes
app.use("/projects", taskRoutes);

//Sheets Routes
app.use("/projects", sheetsRoutes);

//UserProjects Routes
app.use("/users-projects", userProjectRoutes);

//CoOrdinates Routes
app.use("/projects", coordinatesRoutes);

//Start the server
app.listen(PORT, () => {
  console.log(`Server started on port: http://localhost:${PORT}`);
});
