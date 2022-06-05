import DailyClass from "../Model/DailyClass.js";
import express from "express";

const dailyclassRouter = express.Router();

dailyclassRouter.post("/", async (req, res) => {
  let dailyData = {
    batch: req.body.batch,
    time: req.body.time,
    room: req.body.room,
  };
  let daily = await new DailyClass(dailyData);
  daily.save();
  res.status(201).send({ msg: "Complete", daily });
});

dailyclassRouter.get("/", async (req, res) => {
  const data = await DailyClass.find({});
  res.send(data);
});

dailyclassRouter.post("/delete", (req, res) => {
  DailyClass.findByIdAndDelete(req.body.id, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log("Deleted : ", docs);
    }
  });
});

export default dailyclassRouter;
