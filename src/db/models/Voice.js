// See also: https://github.com/EliasSchaut/Discord-Bot-Template/wiki/How-to-database
// Sequelize-Types: https://sequelize.org/v5/manual/data-types.html
// Examples: https://discordjs.guide/sequelize/

// ---------------------------------------------
// Model
// ---------------------------------------------
const _TABLE = (sequelize, Sequelize) => {
    return sequelize.define('Voice', {
        "index": {
            type: Sequelize.INTEGER
        },
        "channel_id": {
            type: Sequelize.STRING,
            unique: true,
        },
    }, {
        timestamp: false
    })
}
// ---------------------------------------------


// ---------------------------------------------
// Helper
// ---------------------------------------------
// add stuff to database
async function add(client, index, channel_id) {
    try {
        await client.DB["Voice"].TABLE.create({
            "index": index,
            "channel_id": channel_id
        })

    } catch (e) {
        if (e.name === 'SequelizeUniqueConstraintError') {
            client.logger.log("warn",`${channel_id} already exist in voice database!`)

        } else {
            client.logger.log("error",`Something went wrong with adding this ${channel_id} in voice database!`)
        }
    }
}

// get stuff from database
async function get(client, index, channel_id) {
    const tags = await client.DB["Voice"].TABLE.findAll({ where: { index: index } })

    if (tags.length) {
        return tags.map((e) => { return e.channel_id })

    } else {
        client.logger.log("warn",`${channel_id} not in voice database!`)
        return []
    }
}

// remove tag in database
async function remove(client, index) {
    const rowCount = await client.DB["Voice"].TABLE.destroy({ where: { index: index } })

    if (rowCount) {
        return true

    } else {
        client.logger.log("error", `Could not delete tag with index ${index} in voice database!`)
        return false
    }
}
// ---------------------------------------------


module.exports = { _TABLE, add, get, remove }
