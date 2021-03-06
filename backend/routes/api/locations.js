const { Event, User, Location, Game } = require('../../db/models');
const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
// const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');

router.get('/', asyncHandler(async(req, res) => {
    const locations = await Location.findAll({include: {all: true}});

    return res.json(locations);
}))

module.exports = router;