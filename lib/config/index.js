// database config default
let database = {
    // connection config
    connection: {
        authMechanism: "MDEFAULT",
        useNewUrlParser: true,
        readPreference: "secondaryPreferred",
        readConcern: {
            level: "majority"
        }
    },
    // transaction config
    transaction: {
        readConcern: { level: 'majority' },
        writeConcern: { w: 1 }
    }
};




module.exports = {
    database
}