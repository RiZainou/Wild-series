const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
const { sayWelcome } = require("../../controllers/sayActions");

router.get("/", sayWelcome);
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const programsRouters = require("./programs/router");

router.use("/programs", programsRouters);

const categoryRouter = require("./category/router");

router.use("/categories", categoryRouter);

/* ************************************************************************* */

module.exports = router;
