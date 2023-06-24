const { getUsers, createUser } = require("../controllers/userController");

const router = require("express").Router();

router.route("/").post(createUser);

module.exports = router;
