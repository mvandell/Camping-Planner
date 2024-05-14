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
//<--------------------------GET SINGLE USER------------------------>
//<--------------------------LOGIN------------------------>
//<--------------------------DELETE USER------------------------>
//<--------------------------PATCH USER------------------------>
//<--------------------------GET ALL CAMPGROUNDS------------------------>
//<--------------------------GET SINGLE CAMPGROUND------------------------>
//<--------------------------POST CAMPGROUND------------------------>
//<--------------------------DELETE CAMPGROUND------------------------>
//<--------------------------PATCH CAMPGROUND------------------------>
//<--------------------------GET ALL EQUIPMENT------------------------>
//<--------------------------POST EQUIPMENT------------------------>
//<--------------------------DELETE EQUIPMENT------------------------>
//<--------------------------PATCH EQUIPMENT------------------------>
//<--------------------------EQUIPMENT PACK TOGGLE------------------------>
//<--------------------------EQUIPMENT NEED TOGGLE------------------------>
//<--------------------------DELETE TRIP------------------------>


module.exports = authRouter;