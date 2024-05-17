//activities, trip, budget, and clothing
const express = require('express');
const apiRouter = express.Router();

const { requireUser } = require('../auth/utils');

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//<--------------------------GET ALL TRIPS------------------------>
//GET /api/trip
apiRouter.get("/trip", requireUser, async (req, res, next) => {
    try {
        const allTrips = await prisma.trip.findMany();
        res.send(allTrips);
    } catch (error) {
        next(error);
    }
});
//<--------------------------GET SINGLE TRIP------------------------>
//GET /api/trip/:id
apiRouter.get("/trip/:id", requireUser, async (req, res, next) => {
    try {
        const trip = await prisma.trip.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });
        res.send(trip)
    } catch (error) {
        next(error);
    }
});
//<--------------------------GET ALL BUDGETS------------------------>
//GET /api/budget
apiRouter.get("/budget", requireUser, async (req, res, next) => {
    try {
        const allBudgets = await prisma.budget.findMany();
        res.send(allBudgets);
    } catch (error) {
        next(error);
    }
});
//<--------------------------GET ALL CLOTHING------------------------>
//GET /api/clothing
apiRouter.get("/clothing", requireUser, async (req, res, next) => {
    try {
        const allClothing = await prisma.clothing.findMany();
        res.send(allClothing);
    } catch (error) {
        next(error);
    }
});
//<--------------------------GET ALL ACTIVITIES------------------------>
//GET /api/activity
apiRouter.get("/activity", requireUser, async (req, res, next) => {
    try {
        const allActivities = await prisma.activities.findMany();
        res.send(allActivities);
    } catch (error) {
        next(error);
    }
});
//<--------------------------DELETE BUDGET------------------------>
//DELETE /api/budget/:id
apiRouter.delete("/budget/:id", requireUser, async (req, res, next) => {
    try {
        const deletedBudget = await prisma.budget.delete({
            where: {id: Number(req.params.id)}
        });
        if (!deletedBudget) {
            return res.status(404).send("Budget not found");
        }
        res.send(deletedBudget)
    } catch (error) {
        next(error);
    }
});
//<--------------------------DELETE CLOTHING------------------------>
//DELETE /api/clothing/:id
apiRouter.delete("/clothing/:id", requireUser, async (req, res, next) => {
    try {
        const deletedClothing = await prisma.clothing.delete({
            where: {id: Number(req.params.id)}
        });
        if (!deletedClothing) {
            return res.status(404).send("Clothing not found");
        }
        res.send(deletedClothing)
    } catch (error) {
        next(error);
    }
});
//<--------------------------DELETE ACTIVITY------------------------>
//DELETE /api/activity/:id
apiRouter.delete("/activity/:id", requireUser, async (req, res, next) => {
    try {
        const deletedActivity = await prisma.activities.delete({
            where: {id: Number(req.params.id)}
        });
        if (!deletedActivity) {
            return res.status(404).send("Activity not found");
        }
        res.send(deletedActivity)
    } catch (error) {
        next(error);
    }
});
//<--------------------------POST NEW TRIP------------------------>
//POST /api/trip
apiRouter.post("/trip", requireUser, async (req, res, next) => {
    try {
        const {startDate, endDate, campgroundId, gasTotal, gasSingle, fireNight, parking} = req.body;
        const newTrip = await prisma.trip.create({
            data: {
                startDate, 
                endDate, 
                campground: {connect: {id: campgroundId}}, 
                gasTotal, 
                gasSingle, 
                fireNight, 
                parking
            },
            include: {campground: true}
        });
        res.status(201).send(newTrip);
    } catch (error) {
        next(error);
    }
});
//<--------------------------POST NEW BUDGET------------------------>
//POST /api/budget
apiRouter.post("/budget", requireUser, async (req, res, next) => {
    try {
        const {name, tripId, total, individual} = req.body;
        const newBudget = await prisma.budget.create({
            data: {
                name, 
                trip: {connect: {id: tripId}}, 
                total, 
                individual
            },
            include: {trip: true}
        });
        res.status(201).send(newBudget);
    } catch (error) {
        next(error);
    }
});
//<--------------------------POST NEW CLOTHING------------------------>
//POST /api/clothing
apiRouter.post("/clothing", requireUser, async (req, res, next) => {
    try {
        const {name} = req.body;
        const newClothing = await prisma.clothing.create({
            data: {
                name,
                user: {connect: {id: req.user.id}}
            },
            include: {user: true}
        });
        res.status(201).send(newClothing);
    } catch (error) {
        next(error);
    }
});
//<--------------------------POST NEW ACTIVITY------------------------>
//POST /api/activity
apiRouter.post("/activity", requireUser, async (req, res, next) => {
    try {
        const {name} = req.body;
        const newActivity = await prisma.activities.create({
            data: {
                name
            } //connect campground in a patch?
        })
        res.status(201).send(newActivity);
    } catch (error) {
        next(error);
    }
});
//<--------------------------PATCH TRIP------------------------>
//<--------------------------TRIP CURRENT TOGGLE------------------------>
//<--------------------------PATCH BUDGET------------------------>
//<--------------------------PATCH CLOTHING------------------------>
//<--------------------------CLOTHING PACK TOGGLE------------------------>
//<--------------------------PATCH ACTIVITY------------------------>


module.exports = apiRouter;