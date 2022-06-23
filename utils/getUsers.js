// Store connected users
var users = {}

// Function to get users online in a room
function getUsers(arr){
    onlineUsers = []
    arr.forEach((onlineUser) => {
        onlineUser.push(Object.values(onlineUser)[0])
    })
    return onlineUsers
}

module.exports = {getUsers, users};