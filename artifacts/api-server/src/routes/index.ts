import { Router, type IRouter } from "express";
import healthRouter from "./health.js";
import checkoutRouter from "./checkout.js";

const router: IRouter = Router();

router.use(healthRouter);
router.use(checkoutRouter);

export default router;
