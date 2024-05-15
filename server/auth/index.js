//user, equipment, and campgrounds
const express = require("express");
const authRouter = express.Router();

const {requireAdmin, requireUser} = require("./utils");

const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

const jwt = require("jsonwebtoken");
const {JWT_SECRET} = process.env;
const bcrypt = require("bcrypt");
const SALT_COUNT = 10;

//<--------------------------GET ALL USERS------------------------>
//ADMIN ONLY
//GET /auth/users
authRouter.get("/users", [requireUser, requireAdmin], async (req, res, next) => {
    try {
        const user = prisma.user;
        const allUsers = await user.findMany();

        delete user.password;
        res.send(allUsers);
    } catch (error) {
        next(error);
    }
});
//<--------------------------GET ACCOUNT------------------------>
//GET /auth/account
authRouter.get("./account", requireUser, async (req, res, next) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: req.user.id
            }
        });
        delete user.password;
        res.send(user);
    } catch (error) {
        next(error);
    }
});
//<--------------------------GET ALL CAMPGROUNDS------------------------>
//GET /auth/campground
authRouter.get("./campground", async (req, res, next) => {
    try {
        const allCampgrounds = await prisma.campgrounds.findMany();
        res.send(allCampgrounds);
    } catch (error) {
        next(error);
    }
});
//<--------------------------GET SINGLE CAMPGROUND------------------------>
//GET /auth/campground/:id
authRouter.get("./campground/:id", async (req, res, next) => {
    try {
        const campground = await prisma.campgrounds.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });
        res.send(campground);
    } catch (error) {
        next(error);
    }
});
//<--------------------------GET ALL EQUIPMENT------------------------>
//GET /auth/equipment
authRouter.get("./equipment", requireUser, async (req, res, next) => {
    try {
        const allEquipment = await prisma.equipment.findMany();
        res.send(allEquipment);
    } catch (error) {
        next(error);
    }
});

//<--------------------------DELETE USER------------------------>
//ADMIN ONLY
//DELETE /auth/user/:id
authRouter.delete("/user/:id", [requireUser, requireAdmin], async (req, res, next) => {
    try {
        const deletedUser = await prisma.user.delete({
            where: {id: +req.params.id}
        });
        if (!deletedUser) {
            return res.status(404).send("User not found");
        }
        res.send("User successfully deleted");
    } catch (error) {
        next(error);
    }
});
//<--------------------------DELETE CAMPGROUND------------------------>
//ADMIN ONLY
//DELETE /auth/campground/:id
authRouter.delete("/campground/:id", [requireUser, requireAdmin], async (req, res, next) => {
    try {
        const deletedCampground = await prisma.campgrounds.delete({
            where: {id: Number(req.params.id)}
        });
        if (!deletedCampground) {
            return res.status(404).send("Campground not found");
        }
        res.send(deletedCampground)
    } catch (error) {
        next(error)
    }
});
//<--------------------------DELETE EQUIPMENT------------------------>
//ADMIN ONLY
//DELETE /auth/equipment/:id
authRouter.delete("/equipment/:id", [requireUser, requireAdmin], async (req, res, next) => {
    try {
        const deletedEquipment = await prisma.equipment.delete({
            where: {id: Number(req.params.id)}
        });
        if (!deletedEquipment) {
            return res.status(404).send("Equipment item not found");
        }
        res.send(deletedEquipment)
    } catch (error) {
        next(error)
    }
});
//<--------------------------DELETE TRIP------------------------>
//ADMIN ONLY
//DELETE /auth/trip/:id
authRouter.delete("/trip/:id", [requireUser, requireAdmin], async (req, res, next) => {
    try {
        const deletedTrip = await prisma.trip.delete({
            where: {id: Number(req.params.id)}
        });
        if (!deletedTrip) {
            return res.status(404).send("Trip not found");
        }
        res.send(deletedTrip)
    } catch (error) {
        next(error)
    }
});

//<--------------------------LOGIN------------------------>
//<--------------------------POST EQUIPMENT------------------------>
//<--------------------------POST CAMPGROUND------------------------>

//<--------------------------PATCH USER------------------------>
//<--------------------------PATCH CAMPGROUND------------------------>
//<--------------------------PATCH EQUIPMENT------------------------>
//<--------------------------EQUIPMENT PACK TOGGLE------------------------>
//<--------------------------EQUIPMENT NEED TOGGLE------------------------>


module.exports = authRouter;