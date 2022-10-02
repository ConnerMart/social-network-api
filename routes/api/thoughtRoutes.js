const router = require("express").Router();

const {
  // functions here
  getThoughts,
  getOneThought,
  postNewThought,
  updateThought,
  deleteThought,
  postNewReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// path to /
router.route("/").get(getThoughts).post(postNewThought);
// GET to get all thoughts
// POST to create a new thought

router
  .route("/:thoughtId")
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);
// GET to get a single thought by its _id
// PUT to update a thought by its _id
// DELETE to remove a thought by its _id

// path to /:thoughtId/reactions
router.route("/:thoughtId/reactions").post(postNewReaction);
// POST to create a reaction stored in a single thought's reactions array field

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);
// DELETE to pull and remove a reaction by the reaction's reactionId value

module.exports = router;
