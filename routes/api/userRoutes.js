const router = require("express").Router();

// path to /
// GET all users
// GET a single user by its _id and populated thought and friend data
// POST a new user
// PUT to update a user by its _id
// DELETE to remote a user by its _id

// path to /:userId/friends/:friendId
// POST to add a new friend to user's friend list
// DELETE to remove a friend from a user's friend list

module.exports = router;

// TODO: recreate below with methods from userController:

// from class activities:
// const {
//   getUsers,
//   getSingleUser,
//   createUser,
// } = require('../../controllers/userController');

// TODO: recreate below with methods above, matched up to routes on lines 3, 10

// // /api/users
// router.route('/').get(getUsers).post(createUser);

// // /api/users/:userId
// router.route('/:userId').get(getSingleUser);
