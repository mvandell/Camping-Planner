//activities, trip, budget, and clothing
const express = require('express');
const apiRouter = express.Router();

const { requireUser } = require('../auth/utils');

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//<--------------------------GET ALL TRIPS------------------------>
//<--------------------------GET SINGLE TRIP------------------------>
//<--------------------------POST NEW TRIP------------------------>
//<--------------------------PATCH TRIP------------------------>
//<--------------------------TRIP CURRENT TOGGLE------------------------>
//<--------------------------GET ALL BUDGETS------------------------>
//<--------------------------POST NEW BUDGET------------------------>
//<--------------------------DELETE BUDGET------------------------>
//<--------------------------PATCH BUDGET------------------------>
//<--------------------------GET ALL CLOTHING------------------------>
//<--------------------------POST NEW CLOTHING------------------------>
//<--------------------------DELETE CLOTHING------------------------>
//<--------------------------PATCH CLOTHING------------------------>
//<--------------------------CLOTHING PACK TOGGLE------------------------>
//<--------------------------GET ALL ACTIVITIES------------------------>
//<--------------------------POST NEW ACTIVITY------------------------>
//<--------------------------DELETE ACTIVITY------------------------>
//<--------------------------PATCH ACTIVITY------------------------>


module.exports = apiRouter;