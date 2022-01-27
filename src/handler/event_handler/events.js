// helper fields
const s = "events."
const schedule = require('node-schedule')
const { voice_event_create } = require('src/handler/event_handler/events/voice_event/voice_event')

// ---------------------------------
// Export
// ---------------------------------
async function init(client) {
// react on voice states
    client.on("voiceStateUpdate", async (old_state, new_state) => await voice_event(old_state, new_state))
}

async function event_create(msg) {

}
// ---------------------------------


// ----------------------------------
// Inits
// ----------------------------------

// ----------------------------------


// ----------------------------------
// Events
// ----------------------------------
async function voice_event(old_state, new_state) {
    if (from_correct_guild(new_state.guild.id)) await voice_event_create(old_state, new_state)
}
// ----------------------------------


// ----------------------------------
// Checker
// ----------------------------------
function from_correct_guild(guild_id) {
    return guild_id === "801473859227222017"
}
// ----------------------------------


module.exports = { init, event_create }
