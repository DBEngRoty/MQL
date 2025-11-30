// Setup done in AWS Document DB in April 2025

use admin;

db.createUser({
    user: "data-team",
    pwd: "ddb4dt2access!aws", // Set a secure password
    roles: [
        { role: "readAnyDatabase", db: "admin" },
        { role: "dbAdminAnyDatabase", db: "data-team-apps"}
    ]
})


db.createUser({
    user: "newUser",
    pwd: "password123",
    roles: [
      { role: "dbAdminAnyDatabase", db: "admin" },
      { role: "readWriteAnyDatabase", db: "admin" }
    ]
  })
  




use admin;

db.createUser({
    user: "adminUser",
    pwd: "securePassword",  // Use a secure password
    roles: [
        { role: "root", db: "admin" }  // Root role gives full access to all databases
    ]
})


// 202504
db.createUser({
    user: "protariu",
    pwd: "3Secunde4control!total",  // Use a secure password
    roles: [
        { role: "root", db: "admin" }  // Root role gives full access to all databases
    ]
})


// Coomands
db.getUsers()
db.dropUser("datateam")
cls;

