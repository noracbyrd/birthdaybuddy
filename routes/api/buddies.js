const router = require("express").Router();
const buddiesController = require("../../controllers/buddiesController");

// /api/buddies/
router.route("/")
  .get(buddiesController.findAll)
  .post(buddiesController.create);

// /api/buddies/:id
router
  .route("/:id")
  .get(buddiesController.findById)
  .put(buddiesController.update)
  .delete(buddiesController.remove);

// /api/buddies/:month
router
  .route("/:month")
  .get(buddiesController.findByMonth)

// /api/buddies/:firstname
router
  .route("/:firstname")
  .get(buddiesController.findByFirstName)

// /api/buddies/:lastname
router
  .route("/:lastname")
  .get(buddiesController.findByLastName)

module.exports = router;