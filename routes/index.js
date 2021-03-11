const router = require("express").Router();
const uploadCloud = require("../config/cloudinary");
router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "Working" });
});

router.post("/upload", uploadCloud.single("photo"), (req, res, next) => {
  res.status(201).json({ img: req.file.path });
});

module.exports = router;
