import multer from "multer";
import path from "path";

const destination = path.resolve("public");

const storage = multer.diskStorage({
  destination,
  filename: (req, file, cb) => {
    const uniquePrefix = `${Date.now()}` - `${Math.round(Math.random() * 1e9)}`;
    const filename = `${uniquePrefix}_${file.originalname}`;
    cb(null, filename);
  },
});

const upload = multer({
  storage,
});

export default upload;
