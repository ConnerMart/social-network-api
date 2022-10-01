const router = require("express").Router();

const {
  getUsers,
  getOneUser,
  postNewUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(postNewUser);
// GET all users
// POST a new user

router.route("/:userId").get(getOneUser).put(updateUser).delete(deleteUser);
// GET a single user by its _id and populated thought and friend data
// PUT to update a user by its _id
// DELETE to remove a user by its _id

router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);
// POST to add a new friend to a user's friend list
// DELETE to remove a friend from a user's friend list

module.exports = router;
