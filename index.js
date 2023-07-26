
const express = require("express");
const app = express();
const ejs = require("ejs");
app.set("view engine", "ejs");
app.use(express.static("views"));

app.use(express.json());

const Datesss = new Date();
const day = Datesss.getDay();
const hours = Datesss.getHours();

app.use((req, res, next) => {
  if (day >= 1 && day <= 5 && hours >= 9 && hours < 17) {
    next();
  } else {
    res.render("Closing");
  }
});


app.get("/", (req, res) => {
  res.render("HomePage");
});

const userRouter = require("./routes/route");
app.use("/", userRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
