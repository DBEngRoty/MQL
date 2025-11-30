// To grant a user administrative privileges on a specific database in MongoDB without giving full admin access, you can assign roles that provide necessary permissions while limiting broader access. Here are some roles you can consider:
// dbAdmin: Provides administrative privileges on the specified database, including the ability to create and modify indexes, view statistics, and run administrative commands.
// userAdmin: Allows the user to manage other users and roles within the specified database.
// readWrite: Grants read and write access to the specified database.
// dbOwner: Combines dbAdmin, userAdmin, and readWrite roles, providing comprehensive administrative access to the specified database without affecting other databases.
// These roles can be combined to tailor the level of access you want to grant.


use admin;

db.createUser({
    user: "Nancy.Chelaru",
    pwd: "!RomChi!", // Set a secure password
    roles: [
        { role: "read", db: "admin" },
        { role: "read", db: "data-team-apps" }
    ]
})


use data-team-apps;


db.grantRolesToUser("Nancy.Chelaru", [
      { role: "read", db: "data-team-apps" }
    ])
    


    

