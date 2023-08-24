import express from "express";

import authController from "../../controllers/auth-controller.js";
import validateBody from "../../decorators/validateBody.js";
import usersSchemas from "../../schemas/users-schemas.js";
import authenticate from "../../middlewares/authenticate.js";
import upload from "../../middlewares/upload.js";

const authRouter = express.Router();

//routes without authentication
authRouter.post(
	"/register",
	validateBody(usersSchemas.userRegisterSchema),
	authController.register
);

/*  TODO:
authRouter.post(
	"/login",
	validateBody(usersSchemas.userSigninSchema),
	authController.login
); */

// routes with authentication
// TODO: authRouter.get("/current", authenticate, authController.getCurrent);

//  TODO: authRouter.post("/logout", authenticate, authController.logout);

/* update avatar - ендпоінт /users/avatars і метод PATCH. */
/* TODO:
authRouter.patch(
	"/avatars",
	authenticate,
	upload.single("avatarURL"),
	authController.updateAvatar
); */

export default authRouter;

// ====================================================================

/* // resend verification email TODO:
authRouter.post("/verify", validateBody(usersSchemas.userEmailSchema), authController.resendVerifyEmail)
// verify email via link with verification token
authRouter.get("/verify/:verificationToken", authController.verify); */

/* //update subscription
authRouter.patch(	"/",	authenticate,
	validateBody(usersSchemas.userSubscriptionSchema),
	authController.updateSubscription
); */
