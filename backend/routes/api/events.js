const { Event, User, Location, Game } = require('../../db/models');
const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');

router.get('/', asyncHandler(async(req, res) => {
    const events = await Event.findAll({include: {all: true}});

    return res.json(events);
}))

router.post('/', requireAuth, asyncHandler(async(req, res) => {

    const { name, format, date, locationId, hostId, image } = req.body;

    const event = await Event.create({
        name,
        gameId: format,
        hostId,
        date,
        locationId,
        image
    })

    const theEvent = await Event.findOne({where: {hostId, date, gameId: format, name, locationId}, include: { all: true }})
    return res.json(theEvent);
}))

router.put('/', requireAuth, asyncHandler(async(req, res) => {

    const { image, name, format, date, locationId, hostId, eventId } = req.body;

    const event = await Event.findOne({where: {id: eventId}})

    console.log(event, "<----------------------------------")

    await event.update({
        name,
        gameId: format,
        hostId,
        date,
        locationId,
        image
    })

    const updatedEvent = await Event.findByPk(eventId);
    return res.json(updatedEvent);
}))

router.delete('/', requireAuth, asyncHandler(async(req, res) => {

    const { eventId } = req.body;

    const event = await Event.findOne({where: {id: eventId}})

    await event.destroy()

    return res.json({id: event.id, message: "event deleted successfully"});
}))


module.exports = router;