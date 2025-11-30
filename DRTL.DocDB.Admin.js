/*
Admin
digitalRetailTech
digitalretail
 

DigitalRetailSvc
Ac2allCol4DocDb458xcvHsD
*/


use admin;


db.createUser({
  user: "DigitalRetailSvc",
  pwd: "Ac2allCol4DocDb458xcvHsD",
  roles: [
    { role: "dbAdminAnyDatabase", db: "admin" },
    { role: "readWriteAnyDatabase", db: "admin" },
    { role: "clusterAdmin", db: "admin" }
  ]
})


/* Check users
db.getUsers()
*/