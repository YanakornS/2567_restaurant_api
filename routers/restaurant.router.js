const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurant.controller");
const { authJwt } = require("../middlewares");

//http://localhost:5000/api/v1/restaurant

//Create a restaurant

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdminOrModerator],
  restaurantController.create
);

//Get a restaurant

router.get("/", restaurantController.getAll);

//Get a restaurant BY Id

router.get("/:id", [authJwt.verifyToken], restaurantController.getById);

//Update a restaurant
router.put(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdminOrModerator],
  restaurantController.update
);

//Delete a restaurant
router.delete(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  restaurantController.delete
);

module.exports = router;
