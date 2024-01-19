const express = require("express");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/testdate", (req, res) => {
  const { date, offsetHours } = req.body;
  const offsetHoursAccident = 5; // Do something to get timezone offset of accident.
  const realTime = new Date(new Date(date).getTime() - (offsetHours - offsetHoursAccident) * 3600000);
  console.log(realTime);
  res.send({ date: realTime, offsetHours: offsetHoursAccident });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});