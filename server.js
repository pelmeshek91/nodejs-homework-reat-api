import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
//rJ92VDZ3su9tYNTX
const { DB_HOST, PORT } = process.env;
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Database connection successful`);
    });
  })
  .catch((error) => console.log(error.message));
