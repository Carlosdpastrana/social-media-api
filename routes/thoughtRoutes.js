const router = require('express').Router();
const Thought = require('../models/Thought');
const User = require('../models/User');

router.get('/', async (req, res) => { res.json(await Thought.find()); });
router.get('/:id', async (req, res) => { res.json(await Thought.findById(req.params.id)); });
router.post('/', async (req, res) => { const thought = await Thought.create(req.body); await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: thought._id } }); res.json(thought); });
router.put('/:id', async (req, res) => { res.json(await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true })); });
router.delete('/:id', async (req, res) => { res.json(await Thought.findByIdAndDelete(req.params.id)); });
router.post('/:thoughtId/reactions', async (req, res) => { const thought = await Thought.findById(req.params.thoughtId); thought.reactions.push(req.body); await thought.save(); res.json(thought); });
router.delete('/:thoughtId/reactions/:reactionId', async (req, res) => { const thought = await Thought.findById(req.params.thoughtId); thought.reactions.id(req.params.reactionId).remove(); await thought.save(); res.json(thought); });

module.exports = router;
