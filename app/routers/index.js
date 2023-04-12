import express from "express";

const router = express.Router();

import categoryRouter from "./categoryRouter.js";
import productRouter from "./productRouter.js";
import TVARouter from "./TVARouter.js";
import userRouter from "./userRouter.js";
import adressRouter from "./adressRouter.js";
import adressTypeRouter from "./adressTypeRouter.js";
import orderRouter from "./orderRouter.js";
import orderStateRouter from "./orderStateRouter.js";
import orderProductRouter from "./orderProductRouter.js";
import orderTypeAdressRouter from "./orderTypeAdressRouter.js";
import productReviewRouter from "./productReviewRouter.js";
import roleRouter from "./roleRouter.js";
import googleRouter from "./googleRouter.js";
import controller from "../controllers/userController.js";
import CW from "../helpers/controllerWrapper.js";

import NotFoundError from "../helpers/NotFoundError.js";
import errorHandler from "../helpers/errorHandler.js";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.use("/categories", categoryRouter);
router.use("/products", productRouter);
router.use("/TVA", TVARouter);
router.use("/users", userRouter);
router.use("/adresses", adressRouter);
router.use("/adressTypes", adressTypeRouter);
router.use("/orders", orderRouter);
router.use("/orderStates", orderStateRouter);
router.use("/orderProduct", orderProductRouter);
router.use("/orderTypeAdress", orderTypeAdressRouter);
router.use("/productReview", productReviewRouter);
router.use("/roles", roleRouter);
router.use("/", googleRouter);

router.patch("/resetPassword", CW(controller.resetPassword));
router.patch("/resetPassword/:token", CW(controller.resetPasswordLink));

router.post("/create-payment-intent", async (req, res) => {
  try {
    const body = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "eur",
      amount: parseFloat(body.totalAmount) * 100,
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    return res.status(400).send({ error: { message: err.message } });
  }
});

router.use((_, __, next) => {
  next(new NotFoundError("Resource not found"));
});

router.use(errorHandler);

export default router;
