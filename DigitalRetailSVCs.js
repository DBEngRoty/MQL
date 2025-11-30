
// Creating a user with full access but not root 
// digitalRetailTech is the Admin with rotationla password.
// digitalRetailTech do not use for apps, it is the root.
/*
No, you cannot rename the root (primary) admin user in an AWS DocumentDB cluster. Why?
The primary user is created during cluster setup and is assigned the root role.
AWS explicitly states that:
“The primary user for an Amazon DocumentDB cluster cannot be deleted, and the role of root for the primary user cannot be revoked.”
You also cannot rename this user.1
*/
// Created in POC



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
