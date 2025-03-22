const {DataTypes} = require('sequelize')
const {db} = require('../connection')

const subjectTable = db.define('subject', {
    subject_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_subject_category_: DataTypes.INTEGER,
    subject_name: DataTypes.STRING,
    time_limit: DataTypes.TIME
})

module.exports = subjectTable