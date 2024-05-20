//meals and food
const express = require('express');
const foodRouter = express.Router();

const { requireUser } = require('../auth/utils');

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//<--------------------------GET ALL MEALS------------------------>
//GET api/food/meal
foodRouter.get("/meal", requireUser, async (req, res, next) => {
    try {
        const allMeals = await prisma.meals.findMany();
        res.send(allMeals);
    } catch (error) {
        next(error);
    }
});
//<--------------------------GET SINGLE MEAL------------------------>
//GET api/food/meal/:id
foodRouter.get("/meal/:id", requireUser, async (req, res, next) => {
    try {
        const meal = await prisma.meals.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });
        res.send(meal);
    } catch (error) {
        next(error);
    }
});
//<--------------------------GET ALL FOOD------------------------>
//GET api/food/food
foodRouter.get("/food", requireUser, async (req, res, next) => {
    try {
        const allFood = await prisma.meals.findMany();
        res.send(allFood);
    } catch (error) {
        next(error);
    }
});
//<--------------------------DELETE MEAL------------------------>
//<--------------------------DELETE FOOD------------------------>
//<--------------------------POST NEW MEAL------------------------>
//<--------------------------POST NEW FOOD------------------------>
//<--------------------------PATCH MEAL------------------------>
//<--------------------------PATCH FOOD------------------------>
//<--------------------------FOOD PURCHASE TOGGLE------------------------>
//<--------------------------FOOD COOLER TOGGLE------------------------>


module.exports = foodRouter;