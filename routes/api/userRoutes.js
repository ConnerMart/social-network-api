const router = require("express").Router();

const {
  getUsers,
  getOneUser,
  postNewUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

// TODO: update these routes after finalizing models

router.route("/").get(getUsers).post(postNewUser);
// GET all users
// POST a new user

router.route("/:userId").get(getOneUser).put(updateUser).delete(deleteUser);
// GET a single user by its _id and populated thought and friend data
// PUT to update a user by its _id

// DELETE to remove a user by its _id

router.route("/:userId/friends/:friendId");
// TODO: the rest of these routes

module.exports = router;
