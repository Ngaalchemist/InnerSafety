import { Router, type IRouter } from "express";
import healthRouter from "./health.js";
import checkoutRouter from "./checkout.js";     
import reconcileRouter from "./reconcile.js";

const router: IRouter = Router();

router.use(healthRouter);
router.use(checkoutRouter);
router.use(reconcileRouter);

export default router;
