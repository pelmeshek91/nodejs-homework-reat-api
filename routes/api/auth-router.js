import express from "express";

import usersSchema from "../../schemes/users-schema.js";
import validateBody from "../../decorators/validateBody.js";
import authControllers from "../../controllers/auth-controllers.js";
import { authenticate } from "../../middlewares/index.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(usersSchema.usersSignUpSchema),
  authControllers.register
);
authRouter.post(
  "/login",
  validateBody(usersSchema.usersSignInSchema),
  authControllers.login
);
authRouter.get("/current", authenticate, authControllers.current);
authRouter.post("/logout", authenticate, authControllers.logout);
export default authRouter;
