import { Schema, model } from "mongoose";
import { handleSaveError, allowUpdateValidate } from "./hooks/index.js";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: [true, "Set email for contact"],
    },
    phone: {
      type: String,
      required: [true, "Set phone for contact"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
  }
);

contactSchema.pre("findOneAndUpdate", allowUpdateValidate);
contactSchema.post("findOneAndUpdate", handleSaveError);
contactSchema.post("save", handleSaveError);

const Contact = model("contact", contactSchema);

export default Contact;
