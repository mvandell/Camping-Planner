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
        //<------------------------EQUIPMENT----------------------------->
        for (let i = 0; i < equipments.equipment.length; i++) {
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
        //-------------------------CAMPGROUNDS--------------------------->
        const lassen = await prisma.campgrounds.create({
            data: {
                park: "Lassen Volcanic NP",
                price: 26,
                firewood: 15,
                distance: 5,
                curvy: "no",
                reserveFrame: 6,
                website: "https://www.nps.gov/lavo/planyourvisit/manzanita-lake-campground.htm",
                generalArea: "Northern Sierras"
            }
        })
        const sequoiaKingsCanyon = await prisma.campgrounds.create({
            data: {
                park: "Sequoia & Kings Canyon NP",
                price: 32,
                firewood: 7,
                distance: 4.5,
                curvy: "at end",
                reserveFrame: 4,
                website: "https://www.nps.gov/seki/planyourvisit/campgrounds.htm",
                generalArea: "Southern Sierras"
            }
        })
        const calaveras = await prisma.campgrounds.create({
            data: {
                park: "Calaveras Big Trees SP",
                price: 35,
                firewood: 9,
                distance: 3,
                curvy: "not bad",
                reserveFrame: 6,
                website: "https://www.parks.ca.gov/?page_id=551",
                generalArea: "Central Sierras"
            }
        })
        const castleCrags = await prisma.campgrounds.create({
            data: {
                park: "Castle Crags SP",
                price: 25,
                firewood: 8,
                distance: 5,
                curvy: "not bad",
                reserveFrame: 6,
                website: "https://www.parks.ca.gov/?page_id=454",
                generalArea: "Northern Coast Range"
            }
        })
        const plumasEureka = await prisma.campgrounds.create({
            data: {
                park: "Plumas-Eureka SP",
                price: 35,
                firewood: 7,
                distance: 4.5,
                curvy: "little",
                reserveFrame: 6,
                website: "https://www.parks.ca.gov/?page_id=507",
                generalArea: "Central Sierras"
            }
        })
        const sugarPine = await prisma.campgrounds.create({
            data: {
                park: "Sugar Pine Point SP",
                price: 35,
                firewood: 9,
                distance: 4,
                curvy: "no",
                reserveFrame: 6,
                website: "https://www.parks.ca.gov/?page_id=510",
                generalArea: "Tahoe"
            }
        })
        const fallenLeafLake = await prisma.campgrounds.create({
            data: {
                park: "Fallen Leaf Campground",
                price: 44,
                firewood: 8,
                distance: 4,
                curvy: "at end",
                reserveFrame: 6,
                website: "https://www.fs.usda.gov/recarea/ltbmu/recarea/?recid=11781",
                generalArea: "Tahoe"
            }
        })
        const silverLake = await prisma.campgrounds.create({
            data: {
                park: "Silver Lake East",
                price: 28,
                firewood: null,
                distance: 4,
                curvy: "at end",
                reserveFrame: 5,
                website: "https://www.recreation.gov/camping/campgrounds/232263?tab=info",
                generalArea: "Central Sierras"
            }
        })
        const yosemite = await prisma.campgrounds.create({
            data: {
                park: "Yosemite NP",
                price: 36,
                firewood: 13,
                distance: 4.5,
                curvy: "old priest grade, or 1-hour detour",
                reserveFrame: 5,
                website: "https://www.nps.gov/yose/planyourvisit/camping.htm",
                generalArea: "Central Sierras"
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