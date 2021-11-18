const multer = require("multer");
const mkdirp = require("mkdirp");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = path.join(__dirname, "../public/uploads/");
    mkdirp(dir)
      .then((made) => cb(null, dir))
      .catch((err) => cb(err));
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});

const uploadImageHandler = multer({
  storage,
  fileFilter: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const validExtension = [".jpg", ".jpeg", ".png"];
    if (!validExtension.includes(ext)) {
      return cb(new Error("Invalid file extension"));
    }
    cb(null, true);
  },
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

module.exports = {
    uploadImageHandler,
};
