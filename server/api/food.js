//meals and food
const express = require('express');
const foodRouter = express.Router();

const { requireUser } = require('../auth/utils');

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//<--------------------------GET ALL MEALS------------------------>
//<--------------------------GET SINGLE MEAL------------------------>
//<--------------------------POST NEW MEAL------------------------>
//<--------------------------DELETE MEAL------------------------>
//<--------------------------PATCH MEAL------------------------>
//<--------------------------GET ALL FOOD------------------------>
//<--------------------------POST NEW FOOD------------------------>
//<--------------------------DELETE FOOD------------------------>
//<--------------------------PATCH FOOD------------------------>
//<--------------------------FOOD PURCHASE TOGGLE------------------------>
//<--------------------------FOOD COOLER TOGGLE------------------------>


module.exports = foodRouter;