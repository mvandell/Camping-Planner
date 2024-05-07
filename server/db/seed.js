const prisma = require("./client");
const bcrypt = require("bcrypt");
const SALT_COUNT = 10;

const equipments = require("./equipment.js");

async function seed() {
    console.log("Seeding the database");
    await prisma.equipment.deleteMany();
    await prisma.user.deleteMany();
    await prisma.trip.deleteMany();
    await prisma.budget.deleteMany();
    await prisma.meals.deleteMany();
    await prisma.food.deleteMany();
    await prisma.clothing.deleteMany();
    await prisma.campgrounds.deleteMany();
    await prisma.activities.deleteMany();

    try {
        //<------------------------EQUIPMENT---------------------------->
        for (let i=0; i < equipments.equipment.length; i++) {
            await prisma.equipment.create({
                data: {
                    id: i,
                    name: equipments.equipment[i],
                }
            })
        }
        //<--------------------------USERS------------------------------->
        const marisa = await prisma.user.create({
            data: {
                username: 'saphira',
                password: bcrypt.hashSync("Le@fe0n", SALT_COUNT),
                isAdmin: true
            }
        })
        const ana = await prisma.user.create({
            data: {
                username: 'maya',
                password: bcrypt.hashSync("Um6reon!", SALT_COUNT)
            }
        })
        const aloisa = await prisma.user.create({
            data: {
                username: 'aloiivera',
                password: bcrypt.hashSync("Gl@ce0n", SALT_COUNT)
            }
        })


        
        console.log("Database is seeded")
    } catch (error) {
        console.error(error)
    }
}

seed().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect();
    process.exit(1)
})