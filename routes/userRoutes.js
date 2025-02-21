const router = require('express').Router();
const User = require('../models/User');

router.get('/', async (req, res) => { res.json(await User.find().populate('thoughts').populate('friends')); });
router.get('/:id', async (req, res) => { res.json(await User.findById(req.params.id).populate('thoughts').populate('friends')); });
router.post('/', async (req, res) => { res.json(await User.create(req.body)); });
router.put('/:id', async (req, res) => { res.json(await User.findByIdAndUpdate(req.params.id, req.body, { new: true })); });
router.delete('/:id', async (req, res) => { res.json(await User.findByIdAndDelete(req.params.id)); });
router.post('/:userId/friends/:friendId', async (req, res) => { const user = await User.findById(req.params.userId); user.friends.push(req.params.friendId); await user.save(); res.json(user); });
router.delete('/:userId/friends/:friendId', async (req, res) => { const user = await User.findById(req.params.userId); user.friends.pull(req.params.friendId); await user.save(); res.json(user); });

module.exports = router;