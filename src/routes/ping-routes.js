const { Router } = require("express");
const { pingController } = require("../controllers/ping-controller");

const pingRouter = Router();

pingRouter.get("/ping", pingController);

module.exports = pingRouter;
