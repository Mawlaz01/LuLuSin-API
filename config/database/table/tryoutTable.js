const {DataTypes} = require(`sequelize`)
const {db} = require(`../connection`)

const tryoutTable = db.define(`tryout`,{
    tryout_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    tryout_name:DataTypes.STRING
})

module.exports = tryoutTable