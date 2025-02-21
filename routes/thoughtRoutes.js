const router = require('express').Router();
const Thought = require('../models/Thought');

// ✅ GET all thoughts
router.get('/', async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ✅ GET a single thought by ID
router.get('/:thoughtId', async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ✅ POST create a new thought
router.post('/', async (req, res) => {
  try {
    const thought = await Thought.create(req.body);
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ✅ PUT update a thought by ID
router.put('/:thoughtId', async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      req.body,
      { new: true }
    );
    res.json(updatedThought);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ✅ DELETE remove a thought by ID
router.delete('/:thoughtId', async (req, res) => {
  try {
    const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);
    res.json({ message: 'Thought deleted', deletedThought });
  } catch (err) {
    res.status(500).json(err);
  }
});

// ✅ POST add a reaction to a thought
router.post('/:thoughtId/reactions', async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
  
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
  
      thought.reactions.push(req.body); // ✅ Add reaction to thought
      await thought.save();
  
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// ✅ DELETE remove a reaction from a thought
router.delete('/:thoughtId/reactions/:reactionId', async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
  
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
  
      thought.reactions = thought.reactions.filter(
        (reaction) => reaction._id.toString() !== req.params.reactionId
      );
  
      await thought.save();
      
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;