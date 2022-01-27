

// ----------------------------------
// Export
// ----------------------------------
async function voice_event_init(client) {

}

async function voice_event_create(old_state, new_state) {
    console.log(old_state)
    console.log(new_state)
}
// ----------------------------------


// ----------------------------------
// Checker
// ----------------------------------
function joined(old_state, new_state) {
    return old_state.channel_id === null && new_state.channel_id !== null
}

function leaved(old_state, new_state) {
    return old_state.channel_id !== null && new_state.channel_id === null
}

function moved(old_state, new_state) {
    return old_state.channel_id !== new_state.channel_id
}
// ----------------------------------


module.exports = { voice_event_create }
