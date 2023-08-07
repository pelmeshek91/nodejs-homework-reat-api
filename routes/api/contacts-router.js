import express from "express";
import contactsControllers from "../../controllers/contacts-controllers.js";
import { authenticate, isValidId } from "../../middlewares/index.js";

const contactsRouter = express.Router();

contactsRouter.use(authenticate);

contactsRouter.get("/", contactsControllers.getAll);

contactsRouter.get("/:contactId", isValidId, contactsControllers.getById);

contactsRouter.post("/", contactsControllers.add);

contactsRouter.delete("/:contactId", isValidId, contactsControllers.remove);

contactsRouter.put("/:contactId", isValidId, contactsControllers.update);

contactsRouter.patch(
  "/:contactId/favorite",
  isValidId,
  contactsControllers.updateStatusContact
);

export default contactsRouter;
