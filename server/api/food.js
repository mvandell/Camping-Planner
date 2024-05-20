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
        const allFood = await prisma.food.findMany();
        res.send(allFood);
    } catch (error) {
        next(error);
    }
});
//<--------------------------DELETE MEAL------------------------>
//DELETE api/food/meal/:id
foodRouter.delete("/meal/:id", requireUser, async (req, res, next) => {
    try {
        const deletedMeal = await prisma.meals.delete({
            where: {id: Number(req.params.id)}
        });
        if (!deletedMeal) {
            return res.status(404).send("Meal not found");
        }
        res.send(deletedMeal)
    } catch (error) {
        next(error);
    }
});
//<--------------------------DELETE FOOD------------------------>
//DELETE api/food/food/:id
foodRouter.delete("/food/:id", requireUser, async (req, res, next) => {
    try {
        const deletedFood = await prisma.food.delete({
            where: {id: Number(req.params.id)}
        });
        if (!deletedFood) {
            return res.status(404).send("Food not found");
        }
        res.send(deletedFood)
    } catch (error) {
        next(error);
    }
});
//<--------------------------POST NEW MEAL------------------------>
//POST api/food/meal
foodRouter.post("/meal", requireUser, async (req, res, next) => {
    try {
        const {day, course, name} = req.body;
        const newMeal = await prisma.meals.create({
            data: {
                day,
                course,
                name
            }
        });
        res.status(201).send(newMeal);
    } catch (error) {
        next(error);
    }
});
//<--------------------------POST NEW FOOD------------------------>
//POST api/food/food
foodRouter.post("/food", requireUser, async (req, res, next) => {
    try {
        const {name, cooler, userId} = req.body;
        const newFood = await prisma.food.create({
            data: {
                name,
                cooler,
                user: {connect: {id: userId}}
            },
            include: {user: true}
        });
        res.status(201).send(newFood);
    } catch (error) {
        next(error);
    }
});
//<--------------------------PATCH MEAL------------------------>
//<--------------------------PATCH FOOD------------------------>
//<--------------------------FOOD PURCHASE TOGGLE------------------------>
//<--------------------------FOOD COOLER TOGGLE------------------------>


module.exports = foodRouter;