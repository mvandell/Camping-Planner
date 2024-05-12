const prisma = require("./client");
const bcrypt = require("bcrypt");
const SALT_COUNT = 10;

const equipments = require("./equipment.js");

async function seed() {
    console.log("Seeding the database");
    await prisma.food.deleteMany();
    await prisma.meals.deleteMany();
    await prisma.budget.deleteMany();
    await prisma.trip.deleteMany();
    await prisma.activities.deleteMany();
    await prisma.campgrounds.deleteMany();
    await prisma.clothing.deleteMany();
    await prisma.user.deleteMany();
    await prisma.equipment.deleteMany();

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
                isAdmin: true,
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
        //---------------------------CLOTHING---------------------------->
        const allUsers = ["saphira", "maya", "aloiivera"];
        for (let i = 0; i < allUsers.length; i++) {
            for (let j = 0; j < equipments.clothing.length; j++) {
                await prisma.clothing.create({
                    data: {
                        name: equipments.clothing[j],
                        user: {connect: {username: allUsers[i]}}
                    },
                    include: {user: true}
                })
            }
        }
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
                firewood: 0,
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
        const koa = await prisma.campgrounds.create({
            data: {
                park: "Shingletown KOA",
                price: 38,
                firewood: 7,
                distance: 4.5,
                curvy: "no",
                reserveFrame: 6,
                website: "https://koa.com/campgrounds/mt-lassen/",
                generalArea: "Northern Sierras"
            }
        })
        //--------------------------ACTIVITIES--------------------------->
        const kayak = await prisma.activities.create({
            data: {
                name: "kayaking"
            }
        })
        const hike = await prisma.activities.create({
            data: {
                name: "hiking"
            }
        })
        const cave = await prisma.activities.create({
            data: {
                name: "caves"
            }
        })
        const swim = await prisma.activities.create({
            data: {
                name: "swimming"
            }
        })
        const sulphur = await prisma.activities.create({
            data: {
                name: "Sulphur Works"
            }
        })
        const canoe = await prisma.activities.create({
            data: {
                name: "canoeing"
            }
        })
        //-----------------------------TRIP------------------------------>
        const y2022 = await prisma.trip.create({
            data: {
                startDate: new Date("June 10, 2022"),
                endDate: new Date("June 12, 2022"),
                campground: {connect: {id: lassen.id}},
                current: false,
                gasTotal: 180,
                gasSingle: 60,
                fireNight: 45,
                parking: 30,
                activities: {connect: {
                    id: kayak.id,
                    id: hike.id,
                    id: swim.id
                }}
            }
        })
        const y2023 = await prisma.trip.create({
            data: {
                startDate: new Date("June 9, 2023"),
                endDate: new Date("June 12, 2023"),
                campground: {connect: {id: koa.id}},
                current: false,
                gasTotal: 180,
                gasSingle: 60,
                fireNight: 16,
                parking: 0,
                budgets: {create: {
                    name: "kayaking",
                    total: 38,
                    individual: 12.67
                }},
                activities: {connect: {
                    id: kayak.id,
                    id: hike.id,
                    id: swim.id
                }}
            }
        })
        const y2024 = await prisma.trip.create({
            data: {
                startDate: new Date("June 28, 2024"),
                endDate: new Date("July 1, 2024"),
                campground: {connect: {id: castleCrags.id}},
                gasTotal: 180,
                gasSingle: 60,
                fireNight: 24,
                parking: 0,
                budgets: {create: {
                    name: "Shasta Caverns",
                    total: 131,
                    individual: 43.68
                }},
                activities: {connect: {
                    id: kayak.id,
                    id: cave.id,
                    id: canoe.id,
                    id: swim.id
                }}
            }
        })
        //----------------------------BUDGET (inside trip?)----------------------------->
        //-----------------------------MEALS----------------------------->
        //-----------------------------FOOD------------------------------>


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